import React from "react";

import "./Home.css";
import { Link, NavLink } from "react-router-dom";

import logo from "../data/logo.png";
import logosvg from "../data/logo.svg";
import down from "../data/down.svg";
import user from "../data/user.svg";
import tick from "../data/tick.svg";
import member1 from "../data/1.png";
import member2 from "../data/2.png";

const Home = () => {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <div className="logo">
            <img className="logo-img" src={logosvg} />
            <a href="#" className="nav__logo">
              MediLocker
            </a>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About us
                </a>
              </li>
              <li className="nav__item">
                <a href="#how" className="nav__link">
                  How?
                </a>
              </li>
              <li className="nav__item">
                <a href="#team" className="nav__link">
                  Team
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact us
                </a>
              </li>

              <i
                className="bx bx-toggle-left change-theme"
                id="theme-button"
              ></i>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
          <div style={{ display: "flex" }}>
            <Link to="/login" className="button button__header log">
              Log In
            </Link>
            <Link to="/signup" className="button button__header">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="home section container" id="home">
          <div className="home__container  grid">
            <div className="home__data">
              <h1 className="home__title">Health Record System</h1>
              <p className="home__description">
                MediLocker is a secure blockchain based platform for storage of
                highly sensitive and critical data related to patients that is
                shared among multiple facilities and agencies for effective
                diagnosis and treatment.
              </p>

              <Link to="ecommerce" className="button">
                Sign Up Now!
              </Link>
            </div>
          </div>
        </section>
        <section className="services section container" id="about">
          <h2 className="section__title">Getting started is quick and easy</h2>
          <div className="services__container grid">
            <div className="services__data">
              <h3 className="services__subtitle">Register Yourself</h3>
              <img className="services__img" src={user} />
              <p className="services__description">
                Register yourself to the locker, secured by blockchain
                technology.
              </p>
            </div>

            <div className="services__data">
              <h3 className="services__subtitle">Authenticate Yourself</h3>
              <img className="services__img" src={tick} />
              <p className="services__description">
                Log In with your credentials.
              </p>
            </div>

            <div className="services__data">
              <h3 className="services__subtitle">Fetch your Documents</h3>
              <img className="services__img" src={down} />
              <p className="services__description">
                Create, update, or view your health record information.
              </p>
            </div>
          </div>
        </section>

        <section class="about section container" id="how">
          <div class="about__container grid">
            <div class="about__data">
              <h2 class="section__title-center">How does it work?</h2>
              <p class="about__description">
                The system utilizes a camera to capture images of the iris,
                which are then processed using image analysis and AI techniquies
                such as edge detection, feature extraction, and pattern
                recognition to track changes in the iris coordinates. These
                techniques are implemented using Haar Cascade algorithm that can
                detect objects in images, irrespective of their scale in image
                and location, present as a python li/brary under OpenCV.
                Further, the system anaysles these detected changes to dictact
                mouse functionalites by the user, such as movement, double-click
                on eye blink etc. to control assistive devices such as personal
                computers, wheelchairs or other communication systems. The UI of
                this system can be implemented on GUI application development
                platforms such as QT Designer, or can be hand coded in plain
                Python code.
              </p>
            </div>
          </div>
          <div class="instructions">
            <h3>
              1. Download and unzip the software with respect to your Operating
              System from the links given below.
            </h3>
            <h3>2. Extract the zip file.</h3>
            <h3>
              3. Open your preferred CLI Terminal in the extracted folder, and
              execute the following commands with respect to your Operating
              System.
            </h3>
          </div>
          <div class="K2_CBox">
            <div class="CB_Heading">
              <div class="copy-upper">
                <span>
                  Install Dependencies from CLI Terminal inside the root
                  directory - WINDOWS
                </span>
                <button
                  id="copy1"
                  class="C_box_main"
                  onclick="copyC('copy1','code1')"
                >
                  <i class="CBox_icn"></i>
                </button>
              </div>
              <div id="code1">
                <pre>pip install -r requirements.txt</pre>
              </div>
            </div>
            <div class="CB_Heading">
              <div class="copy-upper">
                <span>
                  Execute the system from CLI Terminal inside the root directory
                  - WINDOWS
                </span>
                <button
                  id="copy2"
                  class="C_box_main"
                  onclick="copyC('copy2','code2')"
                >
                  <i class="CBox_icn"></i>
                </button>
              </div>
              <div id="code2">
                <pre>python Start.py</pre>
              </div>
            </div>
            <div class="CB_Heading">
              <div class="copy-upper">
                <span>
                  Install Dependencies from CLI Terminal inside the root
                  directory - MacOS
                </span>
                <button
                  id="copy3"
                  class="C_box_main"
                  onclick="copyC('copy3','code3')"
                >
                  <i class="CBox_icn"></i>
                </button>
              </div>
              <div id="code3">
                <pre>pip3 install -r requirements.txt</pre>
              </div>
            </div>
            <div class="CB_Heading">
              <div class="copy-upper">
                <span>
                  Execute the system from CLI Terminal inside the root directory
                  - MacOS
                </span>
                <button
                  id="copy4"
                  class="C_box_main"
                  onclick="copyC('copy4','code4')"
                >
                  <i class="CBox_icn"></i>
                </button>
              </div>
              <div id="code4">
                <pre>python3 Start.py</pre>
              </div>
            </div>
          </div>
          <div class="download">
            <table>
              <tr id="table_header">
                <th>Operating System</th>
                <th>Download Link</th>
                <th>Working</th>
              </tr>
              <tr class="table-item">
                <td>Windows </td>
                <td>
                  <a href="https://drive.google.com/uc?id=1B_9WQDbg65enZ62ejRZ3gPYkEzF7HpVz&export=download">
                    Click Here
                  </a>
                </td>
                <td>
                  <a href="https://www.youtube.com/watch?v=CRG_h7QUrHA">
                    Live Demo!
                  </a>
                </td>
              </tr>
              <tr class="table-item">
                <td>MacOS </td>
                <td>
                  <a href="https://drive.google.com/uc?id=1AhthY4ZHjs60rW6XHzTibD_mXDp-gAHR&export=download">
                    Click Here
                  </a>
                </td>
                <td>
                  <a href="https://www.youtube.com/watch?v=CRG_h7QUrHA">
                    Live Demo!
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </section>
        {/* <section class="team-container section container" id="team">
            <h2 class="section__title">Our Team - DumbDumberDumbest</h2>
            <div class="team">
                <div class="card">
                    <div class="card--border">
                        <img src={member1} alt="card image" class="card--img"/>
                    </div>
                    <h3 class="card--name">Viraj Chandra</h3>
                    <span class="card--profession">Frontend Developer</span>

                    <div class="card--social" id="card-social1">
                        <div class="card--social-control">
                            <div class="card--social-toggle" id="card-toggle1">
                                <i class="ri-add-line"></i>
                            </div>

                            <span class="card--social-text">Reach Me</span>
                            <ul class="card--social-list">
                                <a href="https://www.instagram.com/me_ayan_710/" target="_blank"
                                    class="card--social-link">
                                    <i class="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/viraj-chandra/" target="_blank"
                                    class="card--social-link">
                                    <i class="ri-linkedin-line"></i>
                                </a>
                                <a href="https://github.com/virajchandra51" target="_blank" class="card--social-link">
                                    <i class="ri-github-line"></i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card--border">
                        <img src={member2} alt="card image" class="card--img"/>
                    </div>
                    <h3 class="card--name">Vibhor Singh</h3>
                    <span class="card--profession">Backend Developer</span>

                    <div class="card--social" id="card-social2">
                        <div class="card--social-control">
                            <div class="card--social-toggle" id="card-toggle2">
                                <i class="ri-add-line"></i>
                            </div>

                            <span class="card--social-text">Reach Me</span>
                            <ul class="card--social-list">
                                <a href="https://www.instagram.com/vibhorsingh_1234/" target="_blank" class="card--social-link">
                                    <i class="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/vibhor-singh-1577b122a/" target="_blank"
                                    class="card--social-link">
                                    <i class="ri-linkedin-line"></i>
                                </a>
                                <a href="https://github.com/Singh-Vibhor" target="_blank" class="card--social-link">
                                    <i class="ri-github-line"></i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card--border">
                        <img src={member2} alt="card image" class="card--img"/>
                    </div>
                    <h3 class="card--name">Vikash Kumar</h3>
                    <span class="card--profession">GUI Developer</span>

                    <div class="card--social" id="card-social3">
                        <div class="card--social-control">
                            <div class="card--social-toggle" id="card-toggle3">
                                <i class="ri-add-line"></i>
                            </div>

                            <span class="card--social-text">Reach Me</span>
                            <ul class="card--social-list">
                                <a href="https://instagram.com/honey__vikash?igshid=ZDdkNTZiNTM=" target="_blank"
                                    class="card--social-link">
                                    <i class="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/vikash-kumar-93bb39229/" target="_blank"
                                    class="card--social-link">
                                    <i class="ri-linkedin-line"></i>
                                </a>
                                <a href="https://github.com/honeyvikash" target="_blank" class="card--social-link">
                                    <i class="ri-github-line"></i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <section className="contact section container" id="contact">
            <div className="contact__container grid">
                <div className="contact__content">
                    <h2 className="section__title-center">Contact Us</h2>
                    <p className="contact__description">You can contact us from here, you can write to us,
                        call us for suggestions and enhancements.</p>
                </div>

                <ul className="contact__content grid">
                    <li className="contact__address">Telephone: <span className="contact__information">+91 9129916977</span>
                    </li>
                    <li className="contact__address">Email: <span
                            className="contact__information">virajchandra51@gmail.com</span></li>
                    <li className="contact__address">Location: <span className="contact__information">NIT Raipur - Great Eastern
                            Rd, Amanaka, Raipur, Chhattisgarh 492010</span></li>
                </ul>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14874.196331166764!2d81.6050291!3d21.2497222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1674894759884!5m2!1sen!2sin"
                    width="300" height="200" style={{border:"0",}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
      </main>
        <footer className="footer section">
          <p className="footer__copy">
            Design And Developed By The Boys
          </p>
          <p className="footer__copy">&#169; MediLocker. All right reserved</p>
        </footer>
    </div>
  );
};

export default Home;
