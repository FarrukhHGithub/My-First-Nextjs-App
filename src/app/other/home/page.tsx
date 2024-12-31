import React from 'react';

const Page: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to My NestJS Project Home Page</h1>
        <p style={styles.paragraph}>
          This is the homepage of my first NestJS application, where I'm exploring the powerful capabilities of NestJS, a progressive Node.js framework. 
          The app showcases a simple, clean layout with various features and functionalities implemented using NestJS, TypeScript, and various other tools. 
          Stay tuned for more as I continue to build and add new features to this project!
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    padding: '20px',
  },
  content: {
    maxWidth: '800px',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default Page;
