import './App.css';
import Spline from '@splinetool/react-spline'


function App() {
  return (
    <>
      <div className='container'>

        <nav>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>

        </nav>

        <h1>Hi, I'm </h1>

        <h2>AKIB</h2>

        <h3>Frontend Developer</h3>

        <div className='spline-container'>
          <Spline scene="https://prod.spline.design/sfmkTjYZ6z5Q5JR7/scene.splinecode" className='bg' />
        </div>

      </div>

    </>
  );
}

export default App;
