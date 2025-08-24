"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllPosts } from "@/app/actions";
import { socialMediaLink } from "@/app/contants";

// Force dynamic rendering to ensure client-side data fetching
export const dynamic = 'force-dynamic';

interface BlogPost {
  title: string;
  publishedAt: string;
  views: number;
  url: string;
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2,3,4].map((index) => (
        <div key={index} className="pb-5 space-y-2">
          {/* <div className="h-6 bg-gray-300 rounded animate-pulse w-3/4"></div> */}
          <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black p-5 md:p-20">
      <div className='max-w-3xl mx-auto'>
        <div className="mx-auto">
          <h1 className="mb-4 text-2xl font-semibold text-black">Blog</h1>
          <h2 className="mb-4 text-xl text-black leading-relaxed">
            Thoughts on development, technology, and problem-solving.
          </h2>
        </div>

        <div className="ml-8 mb-8 space-y-2">
          {loading ? (
            <LoadingSkeleton />
          ) : error ? (
            <div className="text-red-600 py-4">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.url} className="pb-5">
                <a
                  href={post.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {post.title}
                </a>{" "}
                ({new Date(post.publishedAt).getFullYear()}) - {post.views} views
              </li>
            ))
          ) : (
            <li className="pb-5 text-gray-600">
              No blog posts found. Check back later for new content!
            </li>
          )}
        </div>

        <div className="flex flex-wrap gap-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <Link
            target="_blank"
            href={socialMediaLink.linkedIn}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href={socialMediaLink.github}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            href={socialMediaLink.emailMe}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Email me
          </Link>
        </div>
      </div>
    </main>
  );
}
