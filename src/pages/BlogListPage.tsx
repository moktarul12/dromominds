import React, { useState, useEffect } from 'react';
import { PrefetchLink as Link } from '../components/PrefetchLink';
import { motion } from 'motion/react';
import { blogPosts as localBlogPosts } from '../data/blogPosts';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { SEO } from '../components/SEO';
import { sanityClient, urlFor } from '../lib/sanity';
import { FAQSection } from '../components/FAQSection';

export function BlogListPage() {
  const [posts, setPosts] = useState(localBlogPosts);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(date desc){
        title,
        "slug": slug.current,
        excerpt,
        coverImage,
        category,
        readTime,
        date,
        authorType,
        "author": {
          "name": author,
          "image": authorImage
        }
      }`)
      .then((data) => {
        if (data && data.length > 0) {
          setPosts(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO title="Blog & Insights" description="Latest news and insights on GxP, FDA compliance, and continuous validation from Dromominds experts." />
      {/* Blog Hero Section */}
      <section className="bg-gray-900 text-white pt-10 lg:pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80" 
            alt="Technology background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">Focus &amp; Insights</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Expert perspectives on computer system validation, regulatory compliance, and digital transformation in the life sciences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row group"
          >
            <div className="lg:w-1/2 overflow-hidden">
              <img 
                src={posts[0].coverImage ? (typeof posts[0].coverImage === 'string' ? posts[0].coverImage : urlFor(posts[0].coverImage).width(1200).url()) : 'https://placehold.co/800x600'} 
                alt={posts[0].title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm font-medium text-[var(--color-brand)] mb-4">
                <span className="bg-red-50 text-[var(--color-brand)] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                  {posts[0].category}
                </span>
                <span className="flex items-center gap-1 text-gray-500">
                  <Clock size={16} /> {posts[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[var(--color-brand)] transition-colors">
                <Link to={`/blog/${posts[0].slug}`}>
                  {posts[0].title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  {posts[0].author?.image && <img src={typeof posts[0].author.image === 'string' ? posts[0].author.image : urlFor(posts[0].author.image).width(100).url()} alt={posts[0].author.name} className="w-10 h-10 rounded-full" />}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{posts[0].author?.name || 'Admin'}</h4>
                    {posts[0].authorType && <span className="text-[10px] text-[var(--color-brand)] font-bold uppercase tracking-wider block -mt-0.5">{posts[0].authorType}</span>}
                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Calendar size={12} /> {new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
                <Link 
                  to={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center text-[var(--color-brand)] font-semibold hover:gap-2 transition-all"
                >
                  Read Article <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Grid Posts */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative">
                <img 
                  loading="lazy"
                  src={post.coverImage ? (typeof post.coverImage === 'string' ? post.coverImage : urlFor(post.coverImage).width(800).url()) : 'https://placehold.co/800x600'} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[var(--color-brand)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-medium border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1 ml-auto"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {post.author?.image ? (
                      <img loading="lazy" src={typeof post.author.image === 'string' ? post.author.image : urlFor(post.author.image).width(100).url()} alt={post.author.name} className="w-8 h-8 rounded-full" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <User size={16} />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900 leading-tight">{post.author?.name || 'Admin'}</span>
                      {post.authorType && <span className="text-[10px] text-[var(--color-brand)] font-bold uppercase tracking-wider">{post.authorType}</span>}
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="w-8 h-8 rounded-full bg-red-50 text-[var(--color-brand)] flex items-center justify-center group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors"
                    aria-label="Read more"
                  >
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      
      <div className="relative z-10 bg-white">
        <FAQSection 
          faqs={[
            {
              question: "What topics are covered in the Dromominds Insights Blog?",
              answer: "Our blog covers a wide range of topics critical to life sciences, including GxP compliance strategies, Computer Software Assurance (CSA) methodologies, FDA regulatory updates, and technical deep-dives into enterprise system validation."
            },
            {
              question: "Who writes the content for your blog?",
              answer: "All articles are authored by our senior architects, former FDA auditors, and lead validation engineers. You receive unfiltered, highly technical insights straight from industry veterans."
            },
            {
              question: "How often is new content published?",
              answer: "We publish detailed regulatory analysis and technical deployment strategies bi-weekly, ensuring you stay ahead of the rapidly evolving compliance landscape."
            },
            {
              question: "Can I suggest a topic for your experts to cover?",
              answer: "Yes, we welcome suggestions from our readers. You can reach out via our contact page to propose topics regarding validation challenges or regulatory questions you’d like us to explore."
            },
            {
              question: "Do you offer downloadable resources alongside your articles?",
              answer: "Many of our deep-dive articles include complementary whitepapers, CSV checklists, and SOP templates that you can download to assist in your compliance efforts."
            }
          ]}
          title="Insights & Research FAQs"
          subtitle="Answers regarding our published regulatory analysis and technical content."
        />
      </div>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mt-32 mb-12">
        <div className="bg-gray-900 rounded-3xl p-6 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)] rounded-full filter blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Subscribe to our Insights</h3>
            <p className="text-gray-400 mb-8">Get the latest regulatory updates, validation strategies, and industry news delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-grow bg-white/10 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-all"
                required
              />
              <button 
                type="button" 
                className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
