import './App.css';
import photo from './assets/image/Photo.png'
import ReactJSImage from './assets/image/atom.svg'
import ReduxImage from './assets/image/redux.svg'
import TSImage from './assets/image/TS.svg'
import JSImage from './assets/image/JS.svg'
import HTMLImage from './assets/image/html.svg'
import CSSImage from './assets/image/css.svg'
import ApiImage from './assets/image/api.svg'
import MaterialUiImage from './assets/image/material-ui.svg'
import GitImage from './assets/image/git.svg'
import ChromeImage from './assets/image/chrome.svg'
import LocationImage from './assets/image/location.svg'


function App() {
  return (
    <div className="mainBlock">

      <div className='sectionWithPhoto'>

<div className='sectionWithPhotoContainer'>
        <div className='imgContainer'>
          <img alt='' src={photo} />
        </div>

        <div className='myContacts'>
          <h3>CONTACTS</h3>
          <div>
            <img src='https://www.flaticon.com/svg/static/icons/svg/3178/3178496.svg' />
            <span>+375 29 878 86 75</span>
          </div>
          <div>
            <img src='https://www.flaticon.com/svg/static/icons/svg/1932/1932718.svg' />
            <span>8janina@gmail.com</span>
          </div>
          <div>
            <img src='https://www.flaticon.com/svg/static/icons/svg/2111/2111290.svg' />
            <span><a href='https://github.com/alicereactus'>alicereactus</a></span>
          </div>
          <div>
            <img src='https://www.flaticon.com/svg/static/icons/svg/2111/2111368.svg' />
            <span><a href='https://www.linkedin.com/in/alice-haidukievich-a88834192/'>alice-haidukievich-a88834192</a></span>
          </div>
          <div>
            <img src='https://www.flaticon.com/svg/static/icons/svg/2111/2111545.svg' />
            <span>@wolfschpic</span>
          </div>
          <div>
            <img src={LocationImage} />
            <span>Belarus, Poland</span>
          </div>
          <div>
          </div>
        </div>

        <div className='myTechSkills'>
          <h3>TECHNICAL SKILLS</h3>
          <div className='myTechSkillsContainer'>
            <div>
              <img src={ReactJSImage} />
              <span>ReactJS</span>
            </div>
            <div>
              <img src={TSImage} />
              <span>TS</span>
            </div>
            <div>
              <img src={JSImage} />
              <span>JS</span>
            </div>
            <div>
              <img src={ReduxImage} />
              <span>Redux</span>
            </div>
            <div>
              <img src={ApiImage} />
              <span>REST API</span>
            </div>
            <div>
              <img src={ApiImage} />
              <span>axios</span>
            </div>
            <div>
              <img src={HTMLImage} />
              <span>HTML</span>
            </div>
            <div>
              <img src={CSSImage} />
              <span>CSS</span>
            </div>
            <div>
              <img src={ChromeImage} />
              <span>DevTools</span>
            </div>
            <div>
              <img src={MaterialUiImage} />
              <span>Material UI</span>
            </div>
            <div>
              <img src={GitImage} />
              <span>Git</span>
            </div>
            <div>
              <span>Unit tests</span>
            </div>
          </div>
        </div>

        <div className='mySoftSkills'>
          <h3>SOFT SKILLS</h3>
          <div className='mySoftSkillsContainer'>
            <div>Responsibility</div>
            <div>Hardworking</div>
            <div>Teamwork skills</div>
            <div>Sociability</div>
            <div>Learnability</div>
            <div>Motivation</div>
          </div>
        </div>

        <div className='myLanguages'>
          <h3>LANGUAGES</h3>
          <div className='myLanguagesContainer'>
            <div>
              <img src='https://img.icons8.com/color/2x/russian-federation.png' />
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/1200px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png' />
              <span>Russian, Belarusian (native speaker)</span>
            </div>
            <div>
              <img src='https://img.icons8.com/color/2x/great-britain.png' />
              <span>English (Intermediate)</span>
            </div>
            <div>
              <img src='https://img.icons8.com/color/72/poland.png' />
              <span>Polish (Elementary) + Pole's Card </span>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      </div>

      <div className='sectionWithText'>
        <h1>ALESIA HAIDUKIEVIČ</h1>
        <h2>Frontend Developer</h2>
        <div>
          <h3>SUMMARY</h3>
          <p>I'm responsible, motivated, easy-to-learn React Frontend Developer.
          I like programming because it's interesting for me to create something, to make user interface alive and friendly.
          I like to study and make my code better, also I like to share experience and learn from other developers.</p>
          <p>I am 24 y.o. Now I live in Minsk (Belarus) but I consider options such as remote work and moving to another country.</p>
        </div>
        <div>
          <h3>WORK EXPERIENCE</h3>
          <div className='coursesContainer'>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Freelance</div>
                <div className='position'>React Frontend Developer</div>
                <div className='year'>June 2020 - up to now</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'> Studied and practiced: created reusable React class and functional components (with hooks); created new functionality using TS and JS; wrote unit-tests; created store with Redux; wrote requests to the server using axios; designed
              project using Material UI. My projects on GitHub: Social Network, Todolist, Currency Exchange, Counter (with hooks), Counter (with Redux), Calculator (native JS). 
              </div>
            </div>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Accounting outsourcing private enterprise "IQ-consult"</div>
                <div className='position'>Chief Accountant</div>
                <div className='year'>August 2019 - June 2020</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'>Kept accounting of trade and transport organizations, advised
              organizations in the field of legislation, prepared annual financial statements.
              Took part in the automation of company's accounting:
              wrote technical tasks for programmers.</div>
            </div>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>School food factory</div>
                <div className='position'>Accountant</div>
                <div className='year'>July 2015 - August 2019</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'>Kept accounting of materials, did the calculation of dishes, prepared monthly
              accounting reports.
              Took part in the automation of the company's accounting: advised programmers in the development of accounting
              software.</div>
            </div>
          </div>
        </div>
        <div>
          <h3>EDUCATION</h3>
          <div className='educationContainer'>
            <div className='placeContainer'>
              <div className='place'>Belarusian State Economic University</div>
              <div className='year'>August 2015 - June 2019</div>
              <div className='location'>Belarus, Minsk</div>
            </div>
            <div className='description'>Bachelor's degree. Specialty: Accounting.</div>
          </div>
        </div>
        <div>
          <h3>COURSES</h3>
          <div className='coursesContainer'>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Online courses in IT company Andersen</div>
                <div className='year'>July 2020 - September 2020</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'>Studied technologies: JS, HTML, CSS, Git, DevTools</div>
            </div>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Courses IT-incubator</div>
                <div className='year'>May 2020 - January 2021</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'>Studied technologies: ReactJS, TS, JS, Redux, Redux-thunk, axios, REST API, HTML, CSS, Material UI, Storybook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
