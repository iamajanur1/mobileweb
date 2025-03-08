import React from "react";

const ExtraFeatures = () => {
    
  const items = [
    {
      icon: "✏️",
      text: (
        <>
          <strong>Sketching Basics</strong> – Shape, form, and proportion fundamentals
        </>
      ),
    },
    {
      icon: "🎨",
      text: (
        <>
          <strong>Digital Painting</strong> – Master shading, blending &amp; coloring techniques
        </>
      ),
    },
    {
      icon: "⚙",
      text: (
        <>
          <strong>Tool Mastery</strong> – Hands-on with Procreate, Photoshop &amp; Illustrator
        </>
      ),
    },
    {
      icon: "👥",
      text: (
        <>
          <strong>Character &amp; Concept Art</strong> – Create professional-grade designs
        </>
      ),
    },
    {
      icon: "🖼",
      text: (
        <>
          <strong>Portfolio Building</strong> – Craft stunning pieces to showcase your skills
        </>
      ),
    },
    {
      icon: "💰",
      text: (
        <>
          <strong>Bonus: Monetization Guide</strong> – How to sell your art &amp; get freelance gigs
        </>
      ),
    },
    {
      icon: "🎓",
      text: (
        <>
          <strong>Certificate of Completion</strong> – Boost your creative career
        </>
      ),
    },
    {
      icon: "🚀",
      text: (
        <>
          <strong>Project-Based Learning</strong> – Build a stunning portfolio
        </>
      ),
    },
    {
      icon: "🎤",
      text: (
        <>
          <strong>Live Mentorship</strong> – Weekly Q&amp;A sessions with industry pros
        </>
      ),
    },
  ];
  return (
    <div style={styles.container}>
      {/* Heading */}
      <h2 style={styles.heading}>Not Satisfied Yet?
      We got you! Here are few extra features</h2>

      <div style={styles.container}>
      {items.map((item, idx) => (
        <div key={idx} style={styles.card}>
          <div style={styles.iconCircle}>
            <span style={styles.icon}>{item.icon}</span>
          </div>
          <p style={styles.cardText}>{item.text}</p>
        </div>
      ))}
    </div>


      

      

      
    

      

      {/* Gradient Button */}
      <button style={styles.bookButton}>Book Now at ₹49</button>
    </div>
  );
};

const styles = {
    container: {
        width: "100%",
        maxWidth: "480px",
        margin: "0 auto",
        padding: "20px 16px",
        boxSizing: "border-box",
        textAlign: "center",
      },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#6B2FB7",
    marginBottom: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
  },
  iconCircle: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "12px",
  },
  icon: {
    fontSize: "18px",
  },
  cardText: {
    textAlign: "left",
    fontSize: "0.95rem",
    color: "#333",
    margin: 0,
    lineHeight: "1.4",
  },
  bookButton: {
    marginTop: "20px",
    padding: "20px 34px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #3045ff, #ff00ff)",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
   
  },
};


export default ExtraFeatures;
