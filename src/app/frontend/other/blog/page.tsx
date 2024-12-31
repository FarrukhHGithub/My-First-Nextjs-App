import React from 'react';

const page = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
        My First Experience with Next.js: A Journey into Server-Side Rendering
      </h1>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
        As a developer, the journey of learning and mastering new technologies is always an exciting and challenging experience. 
        Recently, I had the opportunity to dive into Next.js, and I must say, it has been a remarkable experience so far. 
        From its impressive features like server-side rendering (SSR) to its seamless developer experience, Next.js has proven itself 
        to be a powerful framework for building modern web applications.
      </p>

      <h2 style={{ fontSize: '24px', color: '#333' }}>Why Next.js?</h2>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
        Before I started using Next.js, I had primarily worked with React.js to build single-page applications. 
        While React provides a great way to build interactive UIs, I was always on the lookout for a framework that would enhance my React applications 
        with server-side rendering and static site generation (SSG), improving performance and SEO.
      </p>

      <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
        That's when I came across Next.js. Developed by Vercel, Next.js offers built-in features for server-side rendering and static site generation, 
        which are essential for building fast, SEO-friendly applications. It provides a comprehensive solution with minimal setup, allowing developers to focus 
        on building the application without worrying about configurations.
      </p>
    </div>
  );
}

export default page;
