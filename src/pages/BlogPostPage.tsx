import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrefetchLink as Link } from '../components/PrefetchLink';
import { motion, useScroll, useSpring } from 'motion/react';
import { blogPosts as localBlogPosts } from '../data/blogPosts';
import { Calendar, Clock, ChevronLeft, ArrowRight, Share2, Linkedin, Twitter, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';
import { sanityClient, urlFor } from '../lib/sanity';
import { FAQSection } from '../components/FAQSection';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(localBlogPosts.find(p => p.slug === slug));
  const [latestPosts, setLatestPosts] = useState<any[]>(localBlogPosts.filter(p => p.slug !== slug).slice(0, 3));
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (slug) {
      sanityClient
        .fetch(`*[_type == "post" && slug.current == $slug][0]{
          title,
          "slug": slug.current,
          excerpt,
          content,
          coverImage,
          category,
          readTime,
          date,
          "author": {
            "name": author,
            "type": authorType,
            "image": authorImage
          }
        }`, { slug })
        .then((data) => {
          if (data) setPost(data);
        })
        .catch(console.error);

      sanityClient
        .fetch(`*[_type == "post" && slug.current != $slug] | order(date desc)[0...3]{
          title,
          "slug": slug.current,
          coverImage,
          category,
          readTime,
          date
        }`, { slug })
        .then((data) => {
          if (data && data.length > 0) setLatestPosts(data);
        })
        .catch(console.error);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Post not found</h2>
          <Link to="/blog" className="text-[var(--color-brand)] hover:underline flex items-center gap-2 justify-center">
            <ChevronLeft size={20} /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const coverImageUrl = post.coverImage ? (typeof post.coverImage === 'string' ? post.coverImage : urlFor(post.coverImage).width(1200).url()) : 'https://placehold.co/1200x600';

  return (
    <div className="bg-white min-h-screen pt-10 lg:pt-24 pb-20">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        image={coverImageUrl} 
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--color-brand)] origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 mb-10">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--color-brand)] mb-8 transition-colors">
          <ChevronLeft size={16} /> All Insights
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-red-50 text-[var(--color-brand)] px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold shadow-sm">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-500 font-medium">
            <Clock size={16} /> {post.readTime}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15] font-serif tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-[var(--color-brand)] pl-4">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 py-6 border-y border-gray-100 mb-10">
          {post.author?.image && <img src={typeof post.author.image === 'string' ? post.author.image : urlFor(post.author.image).width(150).url()} alt={post.author.name} className="w-14 h-14 rounded-full border-2 border-red-50" />}
          <div className="flex flex-col">
            <span className="text-base font-bold text-gray-900">{post.author?.name || 'Admin'}</span>
            {post.author?.type ? (
              <span className="text-xs text-[var(--color-brand)] font-bold uppercase tracking-wider">{post.author.type}</span>
            ) : post.author?.role ? (
              <span className="text-sm text-gray-500">{post.author.role}</span>
            ) : null}
          </div>
          <div className="ml-auto hidden md:flex items-center gap-1 text-sm text-gray-500">
            <Calendar size={16} className="text-gray-400" />
            <span className="font-medium">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative">
          <img src={coverImageUrl} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"></div>
        </div>
      </div>

      {/* Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[var(--color-brand)] prose-a:no-underline hover:prose-a:underline prose-li:text-gray-700 prose-li:my-2 prose-ul:my-6 prose-ul:list-disc prose-ol:my-6 prose-strong:text-gray-900 prose-strong:font-bold prose-blockquote:border-l-[var(--color-brand)] prose-blockquote:bg-red-50/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <Share2 size={16} className="text-[var(--color-brand)]" /> Share this article
            </span>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="sticky top-32">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Need Expert Guidance?</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Our principal consultants provide strategic advice and hands-on validation services for navigating complex regulatory landscapes.
              </p>
              <Link to="/contact" className="w-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Talk to an Expert <ArrowRight size={18} />
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-200 pb-2">Latest Insights</h3>
              <div className="space-y-6">
                {latestPosts.map((latest: any) => (
                  <div key={latest.slug} className="group cursor-pointer">
                    <Link to={`/blog/${latest.slug}`} className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img loading="lazy" src={latest.coverImage ? (typeof latest.coverImage === 'string' ? latest.coverImage : urlFor(latest.coverImage).width(400).url()) : 'https://placehold.co/200'} alt={latest.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-gray-900 mb-2 leading-snug group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">
                          {latest.title}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">
                          {new Date(latest.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      <div className="relative z-10 bg-white border-t border-gray-100">
        <FAQSection 
          faqs={[
            {
              question: "How can I apply these validation strategies to my organization?",
              answer: "The strategies outlined in our articles are built on scalable methodologies like GAMP 5 and CSA. For a tailored implementation plan, you can schedule a gap analysis with our consulting team."
            },
            {
              question: "Are the regulations mentioned in these articles current?",
              answer: "Yes, our editorial team continuously monitors FDA, EMA, and ISO updates to ensure all published content reflects the most current regulatory guidance and enforcement trends."
            },
            {
              question: "Can I share this article with my internal compliance team?",
              answer: "Absolutely. We encourage sharing our technical resources internally to help upskill your Quality, IT, and Engineering departments on modern validation practices."
            },
            {
              question: "Do you offer full-service consulting on these topics?",
              answer: "Yes, Dromominds provides end-to-end strategic consulting, staff augmentation, and managed validation services for all the compliance challenges discussed in our insights."
            },
            {
              question: "Where can I find templates related to this topic?",
              answer: "Check our Resource Library or contact us directly. We maintain a comprehensive suite of pre-validated SOPs, CSV checklists, and protocol templates."
            }
          ]}
          title="Related Compliance FAQs"
          subtitle="Common questions regarding the implementation of our published methodologies."
        />
      </div>

      {/* Related Posts Full Width section (Alternative styling for end of post) */}
      <div className="bg-gray-50 border-t border-gray-100 mt-0 py-10 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900">More from our experts</h2>
            <Link to="/blog" className="hidden md:flex items-center text-[var(--color-brand)] font-semibold hover:gap-2 transition-all">
              View all articles <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {latestPosts.map((post: any) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img loading="lazy" src={post.coverImage ? (typeof post.coverImage === 'string' ? post.coverImage : urlFor(post.coverImage).width(600).url()) : 'https://placehold.co/600'} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[var(--color-brand)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
