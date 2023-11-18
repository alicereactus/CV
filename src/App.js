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
        {/*<div className='imgContainer'>*/}
        {/*  <img alt='' src={photo} />*/}
        {/*</div>*/}

        <div className='myContacts'>
          <h3>CONTACTS</h3>
          <div>
            <span>Telephone: +48 570 257 171</span>
          </div>
          <div>
            <span>E-mail: 8janina@gmail.com</span>
          </div>
          {/*<div>*/}
          {/*  <span>Githu<a href='https://github.com/alicereactus' target='_blank'>alicereactus</a></span>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <img src='https://www.flaticon.com/svg/static/icons/svg/2111/2111368.svg' />*/}
          {/*  <span><a href='https://www.linkedin.com/in/alice-haidukievich-a88834192/' target='_blank'>alice-haidukievich-a88834192</a></span>*/}
          {/*</div>*/}
          <div>
            <span>Telegram: <a href='https://telegram.me/wolfschpic' target='_blank'>@wolfschpic</a></span>
          </div>
          <div>
            <span>Location: Poland, Warsaw</span>
          </div>
          <div>
          </div>
        </div>

        <div className='myTechSkills'>
          <h3>TECHNICAL SKILLS</h3>
          <div className='myTechSkillsContainer'>
            <div>
              <img src={JSImage} />
              <span>JS</span>
            </div>
            <div>
              <img src={TSImage} />
              <span>TS</span>
            </div>
            <div>
              <img src={ReactJSImage} />
              <span>ReactJS</span>
            </div>
            <div>
              <img src={ReduxImage} />
              <span>Redux</span>
            </div>

            {/*<div>*/}
            {/*  <img src={ApiImage} />*/}
            {/*  <span>REST api, axios</span>*/}
            {/*</div>*/}

            <div>
              <img src={ReduxImage} />
              <span>Redux-thunk</span>
            </div>

            <div>
              <img src={ReduxImage} />
              <span>Redux-saga</span>
            </div>

            <div>
              <img src={ReduxImage} />
              <span>Redux-epics</span>
            </div>

            <div>
              <span>RxJs</span>
            </div>

            <div>
              <span>GraphQL</span>
            </div>

            <div>
              <span>Webpack</span>
            </div>

            <div>
              <span>React-router</span>
            </div>

            <div>
              <span>Reselect</span>
            </div>

            <div>
              <span>Formik</span>
            </div>

            <div>
              <span>Material UI</span>
            </div>

            <div>
              <span>Playwright, Cypress</span>
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
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/1200px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png' />
              <span>Belarusian (Native speaker)</span>
            </div>
            <div>
              <img src='https://img.icons8.com/color/2x/russian-federation.png' />
              <span>Russian (Native speaker)</span>
            </div>
            <div>
              <img src='https://img.icons8.com/color/2x/great-britain.png' />
              <span>English (Upper Intermediate)</span>
            </div>
            <div>
              <img src='https://img.icons8.com/color/72/poland.png' />
              <span>Polish (Intermediate)</span>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      </div>

      <div className='sectionWithText'>

      <div className='sectionWithTextContainer'>
        <h1>ALESIA HAIDUKEVICH</h1>
        <h2>Frontend Developer (ReactJS)</h2>
        <div>
          <h3>SUMMARY</h3>
          <p>
            I'm responsible, motivated, easy-to-learn Frontend Developer (ReactJS).
            I like programming because it's interesting for me to create something, to make user interface alive and friendly.
            I like to study and make my code better. Also I like to share experience.
          </p>
          <p>I am a Polish permanent resident. Also I have driver's license</p>
        </div>
        <div>
          <h3>WORK EXPERIENCE</h3>
          <div className='coursesContainer'>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Softnetix</div>
                <div className='position'>Frontend Developer (ReactJS)</div>
                <div className='year'>April 2021 - Up to now</div>
                <div className='location'>Poland, Warsaw</div>
              </div>
              <div className='description'>
                <div>Working on a project related with sport statistics:</div>
                <div>-Developing administrator's personal account using ReactJS, TS, Redux.</div>
                <div>-Creating new functionality (filters, pagination, forms, tables etc.).</div>
                <div>-Refactoring way of fetching data replace redux-saga on redux-observable (epics).</div>
                <div>-Improving performance of project by avoiding overfetching data using GraphQL.</div>
                <div>-Improving performance of project by using memoized selectors.</div>
                <div>-Improving design of project due to work with design team by creating new components.</div>
                <div>-Improving the stable of project by covering it with end-to-end (using playwright) and unit tests.</div>
              </div>
            </div>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Freelance</div>
                <div className='position'>Frontend Developer (ReactJS)</div>
                <div className='year'>June 2020 - March 2021</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
                <div className='description'>
                  <div>Worked on an online store:</div>
                  <div>-Created new functionality using React, TS (created forms for adding and deleting products to the cart etc.).</div>
                  <div>-Organized work with the state of project using Redux.</div>
                  <div>-Received information from the server using redux-thunk.</div>
                  <div>-Сovered the project with unit tests.</div>
              </div>
            </div>
          </div>
        </div>
        {/*<div>*/}
        {/*  <h3>EDUCATION</h3>*/}
        {/*  <div className='educationContainer'>*/}
        {/*    <div className='placeContainer'>*/}
        {/*      <div className='place'>Belarusian State Economic University</div>*/}
        {/*      <div className='year'>Aug 2015 - June 2019</div>*/}
        {/*      <div className='location'>Belarus, Minsk</div>*/}
        {/*    </div>*/}
        {/*    <div className='description'>Bachelor's degree. Specialty: Accounting.</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div>
          <h3>EDUCATION</h3>
          <div className='coursesContainer'>

            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Belarusian State Economic University</div>
                <div className='year'>Aug 2015 - June 2019</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'>Bachelor's degree. Specialty: Accounting.</div>
            </div>
          <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Courses IT-incubator</div>
                <div className='year'>May 2020 - Febr 2021</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'>Studied technologies: JS, HTML, CSS, ReactJS, TS, Redux, Redux-thunk, axios, REST API, Redux-form, formik, Material UI, Storybook</div>
            </div>
            <div className='courseContainer'>
              <div className='placeContainer'>
                <div className='place'>Online courses in IT company Andersen</div>
                <div className='year'>July 2020 - Sept 2020</div>
                <div className='location'>Belarus, Minsk</div>
              </div>
              <div className='description'>Studied technologies: JS, HTML, CSS, Git, Chrome DevTools</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
