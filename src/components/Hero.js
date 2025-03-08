import React from "react";

const Hero = () => {
  return (
    <div style={styles.container}>
     
      <div style={styles.logoContainer}>
      
        <svg width="30" height="30" viewBox="0 0 30 30" style={styles.svg}>
          <defs>
            <linearGradient id="gradientA1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF9800" />
              <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
          </defs>
        
          <polygon
            fill="url(#gradientA1)"
            points="15,0 30,30 23,30 23,15 7,15 7,30 0,30"
          />
        </svg>

       
        <svg width="30" height="30" viewBox="0 0 30 30" style={styles.svg}>
          <defs>
            <linearGradient id="gradientA2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF00FF" />
              <stop offset="100%" stopColor="#FF1493" />
            </linearGradient>
          </defs>
       
          <polygon
            fill="url(#gradientA2)"
            points="15,0 30,30 23,30 23,15 7,15 7,30 0,30"
          />
        </svg>

        {/* "S" */}
        <svg width="30" height="30" viewBox="0 0 30 30" style={styles.svg}>
          <defs>
            <linearGradient id="gradientS" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00FF7F" />
              <stop offset="100%" stopColor="#00FFFF" />
            </linearGradient>
          </defs>
        
          <polygon
            fill="url(#gradientS)"
            points="
              5,0 
              25,0 
              25,10
              10,10
              10,20
              25,20
              25,30
              5,30
              5,20
              20,20
              20,10
              5,10
            "
          />
        </svg>

        {/* Third "A" */}
        <svg width="30" height="30" viewBox="0 0 30 30" style={styles.svg}>
          <defs>
            <linearGradient id="gradientA3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3045ff" />
              <stop offset="100%" stopColor="#ff00ff" />
            </linearGradient>
          </defs>
      
          <polygon
            fill="url(#gradientA3)"
            points="15,0 30,30 23,30 23,15 7,15 7,30 0,30"
          />
        </svg>
      </div>

    
      <button style={styles.button}>
        Get Started
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "480px",
    margin: "0 auto",
    padding: "10px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  svg: {
    display: "block",
  },
  button: {
    background: "linear-gradient(to right, #3045ff, #ff00ff)",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Hero;
