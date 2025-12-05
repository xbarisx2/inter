
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
    post: BlogPost;
    onPostSelect: (slug: string) => void;
    readMoreText: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onPostSelect, readMoreText }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative">
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
                <div className="absolute top-4 right-4 bg-brand-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {post.category}
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-brand-blue-900 mb-2 group-hover:text-brand-blue-700 transition-colors">
                    {post.title}
                </h3>
                <div className="text-sm text-gray-500 mb-4">
                    {post.date} &bull; {post.author}
                </div>
                <p className="text-gray-600 flex-grow text-sm">{post.excerpt}</p>
                <button 
                    onClick={() => onPostSelect(post.slug)}
                    className="mt-6 self-start text-brand-blue-600 font-semibold hover:text-brand-blue-800 transition-colors">
                    {readMoreText} &rarr;
                </button>
            </div>
        </div>
    );
};

interface BlogPageProps {
    onPostSelect: (slug: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onPostSelect }) => {
    const { data, t, language } = useLanguage();
    const BLOG_POSTS = data.BLOG_POSTS;

    const [selectedCategory, setSelectedCategory] = useState<string>(t('allCategories'));
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(BLOG_POSTS);

    // Reset category when language changes to avoid mismatch (e.g. "Tümü" vs "All")
    useEffect(() => {
        setSelectedCategory(t('allCategories'));
    }, [language, t]);

    const categories = [t('allCategories'), ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

    useEffect(() => {
        if (selectedCategory === t('allCategories')) {
            setFilteredPosts(BLOG_POSTS);
        } else {
            setFilteredPosts(BLOG_POSTS.filter(post => post.category === selectedCategory));
        }
    }, [selectedCategory, BLOG_POSTS, t]);

    return (
        <>
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">{t('blogPageTitle')}</h1>
                    <p className="mt-4 text-lg text-brand-blue-200">{t('blogPageSubtitle')}</p>
                </div>
            </div>

            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-brand-blue-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-brand-blue-100 hover:text-brand-blue-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map(post => (
                            <BlogPostCard 
                                key={post.slug} 
                                post={post} 
                                onPostSelect={onPostSelect} 
                                readMoreText={t('readMore')}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
