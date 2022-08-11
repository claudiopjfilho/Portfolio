import githublogo from "./assets/images/github.svg";
import linkedinlogo from "./assets/images/linkedin.svg";
import instagramlogo from "./assets/images/instagram.svg";
import facebooklogo from "./assets/images/facebook.svg";
import buttonmode from "./assets/images/light.svg";

import "./App.css";
function App() {
  return (
    <div className="App">
      <button id="mode">
        <img src={buttonmode} />
      </button>
      <header id="header">
        <img
          id="imgHeader"
          src="https://github.com/claudiopjfilho.png"
          alt="Foto de perfil do github"
        />

        <h1 id="headerH1">Cláudio Filho</h1>
        <p id="pH1">Web Dev | JavaScript | Software Developer</p>
      </header>
      <section>
        <div class="social-links">
          <ul>
            <li>
              <div>
                <a
                  id="box1"
                  href="https://github.com/claudiopjfilho"
                  target="_blank"
                >
                  <img src={githublogo} alt="github logo" />
                  Github
                </a>
              </div>
            </li>
            <li>
              <div>
                <a
                  id="box2"
                  href="https://www.linkedin.com/in/claudiopjfilho/"
                  target="_blank"
                >
                  <img src={linkedinlogo} alt="linkedin logo" />
                  Linkedin
                </a>
              </div>
            </li>
            <li>
              <div>
                <a
                  id="box3"
                  href="https://www.facebook.com/people/Claudio-Filho/100069922956689/"
                  target="_blank"
                >
                  <img src={facebooklogo} alt="facebook logo" />
                  Facebook
                </a>
              </div>
            </li>
            <li id="box4">
              <div>
                <a href="https://instagram.com/claudiopjfilho" target="_blank">
                  <img src={instagramlogo} alt="instagram logo" />
                  Instagram
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div id="devBy">
        <h4>Developed by @claudiopjfilho</h4>
      </div>
    </div>
  );
}

export default App;
