import React from "react";
import Header from "../components/Header";
import About from "../images/About.jpg";
import instagram from "../images/instagram.png";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Header />
      <div className="AboutPage__container">
        <div className="AboutPage__imageContainer">
          <img
            className="AboutPage__introductionImage"
            src={About}
            alt="About Image"
          />
        </div>
        <div className="AboutPage__textContainer">
          <ul>
            <li>Name: BB(Bbangchi)</li>
            <li>Birthday: December 21st, 2019</li>
            <li>Hobby: Biting mom and dad</li>
            <li>Strength: Overwhelming Adorableness</li>
            <li>
              BB's Instagram:{" "}
              <a
                href="https://www.instagram.com/bbbbangchiiii?igsh=MXQxZndta213bjFiNA=="
                target="_blank"
              >
                {
                  <img
                    className="AboutPage__instagramLogo"
                    src={instagram}
                    alt="instagram logo img"
                  />
                }
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
