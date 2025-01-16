import React from "react";

const Resume = () => {
  return (
    <div className="resume-page" style={{ backgroundColor: "#101c3a", color: "#fff", padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Resume</h1>
      <p style={{ marginBottom: "20px" }}>Click below to view or download my resume:</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <iframe
          src="./Kendall_Burkett_Resumé.pdf"
          title="Kendall Burkett Resume"
          style={{
            width: "90vw", // Adjusts to 90% of the viewport width
            height: "90vh", // Adjusts to 90% of the viewport height
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
          }}
        />
      </div>
    </div>
  );
};

export default Resume;