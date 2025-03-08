import React from "react";

const Bubble = () => {
  
  const wordItems = [
    { text: "Gyms & Fitness Trainers", color: "#FF5722", fontSize: "1.2rem" },
    { text: "Doctors & Clinics", color: "#3F51B5", fontSize: "1rem" },
    { text: "Photographers", color: "#9C27B0", fontSize: "1.1rem" },
    { text: "Bakeries", color: "#FF9800", fontSize: "0.9rem" },
    { text: "Freelancers & Solopreneurs", color: "#4CAF50", fontSize: "1rem" },
    { text: "Local Shops & Retail Stores", color: "#2196F3", fontSize: "1.2rem" },
    { text: "Startups & Small Tech Businesses", color: "#E91E63", fontSize: "1rem" },
    { text: "Accountants", color: "#795548", fontSize: "1rem" },
    { text: "Financial Advisors", color: "#9C27B0", fontSize: "1rem" },
    { text: "Musicians", color: "#FF5722", fontSize: "1rem" },
    { text: "Coaching Centers & Tutors", color: "#3F51B5", fontSize: "1.1rem" },
    { text: "Automobile", color: "#00BCD4", fontSize: "1rem" },
    { text: "Bands", color: "#9C27B0", fontSize: "1rem" },
    { text: "Event Planners & Wedding Services", color: "#FF9800", fontSize: "1rem" },
    { text: "Lawyers & Legal Services", color: "#E91E63", fontSize: "1rem" },
    { text: "Real Estate Agents", color: "#4CAF50", fontSize: "1rem" },
    { text: "Home-Based Businesses", color: "#2196F3", fontSize: "1rem" },
    { text: "Artists", color: "#FF5722", fontSize: "1.1rem" },
    { text: "Salons & Beauty Parlors", color: "#9C27B0", fontSize: "1.1rem" },
    { text: "Restaurants & Cafés", color: "#3F51B5", fontSize: "1rem" },
    { text: "NGOs & Social Enterprises", color: "#00BCD4", fontSize: "1rem" },
    { text: "Home Services", color: "#795548", fontSize: "1.1rem" },
  ];

  return (
    <div style={styles.container}>
  
      <h2 style={styles.title}>Is This Right for You?</h2>

     
      <p style={styles.subtitle}>Everybody is fond of Digital Art! You need it too.</p>

     
      <div style={styles.cloudContainer}>
        {wordItems.map((item, index) => (
          <span
            key={index}
            style={{
              ...styles.word,
              color: item.color,
              fontSize: item.fontSize,
            }}
          >
            {item.text}
          </span>
        ))}
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
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#6B2FB7", 
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "16px",
  },
  cloudContainer: {
    display: "flex",
    flexWrap: "wrap",       
    justifyContent: "center",
  },
  word: {
    margin: "6px 8px",    
    fontWeight: 500,
    whiteSpace: "nowrap",  
  },
};

export default Bubble;
