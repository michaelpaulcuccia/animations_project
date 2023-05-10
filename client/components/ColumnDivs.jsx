import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstContainer = styled.div`
  width: 100%;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .first-video {
    position: absolute;
    right: 300px; //Container 1600px, Video 1000px
  }
   
`;

const SecondContainer = styled.div`
  width: 100%;
  height: 1200px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  opacity: 0;
  
  .smoke-video {
    object-fit: cover;
    z-index: 1;
  }
   
`;

const FirstSectionTextContainer = styled.div`
  z-index: 2;
 
  h1, h2 {
    text-align: center;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 3rem;
  }

  padding-bottom: 10rem;

`;

const SmokeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
   

  p {
    position: absolute;
    top: 400px;
    z-index: 1;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    line-height: 50px;
    padding-left: 50px;
  }
`;

const ColumnDivs = () => {

  //BOTTOM DIV REF and ANIMATION
  const bottomDivRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {

    const bottomDiv = bottomDivRef.current;
    
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
            tl.fromTo(entry.target, 
            {
              opacity: 0,
              x: 800 //starts off 
            }, 
            {
              opacity: 1,
              duration: 2,
              x: 0 //returns to original position 
            });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } 
      );
      
  
      observer.observe(bottomDiv);
  
      return () => {
        observer.disconnect();
      };
    }, []);



  return (
    <Root>
      <FirstContainer>
        <FirstSectionTextContainer>
          <h1>iPhone 13 Pro</h1>
          <h2>Oh. So. Pro.</h2>
        </FirstSectionTextContainer>
        <video 
          className='first-video'
          autoPlay 
          muted
          src='/assets/videos/intro-animation.mov'
          height={900}
          width={1000}
        />
      </FirstContainer>
      <SecondContainer 
        ref={bottomDivRef}
        className='smoke-video'
      >
        <video 
            autoPlay 
            muted
            loop 
            src='/assets/videos/smoke-video.mp4'
            height={1200}
            width={1200}
        />
         <SmokeTextContainer>
            <p>
              <span className='highlight'>A dramatically more powerful camera system.{" "}</span>
              <br/>
              <span className='hightlight'>A display so responsive every interaction feels new again.{" "}</span>
              <br/>
              <span className='hightlight'>The world's fastest smartphone chip.{" "}</span>
              <br/>
              <span className='hightlight'>Exceptional durability.{" "}</span>
              <br/>
              <span className='hightlight'>A huge leap in battery life.{" "}</span>
              <br/>
              <br/>
              <br/>
              <span className='hightlight'>Let's pro.</span>
            </p>
          </SmokeTextContainer>
      </SecondContainer>
    </Root>
  );
};

export default ColumnDivs;
