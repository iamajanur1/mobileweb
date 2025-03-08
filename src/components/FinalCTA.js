import React, { useState } from "react";

const FinalCTA = () => {
 
  const [modalOpen, setModalOpen] = useState(false);


  const handleEnrollClick = () => {
    setModalOpen(true);
  };

 
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={styles.container}>
    
      <h2 style={styles.title}>Ready to Start Your Digital Art Journey?</h2>
      <p style={styles.subtitle}>Click below to secure your spot &amp; start creating!</p>

      {/* Enroll Button */}
      <button style={styles.enrollButton} onClick={handleEnrollClick}>
        Enroll Now
      </button>

      
      {modalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalTitle}>Success!</h3>
            <p style={styles.modalText}>You have successfully enrolled.</p>
            <button style={styles.closeButton} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
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
    boxSizing: "border-box",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "16px",
  },
  enrollButton: {
    background: "linear-gradient(to right, #3045ff, #ff00ff)",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },

 
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, 
  },

  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "24px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#333",
  },
  modalText: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "16px",
  },
  closeButton: {
    backgroundColor: "#3045ff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default FinalCTA;
