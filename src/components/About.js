import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis'

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            lerp: 0.07,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        const canvas = document.querySelector('.spline');
        gsap.to(canvas, {
            yPercent: 75,
            ease: 'none',
            scrollTrigger: {
                trigger: canvas,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []); // Add an empty dependency array to run this effect only once when the component mounts

    return (
        <>
        
        // <main id="main">
            <section>
                <div className="spline">
                    <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.443/build/spline-viewer.js"></script>
                    <spline-viewer url="https://prod.spline.design/aR8RJVAStugdKyXD/scene.splinecode" className="spline-viewer"></spline-viewer>
                </div>
                <h1 className='A-title'>Hello</h1>
            </section>
        // </main>
        </>
    );
};

export default About;
