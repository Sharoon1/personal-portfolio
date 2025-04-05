import React from "react";

function Certification() {
  return (
    <div>
      <div>
        <h2 className="text-textColor">Certification</h2>
      </div>
      <div className="lg:flex ">
        <div>
          <h4 className="my-2 text-slate-400">Certifications & Courses</h4>
          <ul style={{ listStyleType: "disc", padding: "20px" }}>
            <li>SEO Expert Certification – DigiSkills Training Program</li>
            <li>
              Digital Marketing Certification – DigiSkills Training Program
            </li>
            <li>
              Affiliate Marketing Certification – DigiSkills Training Program
            </li>
            <li>10-Modules of the Roshan Kal Academy! – Roshan Kal Academy</li>
            <li>
              Master Course on Critical Thinking Skills and Decision Making –
              Udemy
            </li>
            <li>
              Resource Mobilization to Meet Nutritional Needs in Emergencies –
              UNICEF
            </li>
          </ul>
        </div>{" "}
        <div>
          <h4 className="my-2 text-slate-400">
            Webinars & Conferences Attended
          </h4>
          <ul style={{ listStyleType: "disc", padding: "20px" }}>
            <li>Master in Organisational Leadership – Uniathena</li>
            <li>Mastering LinkedIn – Uniathena</li>
            <li>Participation in LBS Marketing Fest 2024 – GCUF </li>
            <li>The Ultimate Tableau Toolkit – Uniathena</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certification;
