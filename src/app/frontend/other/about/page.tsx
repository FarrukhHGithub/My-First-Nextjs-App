import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to our platform! We are dedicated to providing innovative solutions for all your needs. Our team consists of passionate individuals committed to delivering the best services to our clients. Whether you're looking for technological advancements, expert advice, or customer support, we are here to help!
        </p>
        <div style={styles.contactSection}>
          <h2 style={styles.subHeading}>Contact Information</h2>
          <p style={styles.paragraph}>
            <strong>Mobile Number:</strong> +1 234 567 890
          </p>
          <p style={styles.paragraph}>
            <strong>Location:</strong> 123 Business Ave, Tech City, Country
          </p>
        </div>
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
  subHeading: {
    fontSize: '2rem',
    color: '#333',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  contactSection: {
    marginTop: '30px',
  },
};

export default AboutPage;
