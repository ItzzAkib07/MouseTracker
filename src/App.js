import './App.css';
import React, { useState } from 'react';
import avtaar from './images/Memoji.jpg';
import Spline from '@splinetool/react-spline';
import scroll from './images/scroll-top-img.png';
import SmoothScrollingLink from './components/SmoothScrollingLink';




function App() {


  const [btnClass, setBtnClass] = useState('');

  const handleClick = () => {
    setBtnClass('btn-progress');

    setTimeout(() => {
      setBtnClass('btn-progress btn-fill');

    }, 500);

    setTimeout(() => {
      setBtnClass('btn-complete');
    }, 4100);

    setTimeout(() => {
      setBtnClass('');
    }, 4100);
  };
  return (
    <>
      <div className='container'>


        {/* social links */}
        <div className='ribbon'>

          <ul className='list'>
            <li className='links'>
              <a href='https://github.com/ItzzAkib07' target='_blank'>
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className='links'>
              <a href='https://www.linkedin.com/in/akib-mulla-931860194/' target='_blank'>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className='links'>
              <a href='https://www.instagram.com/itzz._akib._____/' target='_blank'>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className='links'>
              <a href='https://www.facebook.com/akib.mulla.961' target='_blank'>
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>

        </div>

        {/* Home section */}
        <section className='home' id='home'>

          <nav>
            <ul className='navbar'>
              <SmoothScrollingLink to="home" >
                <li className=' nav-link nav-link-ltr'>Home</li>
              </SmoothScrollingLink>

              <SmoothScrollingLink to="about" >
                <li className=' nav-link nav-link-ltr'>About</li>
              </SmoothScrollingLink>

              <SmoothScrollingLink to="works" >
                <li className=' nav-link nav-link-ltr'>My Work</li>
              </SmoothScrollingLink>

              <SmoothScrollingLink to="contact" >
                <li className=' nav-link nav-link-ltr'>Contact</li>
              </SmoothScrollingLink>
            </ul>
          </nav>

          <h1>Hi, I'm </h1>

          <h2>AKIB</h2>

          <h3>Frontend Developer</h3>

          <div className='spline-container'>
            <Spline scene="https://prod.spline.design/sfmkTjYZ6z5Q5JR7/scene.splinecode" className='bg' />
          </div>

        </section>

        {/* About section */}
        <section className='about' id='about'>

          <div className='spline-viewer'>
            <Spline scene="https://prod.spline.design/aR8RJVAStugdKyXD/scene.splinecode" className='about-spline' />
          </div>

          <h1 className='about-title'>Hello</h1>
          <p className='sub-title'>There!!!</p>



          <div className='info'>

            <div className='avtaar'>
              <img src={avtaar} />
            </div>

            <div className='myself'>

              <span>
                I'm on a mission to transform imagination into innovation. As a web developer, I'm not just a code junkie; I'm a dream weaver, a digital architect, and a problem solver 🪄 ✨
                <br />
                My coding toolbox is filled with the latest technologies and frameworks, including HTML5, CSS3, JavaScript, React.js, Material UI and more. I'm always learning and evolving to stay on the cutting edge of web development.
              </span>


              <a href={avtaar} className={`btn ${btnClass}`} onClick={handleClick} download >
                Download Resume <i class="fa-solid fa-download"></i>
              </a>
            </div>

          </div>

        </section>

        {/* Work section */}
        <section className='works' id='works'>
        </section>

        {/* contact section */}
        <section className='contact' id='contact'>
        </section>

        {/* Scroll Top button */}
        <SmoothScrollingLink to="home" >
          <span className='scroll'>
            <button>
              <img src={scroll} />
            </button>
          </span>
        </SmoothScrollingLink>
      </div>

    </>
  );
}

export default App;
