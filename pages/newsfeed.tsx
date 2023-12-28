import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

// Define a TypeScript interface for a post
interface Post {
    id: number; // Unique identifier for a post
    userName: string;
    timeAgo: string;
    content: string;
    imageUrl?: string; // Optional image URL
}

export default function NewsFeed() {
    const [posts, setPosts] = useState<Post[]>([]); // Use the Post interface for state

    useEffect(() => {
        // Fetch posts from your data source/API and set them in state
        // Example API call (replace with your actual data fetching logic)
        // fetch('your_api_endpoint')
        //     .then(response => response.json())
        //     .then(data => setPosts(data))
        //     .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Newsfeed</h2>
            {posts.length ? (
                posts.map((post) => (
                    <div key={post.id} className="mb-6 p-4 bg-white shadow rounded-lg">
                        <div className="flex items-center mb-3">
                            {/* Replace with user avatar */}
                            <div className="mr-3 rounded-full bg-gray-200 w-10 h-10"></div>
                            <div>
                                <p className="font-semibold">{post.userName}</p>
                                <p className="text-sm text-gray-500">{post.timeAgo}</p>
                            </div>
                        </div>
                        <p>{post.content}</p>
                        {/* Post image if available */}
                        {post.imageUrl && (
                            <Image src={post.imageUrl} alt="Post" className="my-3 rounded" width={500} height={300} />
                        )}
                        <div className="flex">
                            <button className="flex items-center mr-4 text-gray-600 hover:text-red-500">
                                <FaHeart className="mr-1" /> Like
                            </button>
                            <button className="flex items-center mr-4 text-gray-600 hover:text-blue-500">
                                <FaComment className="mr-1" /> Comment
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-green-500">
                                <FaShare className="mr-1" /> Share
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts to show</p>
            )}
        </div>
    );
}
