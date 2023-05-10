import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .hide-video {
    opacity: 0;
    position: absolute;
    object-fit: cover;
    z-index: 1;
  }

  video {
    position: absolute;
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
    position: relative;
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

    //BOTTOM DIV REF (REDEFINED) and OBSERVER FUNCTION 
    const bottomDiv = bottomDivRef.current;
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
            //   tl.to(entry.target, {
            //     x: 200,
            //     opacity: 1,
            //     duration: 1.5,
            //     ease: 'power1.out',
            //   });
            tl.fromTo(entry.target, 
            {
                x: -300,
                duration: 2.5,
            }, 
            {
                opacity: 1,
                x: 200,
            });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );
  
      observer.observe(bottomDiv);
  
      return () => {
        observer.disconnect();
      };
    }, []);



  return (
    <Root>
      <Container>
        <FirstSectionTextContainer>
          <h1>iPhone 13 Pro</h1>
          <h2>Oh. So. Pro.</h2>
        </FirstSectionTextContainer>
        <video 
          autoPlay 
          muted
          src='/assets/videos/intro-animation.mov'
          height={900}
          width={1000}
        />
      </Container>
      <Container>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad blanditiis, quia deserunt odio aut animi rerum cupiditate impedit, aliquam soluta iste accusantium, dicta repellat dolorum mollitia tempora reprehenderit magni iure.</p>
      </Container>
      <Container 
        ref={bottomDivRef}
        className='hide-video'
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
      </Container>
    </Root>
  );
};

export default ColumnDivs;
