import React from 'react';
import './Resume.css'

const Resume = () => {
  return (
    <div className="Resume">
      <header className="Resume-header">
        <h1>Harrison Le</h1>
        <h2>456 Sub Street, Somewhere USA</h2>
        <p>Email: harrisonle@example.com | Phone: 987-654-3210</p>
      </header>

      <section className="Education">
        <h2>Education</h2>
        <div>
          <h3>York University</h3>
          <p>Bachelor of Arts in Digital Media | Toronto, Canada | Apr 2022</p>
          <p>GPA: 3.33/4.0</p>
        </div>
        <div>
          <h3>City University of Seattle</h3>
          <p>Master of Science in Computer Science | Seattle, WA, USA | Expected May 2026</p>
          <p>GPA: 4.0/4.0</p>
        </div>
      </section>

      <section className="Skills">
        <h2>Skills</h2>
        <div>
          <p>Programming languages: Java, JavaScript, Python</p>
          <p>Frameworks and libraries: React, Node.js, openGL</p>
          <p>Database systems: MySQL, MongoDB</p>
          <p>Game engine: Unity(C#)</p>
          <p>Physical computing: Arduino, Processing</p>
        </div>
      </section>

      <section className="Work Experience">
        <h2>Work Experience</h2>
        <div>
          <h3>Coding Instructor</h3>
          <p>Code Ninjas | Vaughan, Canada | Apr 2023 - Mar 2024</p>
        </div>
        <div>
          <h3>City University of Seattle</h3>
          <p>Student Assistant | Seattle, USA | June 2024 - Now</p>
        </div>
      </section>

     <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Retail Website</h3>
          <p>Built a personal website using React and deployed it on GitHub Pages.</p>
          <p>Source code: <a href="https://github.com/studentname/personal-website" target="_blank" rel="noopener noreferrer">https://github.com/studentname/personal-website</a></p>
        </div>

        <div className="Project">
          <h3>Online Bookstore</h3>
          <p>Developed a web application for an online bookstore using Spring Boot and MySQL.</p>
          <p>Source code: <a href="https://github.com/studentname/online-bookstore" target="_blank" rel="noopener noreferrer">https://github.com/studentname/online-bookstore</a></p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
