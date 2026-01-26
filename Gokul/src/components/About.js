import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  align-items: center;

  ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    padding: 0 50px;
  }
`;

const Content = styled.div`
  order: 2;
  
  ${device.tablet} {
    order: 1;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: ${theme.lightGray};
    white-space: nowrap;

    &::before {
      content: '02.';
      color: ${theme.accent};
      font-family: ${theme.fontMono};
      font-size: 1.2rem;
      margin-right: 10px;
      font-weight: 400;
    }

    &::after {
      content: '';
      display: block;
      width: 200px;
      height: 1px;
      background: ${theme.darkGray};
      margin-left: 20px;
    }

    ${device.tablet} {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.6;
    color: ${theme.secondary};
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  order: 1;

  ${device.tablet} {
    order: 2;
    margin: 0;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: ${theme.borderRadius};
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);

    &:hover,
    &:focus {
      outline: 0;
      transform: translateY(-5px);
      transition: ${theme.transition};

      &::after {
        top: 15px;
        left: 15px;
      }
    }

    .img {
      position: relative;
      border-radius: ${theme.borderRadius};
      transition: ${theme.transition};
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${theme.borderRadius};
      transition: ${theme.transition};
      border: 1px solid ${theme.primary};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${theme.fontMono};
    font-size: 0.8rem;
    color: ${theme.text};

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${theme.accent};
    }
  }
`;

const About = () => {
  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'Styled Components', 'HTML & CSS', 'Git'];

  return (
    <AboutSection id="about">
      <Container>
        <Content data-aos="fade-up">
          <h2>About Me</h2>
          <p>
            I’m Gokulakannan, a full-stack web developer who builds modern, accessible, and scalable web applications using React and Node.js. I enjoy turning creative ideas into powerful digital experiences.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working on various projects. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <SkillsList>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </SkillsList>
        </Content>
        <ImageContainer data-aos="fade-left">
          <div className="wrapper">
            <img
              className="img"
              src="/images/profile.jpg"
              alt="Profile"
            />
          </div>
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About;