import React from "react";

const Course = () => {
  return (
    <div style={styles.container}>
      {/* Heading */}
      <h2 style={styles.heading}>With This Course, You Get:</h2>

   
      <div style={styles.item}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>🎨</span>
        </div>
        <p style={styles.itemText}>
          <strong>Hands-on Lessons</strong> – Learn digital painting, shading &amp; composition.
        </p>
      </div>

      
      <div style={styles.item}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>⚙</span>
        </div>
        <p style={styles.itemText}>
          <strong>Tool Mastery</strong> – Master Procreate, Photoshop, &amp; Illustrator.
        </p>
      </div>

      <div style={styles.item}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>📦</span>
        </div>
        <p style={styles.itemText}>
          <strong>Exclusive Resource Pack</strong> – Brushes, templates &amp; textures.
        </p>
      </div>

     
      <div style={styles.item}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>🎤</span>
        </div>
        <p style={styles.itemText}>
          <strong>Live Mentorship</strong> – Weekly Q&amp;A sessions with industry pros.
        </p>
      </div>

     
      <div style={styles.item}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>🚀</span>
        </div>
        <p style={styles.itemText}>
          <strong>Project-Based Learning</strong> – Build a stunning portfolio.
        </p>
      </div>

     
      <div style={styles.item}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>🎓</span>
        </div>
        <p style={styles.itemText}>
          <strong>Certificate of Completion</strong> – Boost your creative career.
        </p>
      </div>

   
      <div style={styles.item}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>🤝</span>
        </div>
        <p style={styles.itemText}>
          <strong>Community Access</strong> – Network with fellow artists.
        </p>
      </div>

     
      <button style={styles.bookButton}>Book Now at ₹49</button>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    maxWidth: "480px",
   
    padding: "20px 16px",
    textAlign: "center",
    
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#6B2FB7",
    marginBottom: "20px",
  },
  item: {
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
  itemText: {
    textAlign: "left",
    fontSize: "0.95rem",
    color: "#333",
    margin: 0,
    lineHeight: "1.4",
  },
  bookButton: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #3045ff, #ff00ff)",
    border: "none",
    borderRadius: "24px",
    cursor: "pointer",
  },
};

export default Course;
