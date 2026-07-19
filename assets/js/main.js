/* DromoMinds Solutions — site scripts */

// ---------- Header scroll state ----------
const header = document.getElementById('header');
if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ---------- Mobile menu ----------
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        mobileToggle.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
        document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
    }));
}

// ---------- Reveal on scroll ----------
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Animated counters ----------
function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.childNodes[0].nodeValue = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}
const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateCount(e.target);
            countObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

// ---------- Client region tabs (Trusted by Leaders) ----------
const clientGrid = document.getElementById('clientGrid');
if (clientGrid) {
    const tabs = document.querySelectorAll('.gx-ctab');
    const cards = clientGrid.querySelectorAll('.gx-client');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const region = tab.dataset.region;
            cards.forEach(card => {
                card.classList.toggle('hide', region !== 'all' && card.dataset.region !== region);
            });
        });
    });
}

// ---------- Contact / generic form ----------
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! Your message has been received — we will get back to you within one business day.');
        form.reset();
    });
});

// ============================================================
// StallSpot — interactive floor plan demo
// ============================================================
const stallGrid = document.getElementById('stallGrid');
if (stallGrid) {
    const COLS = 8;
    const ROWS = 6;
    const PRICES = { premium: 45000, standard: 25000, economy: 15000 };
    // deterministic set of pre-booked stalls so the map looks alive
    const BOOKED = new Set(['A2', 'A5', 'B7', 'C1', 'C4', 'D3', 'D8', 'E6', 'F2', 'F5', 'B3', 'E1']);

    const selected = new Map();
    const ssRows = document.getElementById('ssRows');
    const ssTotal = document.getElementById('ssTotal');
    const ssBook = document.getElementById('ssBook');
    const fmt = n => '₹' + n.toLocaleString('en-IN');

    function tierFor(rowIdx) {
        if (rowIdx === 0) return 'premium';   // front row faces the stage
        if (rowIdx <= 3) return 'standard';
        return 'economy';
    }

    function renderSummary() {
        ssRows.innerHTML = '';
        if (selected.size === 0) {
            ssRows.innerHTML = '<div class="ss-empty">No stalls selected yet — tap any available stall on the floor plan.</div>';
        } else {
            [...selected.entries()].sort().forEach(([id, tier]) => {
                const row = document.createElement('div');
                row.className = 'ss-row';
                row.innerHTML = `<span>Stall ${id}${tier === 'premium' ? '<em>PREMIUM</em>' : ''}</span>` +
                    `<span>${fmt(PRICES[tier])} <button class="rm" data-id="${id}" aria-label="Remove ${id}"><i class="fas fa-xmark"></i></button></span>`;
                ssRows.appendChild(row);
            });
        }
        const total = [...selected.values()].reduce((s, t) => s + PRICES[t], 0);
        ssTotal.textContent = fmt(total);
    }

    ssRows.addEventListener('click', e => {
        const btn = e.target.closest('.rm');
        if (!btn) return;
        selected.delete(btn.dataset.id);
        const cell = stallGrid.querySelector(`[data-id="${btn.dataset.id}"]`);
        if (cell) cell.classList.remove('selected');
        renderSummary();
    });

    for (let r = 0; r < ROWS; r++) {
        const rowLetter = String.fromCharCode(65 + r);
        for (let c = 1; c <= COLS; c++) {
            const id = rowLetter + c;
            const tier = tierFor(r);
            const cell = document.createElement('button');
            cell.type = 'button';
            cell.className = 'stall' + (tier === 'premium' ? ' premium' : '');
            cell.dataset.id = id;
            cell.textContent = id;
            if (BOOKED.has(id)) {
                cell.classList.add('booked');
                cell.disabled = true;
                cell.title = 'Already booked';
            } else {
                cell.title = `Stall ${id} — ${tier} — ${fmt(PRICES[tier])}`;
                cell.addEventListener('click', () => {
                    if (selected.has(id)) {
                        selected.delete(id);
                        cell.classList.remove('selected');
                    } else {
                        selected.set(id, tier);
                        cell.classList.add('selected');
                    }
                    renderSummary();
                });
            }
            stallGrid.appendChild(cell);
        }
        // aisle after rows B and D
        if (r === 1 || r === 3) {
            const aisle = document.createElement('div');
            aisle.className = 'stall-aisle';
            stallGrid.appendChild(aisle);
        }
    }

    ssBook.addEventListener('click', () => {
        if (selected.size === 0) {
            alert('Pick at least one available stall on the floor plan first.');
            return;
        }
        const ids = [...selected.keys()].sort().join(', ');
        const total = [...selected.values()].reduce((s, t) => s + PRICES[t], 0);
        alert(`Demo booking confirmed!\n\nStalls: ${ids}\nTotal: ${fmt(total)}\n\nIn the full product this proceeds to payment, GST invoicing and instant confirmation.`);
        selected.forEach((_, id) => {
            const cell = stallGrid.querySelector(`[data-id="${id}"]`);
            if (cell) {
                cell.classList.remove('selected');
                cell.classList.add('booked');
                cell.disabled = true;
            }
        });
        selected.clear();
        renderSummary();
    });

    renderSummary();
}
