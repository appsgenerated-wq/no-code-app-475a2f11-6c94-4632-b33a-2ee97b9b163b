import React, { useState } from 'react';
import config from '../constants.js';
import { BookOpenIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/outline';

const LandingPage = ({ onLogin }) => {
  const [email, setEmail] = useState('user@flavorfinds.com');
  const [password, setPassword] = useState('password');

  const handleDemoLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">FlavorFinds</h1>
          <a 
            href={`${config.BACKEND_URL}/admin`} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Admin Panel
          </a>
        </nav>
      </header>

      <main>
        <section className="text-center py-20 sm:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Discover and Share Amazing Recipes
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Your new go-to platform for finding community-driven recipes, powered by a seamless and modern backend.
            </p>
            <div className="mt-8">
              <button 
                onClick={handleDemoLogin}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Try Demo
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900">Why FlavorFinds?</h3>
                <p className="mt-2 text-lg text-gray-500">Everything you need in a modern food app.</p>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
                <div className="text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                        <BookOpenIcon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-xl font-semibold">Vast Recipe Library</h4>
                    <p className="mt-2 text-gray-600">Access a growing collection of recipes from chefs and home cooks around the world.</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                        <UsersIcon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-xl font-semibold">Community Powered</h4>
                    <p className="mt-2 text-gray-600">Share your own creations, review recipes, and connect with other food lovers.</p>
                </div>
                 <div className="text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                        <SparklesIcon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-xl font-semibold">Powered by Manifest</h4>
                    <p className="mt-2 text-gray-600">Built on a powerful, secure, and auto-generating backend for a fast and reliable experience.</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
