import React from "react";

const Testimonials = () => {
  return (
    <div style={styles.container}>
      
      <div style={styles.videoContainer}>
        <div style={styles.playIconWrapper}>
          <div style={styles.playIcon}></div>
        </div>
      </div>

     
      <div style={styles.testimonialWrapper}>
        {/* Testimonial Card #1 */}
        <div style={styles.testimonialCard}>
          <h3 style={styles.name}>Aditi Verma</h3>
          <p style={styles.age}>22</p>
          <p style={styles.testimonialText}>
            I always wanted to learn digital art, but tutorials were confusing.
            This course made everything so simple! Now, I’m taking commissions online!
          </p>
        </div>

        {/* Testimonial Card #2 */}
        <div style={styles.testimonialCard}>
          <h3 style={styles.name}>Rajesh Khanna</h3>
          <p style={styles.age}>30</p>
          <p style={styles.testimonialText}>
            Switching from traditional art to digital felt overwhelming, but
            this course changed everything! The structured lessons helped me
            master Procreate in weeks!
          </p>
        </div>
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
    boxSizing: "border-box",
  },

  /* --- VIDEO BOX --- */
  videoContainer: {
    width: "100%",
    minHeight: "300px",
    borderRadius: "12px",
    border: "2px solid #ccc",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24px",
    backgroundColor: "#fff",
  },
  playIconWrapper: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    width: 0,
    height: 0,
    borderLeft: "12px solid #fff",
    borderTop: "8px solid transparent",
    borderBottom: "8px solid transparent",
    marginLeft: "3px",
  },

 
  testimonialWrapper: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  testimonialCard: {
    flex: "1 1 calc(50% - 16px)",
    boxSizing: "border-box",
     
    borderRadius: "20px",
     
    border: "2px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to right, #3045ff, #ff00ff)",
    padding: "16px",
    backgroundColor: "#fff",
    minWidth: "200px",
  },
  name: {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0 0 4px 0",
  },
  age: {
    fontSize: "0.9rem",
    color: "#666",
    margin: "0 0 12px 0",
  },
  testimonialText: {
    fontSize: "0.9rem",
    color: "#333",
    lineHeight: "1.4",
    margin: 0,
  },
};

export default Testimonials;
