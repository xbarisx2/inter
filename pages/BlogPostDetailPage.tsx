
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost, Comment } from '../types';
import { UserIcon, CalendarIcon } from '../components/Icons';

// Helper functions for localStorage
const getCommentsForPost = (postSlug: string): Comment[] => {
    const allCommentsJSON = localStorage.getItem('blog-comments');
    if (!allCommentsJSON) return [];
    try {
        const allComments: Comment[] = JSON.parse(allCommentsJSON);
        return allComments.filter(comment => comment.postSlug === postSlug).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (e) {
        console.error("Failed to parse comments from localStorage", e);
        return [];
    }
};

const addCommentToPost = (comment: Comment): void => {
    const allComments = getCommentsForPost(comment.postSlug);
    // In a real app, you would fetch all comments, not just for this post
    const otherCommentsJSON = localStorage.getItem('blog-comments');
    let allCommentsInStorage: Comment[] = [];
    if (otherCommentsJSON) {
        try {
            allCommentsInStorage = JSON.parse(otherCommentsJSON);
        } catch (e) {
            console.error("Failed to parse comments from localStorage on add", e);
        }
    }
    
    allCommentsInStorage.push(comment);
    localStorage.setItem('blog-comments', JSON.stringify(allCommentsInStorage));
};


interface BlogPostDetailPageProps {
    slug: string;
    onBack: () => void;
}

const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({ slug, onBack }) => {
    const post = BLOG_POSTS.find(p => p.slug === slug);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newCommentAuthor, setNewCommentAuthor] = useState('');
    const [newCommentText, setNewCommentText] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setComments(getCommentsForPost(slug));
    }, [slug]);

    if (!post) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-2xl font-bold">Yazı bulunamadı.</h2>
                <button onClick={onBack} className="mt-4 text-brand-blue-600 hover:underline">
                    &larr; Blog'a Geri Dön
                </button>
            </div>
        );
    }

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCommentAuthor.trim() || !newCommentText.trim()) {
            setError('Lütfen tüm alanları doldurun.');
            return;
        }
        setError('');
        const newComment: Comment = {
            id: new Date().toISOString(),
            postSlug: slug,
            author: newCommentAuthor,
            text: newCommentText,
            date: new Date().toISOString(),
        };

        addCommentToPost(newComment);
        setComments(getCommentsForPost(slug)); // Re-fetch to get the latest list
        setNewCommentAuthor('');
        setNewCommentText('');
    };

    return (
        <div className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <button onClick={onBack} className="mb-8 inline-flex items-center text-brand-blue-600 font-semibold hover:text-brand-blue-800 transition-colors">
                     &larr; Tüm Yazılara Geri Dön
                </button>
                
                <article>
                    <span className="text-sm font-semibold text-brand-blue-600 uppercase">{post.category}</span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-brand-blue-950 my-4">{post.title}</h1>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                        <span className="flex items-center mr-4"><UserIcon className="w-4 h-4 mr-2" /> {post.author}</span>
                        <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-2" /> {post.date}</span>
                    </div>
                    
                    <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
                    
                    <div className="prose prose-lg max-w-none">
                        {post.content.map((block, index) => {
                            if (block.type === 'h2') return <h2 key={index}>{block.text}</h2>;
                            if (block.type === 'h3') return <h3 key={index}>{block.text}</h3>;
                            return <p key={index}>{block.text}</p>;
                        })}
                    </div>
                </article>

                <hr className="my-12 border-t-2 border-gray-100" />

                {/* Comments Section */}
                <section id="comments">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8">Yorumlar ({comments.length})</h2>

                    {/* Add Comment Form */}
                     <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-10">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Bir Yorum Bırakın</h3>
                        <form onSubmit={handleCommentSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="author" className="block text-sm font-medium text-gray-700">Adınız</label>
                                <input
                                    type="text"
                                    id="author"
                                    value={newCommentAuthor}
                                    onChange={(e) => setNewCommentAuthor(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500"
                                    required
                                    aria-label="Adınız"
                                />
                            </div>
                            <div>
                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Yorumunuz</label>
                                <textarea
                                    id="comment"
                                    rows={4}
                                    value={newCommentText}
                                    onChange={(e) => setNewCommentText(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500"
                                    required
                                    aria-label="Yorumunuz"
                                ></textarea>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div>
                                <button type="submit" className="w-full sm:w-auto bg-brand-blue-600 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-brand-blue-700 transition-colors duration-300">
                                    Yorumu Gönder
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">
                        {comments.length > 0 ? comments.map(comment => (
                             <div key={comment.id} className="flex items-start">
                                <div className="flex-shrink-0 bg-brand-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
                                     <UserIcon className="w-6 h-6 text-brand-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <div className="flex items-center">
                                        <p className="font-semibold text-gray-800">{comment.author}</p>
                                        <span className="text-xs text-gray-500 ml-3">{new Date(comment.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <p className="text-gray-600 mt-1">{comment.text}</p>
                                </div>
                            </div>
                        )) : (
                            <p className="text-gray-500">Henüz hiç yorum yapılmamış. İlk yorumu siz yapın!</p>
                        )}
                    </div>
                </section>
            </div>
            {/* FIX: Removed 'jsx' prop from <style> tag to resolve TypeScript type error. */}
            <style>{`
                .prose h2 {
                    font-size: 1.5em;
                    font-weight: 700;
                    color: #1e3a8a;
                    margin-top: 2em;
                    margin-bottom: 1em;
                }
                .prose h3 {
                    font-size: 1.25em;
                    font-weight: 600;
                    color: #1e40af;
                    margin-top: 1.5em;
                    margin-bottom: 0.75em;
                }
                .prose p {
                    line-height: 1.75;
                    margin-bottom: 1.25em;
                }
            `}</style>
        </div>
    );
};

export default BlogPostDetailPage;
