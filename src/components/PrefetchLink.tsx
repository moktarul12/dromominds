import React, { useRef, useEffect } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const routePrefetchCache = new Set<string>();

export const prefetchRoute = (path: string) => {
  if (routePrefetchCache.has(path)) return;
  routePrefetchCache.add(path);

  if (
    path === '/computerized-system-validation' ||
    path === '/computer-software-assurance' ||
    path === '/equipment-qualification' ||
    path === '/data-integrity' ||
    path === '/audit-remediation' ||
    path === '/qms-implementation' ||
    path.startsWith('/expertise/')
  ) {
    import('../pages/ServicePage');
  } else if (path === '/contact') {
    import('../pages/ContactPage');
  } else if (path === '/about') {
    import('../pages/AboutPage');
  } else if (path === '/blog') {
    import('../pages/BlogListPage');
  } else if (path.startsWith('/blog/')) {
    import('../pages/BlogPostPage');
  } else if (path === '/resources/news') {
    import('../pages/NewsPage');
  } else if (path === '/resources/videos') {
    import('../pages/VideosPage');
  } else if (
    path.startsWith('/resources/') ||
    path === '/resources' ||
    path.startsWith('/partners') ||
    path === '/privacy' ||
    path === '/terms'
  ) {
    import('../pages/GenericPage');
  }
};

export const PrefetchLink: React.FC<LinkProps> = (props) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const prefetched = useRef(false);

  const handlePrefetch = () => {
    if (!prefetched.current && props.to && typeof props.to === 'string') {
      prefetchRoute(props.to);
      prefetched.current = true;
    }
  };

  useEffect(() => {
    if (prefetched.current || !props.to || typeof props.to !== 'string') return;

    const element = linkRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handlePrefetch();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [props.to]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handlePrefetch();
    if (props.onMouseEnter) props.onMouseEnter(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    handlePrefetch();
    if (props.onFocus) props.onFocus(e);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    handlePrefetch();
    if (props.onTouchStart) props.onTouchStart(e);
  };

  return (
    <Link
      ref={linkRef}
      {...props}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      onTouchStart={handleTouchStart}
    />
  );
};
