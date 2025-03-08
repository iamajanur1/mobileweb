import React from "react";

const WithoutTraining = () => {
  return (
    <div style={styles.container}>

      <h2 style={styles.heading}>
        Without Proper Training, <span style={styles.subheading}>You Might:</span>
      </h2>


      <div style={styles.cardsWrapper}>
   
        <div style={styles.card}>
          <p style={styles.cardText}>Struggle with complex software tools</p>
        </div>

 
        <div style={styles.card}>
          <p style={styles.cardText}>Feel stuck without structured learning</p>
        </div>

     
        <div style={styles.card}>
          <div style={styles.iconX}>✖</div>
          <p style={styles.cardText}>Miss out on monetizing your skills</p>
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
        textAlign: "center",
        padding: "20px 16px",
        background: "linear-gradient(to bottom, #ffffff, #e0f7ff)",
        boxSizing: "border-box",        
      },
      
  heading: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  },
  subheading: {
    color: "#666",
  },
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",               
    gap: "8px",                     
    justifyContent: "center",     
  },
  
  card: {
    flex: "1 1 calc(33.333% - 16px)",
    minWidth: "120px",               
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    padding: "16px 8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",        
  },
  iconX: {
    fontSize: "1.4rem",
    color: "red",
    marginBottom: "8px",
  },
  cardText: {
    fontSize: "0.9rem",
    color: "#333",
    margin: 0,
    lineHeight: "1.4",
  },
};

export default WithoutTraining;
