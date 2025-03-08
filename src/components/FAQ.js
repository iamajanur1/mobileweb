import React, { useState } from "react";

const FAQ = () => {
  
  const faqData = [
    {
      question: "Q: Who is this course for?",
      answer:
        "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!",
    },
    {
      question: "Q: What tools do I need to take this course?",
      answer:
        "You'll need: A tablet (iPad, Wacom, or any drawing tablet), Digital art software (Procreate, Photoshop, or Krita), and a passion for creativity.",
    },
    {
      question: "Q: How long is the course?",
      answer:
        "The course runs for 4 weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques.",
    },
    {
      question: "Q: Is this a live or recorded course?",
      answer:
        "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support.",
    },
    {
      question: "Q: Will I receive a certificate?",
      answer:
        "Yes! After completing the course, you'll receive a Certificate of Completion, which can boost your portfolio and career opportunities.",
    },
    {
      question: "Q: Can I monetize my digital art after this course?",
      answer:
        "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away.",
    },
    {
      question: "Q: What happens if I miss a live session?",
      answer:
        "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing.",
    },
    {
      question: "Q: How do I apply the coupon code?",
      answer:
        "Once you sign up, you'll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses.",
    },
    {
      question: "Q: What if I don't have a tablet?",
      answer:
        "You can still take the course using a mouse & free digital art software (like Krita). However, a tablet is recommended for better results.",
    },
    {
      question: "Q: Is there a refund policy?",
      answer:
        "The ₹79 booking fee is non-refundable, but we're confident you'll love the course!",
    },
    {
      question: "Q: How do I enroll?",
      answer:
        "Click the 'Enroll Now' button, make the payment, and get instant access to the course materials!",
    },
  ];

  return (
    <div style={styles.container}>
     
      <h2 style={styles.title}>FAQs</h2>

     
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}

   
      <button style={styles.ctaButton}>Let’s get started</button>
    </div>
  );
};


const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.faqItem}>
     
      <div style={styles.questionRow} onClick={() => setOpen(!open)}>
        <span style={styles.questionText}>{question}</span>
        
        <span style={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

    
      {open && <p style={styles.answer}>{answer}</p>}
    </div>
  );
};


const styles = {
  container: {
    width: "100%",
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 16px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
    textAlign: "center",
  },
  
  faqItem: {
    marginBottom: "16px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "8px",
  },
  
  questionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  questionText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
  },
  arrow: {
    fontSize: "0.9rem",
    color: "#666",
    marginLeft: "8px",
  },
 
  answer: {
    marginTop: "8px",
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.4",
  },
 
  ctaButton: {
    marginTop: "24px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "24px",
    background: "linear-gradient(to right, #3045ff, #ff00ff)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default FAQ;
