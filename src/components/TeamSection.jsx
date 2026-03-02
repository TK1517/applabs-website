import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      <div className="team-container">

        <h2 className="team-title">Our Team</h2>

        {/* 🔥 Lead + Sublead Row */}
        <div className="lead-row">
          <div className="team-lead">
            <img
              src="/akhil.png"
              alt="Lead"
              className="member-img lead"
            />
            <h3>Akhil</h3>
            <p className="role">Lead</p>
          </div>

          <div className="team-sublead">
            <img
              src="/akhil.png"
              alt="Sub Lead"
              className="member-img sublead"
            />
            <h3>Sub Lead Name</h3>
            <p className="role">Sub Lead</p>
          </div>
        </div>

        {/* Core Members */}
        <h3 className="category">Core Members</h3>
        <div className="team-grid">
          {["Member 1", "Member 2", "Member 3"].map((name, index) => (
            <div className="member-card" key={index}>
              <img
                src="/akhil.png"
                alt={name}
                className="member-img"
              />
              <p>{name}</p>
            </div>
          ))}
        </div>

        {/* Volunteers */}
        <h3 className="category">Volunteers</h3>
        <div className="team-grid small">
          {["Volunteer 1", "Volunteer 2", "Volunteer 3"].map((name, index) => (
            <div className="member-card" key={index}>
              <img
                src="/akhil.png"
                alt={name}
                className="member-img"
              />
              <p>{name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
