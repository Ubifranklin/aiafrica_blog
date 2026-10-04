import React from 'react'
import Navbar from    './Components/Navbar';
import Carousel from './Components/Carousel';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      cache: "no-store", // always get fresh posts
    });
    if (!res.ok) throw new Error("Failed to load posts");
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // if the API is down, Gallery falls back to its default articles
  }
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <Carousel />
      <Gallery articles={posts} />
      <Footer />
    </>
  );
}