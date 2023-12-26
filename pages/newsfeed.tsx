'use client'

import React, { useState, useEffect } from 'react';
// Import necessary components and icons
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

export default function NewsFeed() {
    // Sample state to hold posts (replace with real data fetching mechanism)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from your data source/API and set them in state
        // setPosts(fetchPosts());
    }, []);


    // Example post data
    const examplePost = {
        userName: 'Alex Smith',
        timeAgo: '2h ago',
        content: 'Had an amazing time exploring the mountains! #HikingAdventure',
        imageUrl: 'path_to_image.jpg' // Replace with the actual image path
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Newsfeed</h2>
            {posts.length ? (
                posts.map((post, index) => (
                    <div key={index} className="mb-6 p-4 bg-white shadow rounded-lg">
                        <div className="flex items-center mb-3">
                            {/* Replace with user avatar */}
                            <div className="mr-3 rounded-full bg-gray-200 w-10 h-10"></div>
                            {/* Replace with user name and post date */}
                            <div>
                                <p className="font-semibold">User Name</p>
                                <p className="text-sm text-gray-500">Posted on Date</p>
                            </div>
                        </div>
                        <p>{post.content}</p>
                        {/* Post image if available */}
                        {post.image && <img src={post.image} alt="Post" className="my-3 rounded" />}
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
