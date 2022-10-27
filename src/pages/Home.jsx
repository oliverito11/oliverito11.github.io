import '../styles/Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

import foto from '../images/aboutme.jpg';
import h from '../images/h.png';
import tuto from '../images/tuto.png';

import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <NavBar active="home" page={"Home"} />

      {/* Introducción */}
      <div className="presentation container-fluid p-5">
        <div className='row row-cols-1 row-cols-md-2 p-5'>
          <div className='d-flex justify-content-center align-items-center p-5'>
            <div className='name d-grid gap-2'>
              <div className='fs-1 fw-bold d-flex justify-content-center align-items-center'>
                Oliver Linares Colinas
              </div>
              <div className='fs-6 d-flex justify-content-center align-items-center'>
                Gameplay Developer 🎮
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Presentación */}
      <div className='webPresentation container-fluid d-flex justify-content-center align-items-center p-5'>
        <div className='p-1 p-md-5'>
          <div className='fs-5 fw-bold d-flex justify-content-center align-items-center'>
            Welcome to my page. What it is all about? 🤔
          </div>
          <div className='fs-6 d-flex justify-content-center align-items-center'>
            Here you will see my progress throught all this years I've been developing games:
          </div>
          <ul className='styledList'>
            <li><a href='#aboutme'>About me</a></li>
            <li><a href='#projects'>Projects I've made</a></li>
            <li><a href='#tutorials'>Mechanics I like to recreate and tutorials</a></li>
          </ul>
        </div>
      </div>

      {/* ABOUT ME */}
      <div id="aboutme" className='container-fluid p-5 leftSection'>
        {
          isDesktop ?
            <div className='row row-cols-2'>
              <div className='col-5 d-flex justify-content-center align-items-center'>
                <LazyLoadImage src={foto} width='10%' />
              </div>
              <div className='col-7'>
                <div className='text-center fw-bold fs-4 pb-4'>🙍‍♂️ About me</div>
                <div className='fs-6 mx-5'>
                  Hi! I'm Oliver. One young boy wanting to dedicate his live to the develop industry, and what better way than creating videogames? My current skills are:
                  <ul>
                    <li className='projectsList'>Unity 3D and 2D</li>
                    <li className='projectsList'>C# programming</li>
                    <li className='projectsList'>Blender</li>
                    <li className='projectsList'>FMOD Studio</li>
                    <li className='projectsList'>Shaders (In progress)</li>
                  </ul>
                </div>
              </div>
            </div>
            :
            <div className='row row-cols-1'>
              <div className=''>
                <div className='text-center fw-bold fs-4 pb-4'>🙍‍♂️ About me</div>
                <div className='fs-6 mx-5'>
                  Hi! I'm Oliver. One young boy wanting to dedicate his live to the develop industry, and what better way than creating videogames? My current skills are:
                  <ul>
                    <li className='projectsList'>Unity 3D and 2D</li>
                    <li className='projectsList'>C# programming</li>
                    <li className='projectsList'>Blender</li>
                    <li className='projectsList'>FMOD Studio</li>
                    <li className='projectsList'>Shaders (In progress)</li>
                  </ul>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <LazyLoadImage src={foto} width='10%' />
              </div>
            </div>
        }
      </div>

      {/* PROJECTS */}
      <div id="projects" className='container-fluid p-5 rightSection'>
        {
          isDesktop ?
            <div className='row row-cols-2'>
              <div className='col-7'>
                <div className='text-center fw-bold fs-4 pb-4'>📋 Projects</div>
                <div className='fs-6 mx-5'>
                  Whenever I want to create a new game, I really like to prepare everything.
                  If you don't know where to go, it will make you go crazy!
                  <br />
                  Some of my recent projects I've made are:
                  <ul>
                    <li className='projectsList'>You're darkest moment</li>
                    <li className='projectsList'>Heal and Tear</li>
                  </ul>
                  Want to know more about them? <Link to='./projects'>Click here.</Link>
                </div>
              </div>
              <div className='col-5 d-flex justify-content-center align-items-center'>
                <LazyLoadImage src={h} width='70%' />
              </div>
            </div>
            :
            <div className='row row-cols-1'>
              <div className=''>
                <div className='text-center fw-bold fs-4 pb-4'>📋 Projects</div>
                <div className='fs-6 mx-5'>
                  Whenever I want to create a new game, I really like to prepare everything.
                  If you don't know where to go, it will make you go crazy!
                  <br />
                  Some of my recent projects I've made are:
                  <ul>
                    <li className='projectsList'>You're darkest moment</li>
                    <li className='projectsList'>Heal and Tear</li>
                  </ul>
                  Want to know more about them? <Link to='./projects'>Click here.</Link>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <LazyLoadImage src={h} width='70%' />
              </div>
            </div>
        }
      </div>

      {/* TUTORIALS */}
      <div id="tutorials" className='container-fluid p-5 leftSection'>
        {
          isDesktop ?
            <div className='row row-cols-2'>
              <div className='col-5 d-flex justify-content-center align-items-center'>
                <LazyLoadImage src={tuto} width='70%' />
              </div>
              <div className='col-7'>
                <div className='text-center fw-bold fs-4 pb-4'>❓ Tutorials</div>
                <div className='fs-6 mx-5'>
                  Sometimes, I feel like recreating some cool mechanics I encounter in other games! This tends to be funny to recreate and can help you understand some concepts you are strugling with.
                  <br />
                  <p style={{ fontSize: 13 }}>This also comes very handy for me to! I tend to forget things. 🤔</p>
                </div>
              </div>
            </div>
            :
            <div className='row row-cols-1'>
              <div className=''>
                <div className='text-center fw-bold fs-4 pb-4'>❓ Tutorials</div>
                <div className='fs-6 mx-5'>
                  Sometimes, I feel like recreating some cool mechanics I encounter in other games! This tends to be funny to recreate and can help you understand some concepts you are strugling with.
                  <br />
                  <p style={{ fontSize: 13 }}>This also comes very handy for me to! I tend to forget things. 🤔</p>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <LazyLoadImage src={tuto} width='70%' />
              </div>
            </div>
        }
      </div>


      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </>
  );
}

export default Home;
