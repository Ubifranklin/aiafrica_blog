'use client';

import { useState } from 'react';
import Image from 'next/image';

const Gallery = ({ categories = [], articles = [] }) => {
  const [activeCategory, setActiveCategory] = useState('All categories');

  const defaultCategories = [
    'All categories',
    'Technology',
    'Business',
    'Innovation',
    'Startups',
  ];

  const defaultArticles = [
    {
      id: 1,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      title: 'AI Revolution in African Tech Startups',
      category: 'Technology',
      date: '2024-01-15',
    },
    {
      id: 2,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      title: 'Fintech Growth Across the Continent',
      category: 'Business',
      date: '2024-01-14',
    },
    {
      id: 3,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      title: 'Innovation Hubs Transforming Cities',
      category: 'Innovation',
      date: '2024-01-13',
    },
    {
      id: 4,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      title: 'New Funding for Tech Startups',
      category: 'Startups',
      date: '2024-01-12',
    },
    {
      id: 5,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      title: 'Digital Transformation in Healthcare',
      category: 'Technology',
      date: '2024-01-11',
    },
    {
      id: 6,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      title: 'E-commerce Boom in Africa',
      category: 'Business',
      date: '2024-01-10',
    },
    {
      id: 7,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      title: 'Clean Energy Innovation',
      category: 'Innovation',
      date: '2024-01-09',
    },
    {
      id: 8,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      title: 'EdTech Platforms Scaling Up',
      category: 'Startups',
      date: '2024-01-08',
    },
    {
      id: 9,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      title: '5G Network Expansion Plans',
      category: 'Technology',
      date: '2024-01-07',
    },
    {
      id: 10,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      title: 'Investment Trends in African Markets',
      category: 'Business',
      date: '2024-01-06',
    },
    {
      id: 11,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      title: 'Smart City Projects Launch',
      category: 'Innovation',
      date: '2024-01-05',
    },
    {
      id: 12,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
      title: 'Emerging Tech Entrepreneurs',
      category: 'Startups',
      date: '2024-01-04',
    },
  ];

  const galleryCategories = categories.length > 0 ? categories : defaultCategories;
  const galleryArticles = articles.length > 0 ? articles : defaultArticles;

  const filteredArticles =
    activeCategory === 'All categories'
      ? galleryArticles
      : galleryArticles.filter((article) => article.category === activeCategory);

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {galleryCategories.map((category, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? 'text-blue-700 hover:text-white border-blue-600 bg-white hover:bg-blue-700 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                : 'text-gray-900 border-white hover:border-gray-200 dark:border-gray-900 dark:hover:border-gray-700 bg-white focus:ring-gray-300 dark:text-white dark:focus:ring-gray-800'
            } border focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:bg-gray-900`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;