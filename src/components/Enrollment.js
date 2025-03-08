import React from "react";

const EnrollSection = () => {
  return (
    <div style={styles.container}>

      <h2 style={styles.heading}>Enroll Now for ₹7,999</h2>

   
      <div style={styles.bubble}>Secure Your Spot for Just ₹79</div>
      <div style={styles.bubble}>
        Bonus Offer: Apply a coupon code within 15 minutes to unlock:
      </div>
      <div style={styles.bubble}>Exclusive Brush &amp; Texture Pack</div>
      <div style={styles.bubble}>Extra Live Q&amp;A Session with Mentors</div>

 
      <p style={styles.middleText}>
        WE Offer everything you need at ₹7,999—but wait... <span>👀</span>
      </p>


      <div style={styles.discountBar}>
        <p style={styles.discountText}>
          Use a Special Code &amp; Unlock a Game-Changing Discount to avail same
          course in a discounted price!
        </p>
      </div>

    
      <button style={styles.bookButton}>Book Now for ₹79</button>
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
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  bubble: {
    display: "block",
    width: "fit-content",
    margin: "0 auto 12px auto",
    padding: "10px 20px",
    border: "1px solid #ddd",
    borderRadius: "9999px",
    backgroundColor: "#fff",
    color: "#333",
    fontSize: "0.95rem",
    lineHeight: "1.4",
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
  },
  middleText: {
    margin: "20px 0 16px 0",
    fontSize: "0.95rem",
    color: "#333",
    lineHeight: "1.4",
  },
  discountBar: {
    margin: "0 auto 20px auto",
    padding: "12px 16px",
    borderRadius: "6px",

    background: "linear-gradient(to right, #FFEFEF, #F2F8FF)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
    maxWidth: "480px",
  },
  discountText: {
    fontSize: "0.95rem",
    color: "#333",
    margin: 0,
    lineHeight: "1.4",
  },
  bookButton: {
    background: "linear-gradient(to right, #3045ff, #ff00ff)",
    border: "none",
    borderRadius: "24px",
    padding: "12px 24px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default EnrollSection;
