import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
        Welcome to My Next.js Project
      </h1>

      <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
        Hi, this is my first write-up using Next.js. In this project, I'll be exploring some core features of the Next.js framework, including server-side rendering (SSR), static site generation (SSG), and routing. As I continue learning, I'll be building a dynamic dashboard application with various features such as data visualization, user management, and more.
      </p>

      <h2 style={{ fontSize: '24px', color: '#333' }}>Dashboard Overview</h2>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
        The dashboard is a central hub where users can get insights into various metrics and data points. This section will display key statistics, charts, and user activities. It is designed to provide a quick overview of the current system performance and user engagement. Features such as data filtering, real-time updates, and interactive charts will make it easy for users to interact with the data.
      </p>

      <h3 style={{ fontSize: '20px', color: '#333' }}>Key Features of the Dashboard:</h3>
      <ul style={{ fontSize: '18px', color: '#555', marginLeft: '20px' }}>
        <li>User Activity Tracking</li>
        <li>Real-time Data Updates</li>
        <li>Charts and Graphs for Data Visualization</li>
        <li>Filter Options for Custom Data Views</li>
        <li>Easy-to-navigate Interface</li>
      </ul>

      <p style={{ fontSize: '18px', color: '#555' }}>
        Stay tuned for more updates as I continue to work on this project. I am excited to share the progress and the features I'll be adding as I dive deeper into Next.js and its ecosystem.
      </p>
    </div>
  );
}
