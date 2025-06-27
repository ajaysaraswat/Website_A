import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./Blogs";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import Footer from "./Footer";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog post by id
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="text-[#ea4820] hover:text-[#ea4820]/80 transition-colors"
          >
            Return to Blog List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] w-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="absolute top-8 left-8 flex items-center gap-2 text-white bg-[#ea4820] hover:bg-[#ea4820]/90 px-4 py-2 rounded-lg transition-all"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Category and Meta Info */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-[#ea4820]/10 text-[#ea4820] px-4 py-1 rounded-full text-sm">
            {blog.category}
          </span>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={16} />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          {blog.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-8">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-medium">{blog.author}</h3>
            <p className="text-gray-400 text-sm">{blog.date}</p>
          </div>
          <button className="ml-auto text-[#ea4820] hover:text-[#ea4820]/80 transition-colors">
            <Share2 size={20} />
          </button>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {blog.description}
          </p>

          {/* Add your blog content sections here */}
          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            Understanding the Impact
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {blog.content ||
              `In today's rapidly evolving technological landscape, understanding the impact of emerging technologies is crucial. This blog post delves deep into the implications and potential applications of these innovations.
            
            The integration of cutting-edge solutions has revolutionized how businesses operate and how we approach problem-solving in various industries. From artificial intelligence to blockchain technology, each advancement brings new opportunities and challenges.`}
          </p>

          {/* Key Points Section */}
          <div className="bg-[#2A2342] rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Takeaways
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-[#ea4820]">•</span>
                Innovation drives industry transformation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#ea4820]">•</span>
                Technology integration is key to success
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#ea4820]">•</span>
                Future-proofing through digital adoption
              </li>
            </ul>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-medium">Share this article</h4>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-[#ea4820] transition-colors">
                Twitter
              </button>
              <button className="text-gray-400 hover:text-[#ea4820] transition-colors">
                LinkedIn
              </button>
              <button className="text-gray-400 hover:text-[#ea4820] transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPost;
