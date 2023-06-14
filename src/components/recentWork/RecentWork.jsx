import React from "react";
import "./recent.css";

const RecentWork = () => {
  return (
    <div className="recent-container">
      <h3>Experiences.</h3>
      <div className="recent-container-info">
        <h4 className="container-info-name">Capsulas Express Nutresa</h4>
        <strong>FRONTEND DEVELOPER</strong>
        <p className="recent-container-info-desc">
          {" "}
          I worked on the renovation of the website, which was created using
          VTEX.io, React.js and Node.js, which allows creating an e-commerce,
          reusable, scalable and stable. This project took 5 months of
          development.
        </p>

        <strong>Tasks</strong>
        <ul>
          <li>content management</li>
          <li>Development of graphical interfaces based on a design system</li>
          <li>Consuming Rest Services with React.js</li>
          <li>
            Management of payment gateway and configuration of environments with
            Vtex.io
          </li>
        </ul>
        <img
          className="recent-container-info-img"
          width="600"
          src="https://gruponutresa.com/wp-content/uploads/2016/09/capsulas-maquina-nutresabias-Grupo-Nutresa.jpg"
        />
        <a
          className="recent-container-info-link"
          href="https://www.capsulasexpressnutresa.com/"
        >
          Meet him
        </a>
      </div>
      <div className="recent-container-info">
        <h4 className="container-info-name">Pragma - Solicitudes</h4>
        <strong>FRONTEND DEVELOPER</strong>
        <p className="recent-container-info-desc">
          Web service that manages vacation requests and advance payments for
          employees of PRAGMA S.A, Frontnd developed in React.js with
          Atomic-design
        </p>

        <strong>Tasks</strong>
        <ul>
          <li>Developing web components with React.js</li>
          <li>Configuration of development environments</li>
          <li>API consumption with Axios</li>
          <li>Handling states with React - Context</li>
        </ul>
        <img
          className="recent-container-info-img"
          width="600"
          src="https://i.imgur.com/B1Mjh8Q.png"
        />
      </div>
    </div>
  );
};

export default RecentWork;
