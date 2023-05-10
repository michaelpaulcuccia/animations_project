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

const FirstContainerText = styled.div`
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

const SecondContainerText = styled.div`
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

const ThirdContainer = styled.div`
  width: 100%;
  height: 1200px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: #eee;
  opacity: 0;

  p {
    position: absolute;
    text-align: right;
    right: 100px;
    z-index: 1;
    font-size: 1.75rem;
    font-weight: bold;
    color: #150909;
    line-height: 50px;
  }
  
  video {
    object-fit: contain;
    padding-right: 600px;
    margin: 0 auto;
  } 
   
`;

const Spacer = styled.div`
  padding: 25px 0;
`;

const ColumnDivs = () => {

  const secondContainerRef = useRef(null);
  const tlSecondContainer = gsap.timeline();

  const thirdContainerRef = useRef(null);
  const tlThirdContainer = gsap.timeline();

  useEffect(() => {

    const secondContainer = secondContainerRef.current;
    const thirdContainer = thirdContainerRef.current;

    const firstObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          tlSecondContainer.fromTo(entry.target, 
          {
            opacity: 0,
            x: 800 //starts off 
          }, 
          {
            opacity: 1,
            duration: 2,
            x: 0 //returns to original position 
          });
          firstObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );
  
    firstObserver.observe(secondContainer);

    const secondObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          tlSecondContainer.fromTo(entry.target, 
          {
            opacity: 0,
            y: 800 //starts off 
          }, 
          {
            opacity: 1,
            duration: 2,
            y: 0 //returns to original position 
          });
          secondObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );
  
    secondObserver.observe(thirdContainer);
  
      return () => {
        firstObserver.disconnect();
        secondObserver.disconnect();
      };

    }, []);

    //try to fix this repetition

  return (
    <Root>
      <FirstContainer>
        <FirstContainerText>
          <h1>iPhone 13 Pro</h1>
          <h2>Oh. So. Pro.</h2>
        </FirstContainerText>
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
        ref={secondContainerRef}
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
         <SecondContainerText>
            <p>
              <span>A dramatically more powerful camera system.{" "}</span>
              <br/>
              <span>A display so responsive every interaction feels new again.{" "}</span>
              <br/>
              <span>The world's fastest smartphone chip.{" "}</span>
              <br/>
              <span>Exceptional durability.{" "}</span>
              <br/>
              <span>A huge leap in battery life.{" "}</span>
              <br/>
              <br/>
              <br/>
              <span>Let's pro.</span>
            </p>
          </SecondContainerText>
      </SecondContainer>
      <ThirdContainer
        ref={thirdContainerRef}
      >
        <video 
          autoPlay 
          muted
          loop 
          src='/assets/videos/iphone-camera-video.mp4'
          height={1200}
          width={1200}
        />
        <p>
          <span>Gathers 47% more light than the iPhone 12{" "}</span>
          <br/>
          <span>Ultrawide camera can now capture four times more scene{" "}</span>
          <br/>
          <span>New sensor delivers better low-light performance{" "}</span>
          <br/>
        </p>
      </ThirdContainer>
      <Spacer />
    </Root>
  );
};

export default ColumnDivs;
