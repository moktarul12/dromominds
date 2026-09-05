import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Download, User } from 'lucide-react';
import { PrefetchLink as Link } from './PrefetchLink';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { sanityClient, urlFor } from '../lib/sanity';

export const Whitepapers = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
          _type,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          author,
          authorType
        }`;
        const whitepapersQuery = `*[_type == "whitepaper"] | order(_createdAt desc)[0...1] {
          _type,
          title,
          description,
          image,
          type,
          downloadLink,
          _createdAt,
          author,
          authorType
        }`;
        
        const [sanityPosts, sanityWhitepapers] = await Promise.all([
          sanityClient.fetch(postsQuery),
          sanityClient.fetch(whitepapersQuery)
        ]);
        
        let combined: any[] = [];

        if (sanityWhitepapers && sanityWhitepapers.length > 0) {
           const wp = sanityWhitepapers[0];
           combined.push({
             _type: 'whitepaper',
             title: wp.title || 'Untitled Whitepaper',
             url: wp.downloadLink || '#',
             excerpt: wp.description || '',
             coverImage: wp.image ? urlFor(wp.image).width(800).url() : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
             date: wp._createdAt,
             category: wp.type || 'Whitepaper',
             author: wp.author,
             authorType: wp.authorType
           });
        }

        if (sanityPosts && sanityPosts.length > 0) {
           const formattedPosts = sanityPosts.slice(0, 3 - combined.length).map((p: any) => ({
             _type: 'post',
             title: p.title || 'Untitled',
             slug: p.slug?.current || '',
             excerpt: p.excerpt || '',
             coverImage: p.mainImage ? urlFor(p.mainImage).width(800).url() : 'https://images.unsplash.com/photo-1542382257-80dedb725088?w=1600&q=80',
             date: p.publishedAt || new Date().toISOString(),
             author: p.author || 'Author',
             authorType: p.authorType,
             category: 'Insight', // You could add logic to pull this from Sanity if you extend the schema
             content: '',
             readTime: '5 min read'
           }));
           combined = [...combined, ...formattedPosts];
        } else if (combined.length === 0) {
           combined = blogPosts.slice(0, 3).map(p => ({...p, _type: 'post'}));
        } else {
           combined = [...combined, ...blogPosts.slice(0, 3 - combined.length).map(p => ({...p, _type: 'post'}))];
        }
        
        setPosts(combined);
      } catch (error) {
        console.error("Error fetching from Sanity:", error);
        setPosts(blogPosts.slice(0, 3).map(p => ({...p, _type: 'post'})));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="resources" className="bg-white relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.1)] py-10 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.02),transparent_50%)] pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 tracking-tight mb-4">Featured Insights & <span className="italic text-[var(--color-brand)]">Whitepapers</span></h2>
            <p className="text-gray-600 font-light max-w-2xl">Stay ahead of the curve with our latest regulatory updates and compliance frameworks for Life Sciences.</p>
          </div>
          <Link to="/resources" className="hidden md:flex items-center gap-2 text-[var(--color-brand)] font-bold hover:underline transition-colors">View all resources <ArrowRight className="w-4 h-4" /></Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-4">
            {[1, 2, 3].map((_, idx) => (
               <div key={idx} className="bg-gray-100 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-4">
            {posts.map((post, idx) => {
              if (post._type === 'whitepaper') {
                return (
                  <a href={post.url} target="_blank" rel="noopener noreferrer" key={idx} className="group cursor-pointer bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 relative border border-[var(--color-brand)]">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                      <FileText className="w-32 h-32 text-[var(--color-brand)]" />
                    </div>
                    <div className="h-48 relative flex items-center justify-center overflow-hidden">
                       <img loading="lazy" src={post.coverImage} alt={post.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 opacity-80" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                       <div className="absolute top-4 left-4 bg-[var(--color-brand)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2">
                         <FileText className="w-3 h-3" /> {post.category || 'WHITEPAPER'}
                       </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-brand)] transition-colors">{post.title}</h3>
                      <p className="text-gray-400 text-sm font-light flex-grow line-clamp-3 mb-4">{post.excerpt}</p>
                      
                      {post.author && (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                            <User className="w-3 h-3" />
                          </div>
                          <div className="flex flex-col">
                             <span className="text-xs font-bold text-white">{post.author}</span>
                             {post.authorType && <span className="text-[10px] text-[var(--color-brand)] uppercase tracking-wider">{post.authorType}</span>}
                          </div>
                        </div>
                      )}
                      
                      <div className="border-t border-slate-800 pt-4 flex justify-between items-center">
                        <span className="text-[var(--color-brand)] font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">Get PDF</span>
                        <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center group-hover:bg-[var(--color-brand)] transition-colors text-[var(--color-brand)] group-hover:text-white">
                          <Download className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              }
              
              return (
                <Link to={`/blog/${post.slug}`} key={idx} className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full block">
                  <div className="h-48 relative flex items-center justify-center overflow-hidden">
                     <img loading="lazy" src={post.coverImage} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[var(--color-brand)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-[var(--color-brand)] font-bold uppercase tracking-widest mb-2">
                      {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm font-light flex-grow line-clamp-3 mb-4">{post.excerpt}</p>
                    
                    {post.author && (
                       <div className="flex items-center gap-2 mb-2">
                         <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                           <User className="w-3 h-3" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-900">{typeof post.author === 'string' ? post.author : post.author.name}</span>
                            {post.authorType && <span className="text-[10px] text-[var(--color-brand)] uppercase tracking-wider">{post.authorType}</span>}
                         </div>
                       </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-[var(--color-brand)] font-semibold text-sm">
                      Read Article <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-[var(--color-brand)] transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

