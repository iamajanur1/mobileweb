import React from "react";

const BelowHero = () => {
  return (
    <div style={styles.container}>
      
      <h2 style={styles.title}>Master the Art of Digital Illustration</h2>

     
      <p style={styles.subtitle}>A 4-Week Course Designed for Beginners &amp; Enthusiasts!</p>

   
      <div style={styles.imageContainer}>
        <div style={styles.divider}></div>
      </div>

   
      <p style={styles.description}>
        Learn to create stunning digital artwork with step-by-step guidance from industry experts!
      </p>
      <p style={styles.description}>
        No prior experience required. Just your creativity!
      </p>
      <p style={styles.description}>Enroll now for ₹7,999</p>

     
      <div style={styles.secureSection}>
        <button style={styles.secureButton}>Secure Your Spot for Just ₹79</button>
        <p style={styles.couponText}>
          Use a coupon code within 15 minutes to unlock a special <br></br> bonus pack!
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 16px",
    textAlign: "center",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#6B2FB7", 
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "16px",
  },
  imageContainer: {
    width: "100%",
    maxWidth: "400px",
    height: "250px",
    margin: "0 auto 20px auto",
    position: "relative",
    
    backgroundImage: `url("/images/new.PNG")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflow: "hidden",
  },
  divider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: "2px",
    backgroundColor: "#ddd",
  },
  description: {
    fontSize: "0.95rem",
    color: "#555",
    margin: "6px 0",
    lineHeight: "1.4",
    fontWeight: 600, 
  },
  secureSection: {
    marginTop: "24px",
  },
  secureButton: {
    background: "linear-gradient(to right, #3045ff, #ff00ff)",
    border: "none",
    borderRadius: "24px",
    padding: "12px 24px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    outline: "none",
  },
  couponText: {
    marginTop: "8px",
    fontSize: "0.95rem",
    color: "#333",
  },
};

export default BelowHero;
