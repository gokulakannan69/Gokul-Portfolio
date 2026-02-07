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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  ${device.tablet} {
    padding: 0 50px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${theme.lightGray};
  font-weight: 700;

  ${device.tablet} {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: ${theme.accent};
  font-family: ${theme.fontMono};
  font-size: 1rem;
  margin-bottom: 3rem;
  
  ${device.tablet} {
    font-size: 1.1rem;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin: 0 auto 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${theme.accent};
  box-shadow: ${theme.shadow};
  transition: ${theme.transition};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${device.tablet} {
    width: 220px;
    height: 220px;
    margin-bottom: 3rem;
  }
`;

const Bio = styled(motion.div)`
  font-size: 1rem;
  line-height: 1.8;
  color: ${theme.text};
  max-width: 700px;
  margin: 0 auto;
  padding: 0 10px;

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${theme.lightGray};
    font-weight: 600;
  }

  ${device.tablet} {
    font-size: 1.15rem;
    padding: 0;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Subtitle
          data-aos="fade-up"
        >
          Get to know me
        </Subtitle>
        <SectionTitle
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </SectionTitle>

        <ProfileImage
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="/images/pic 2.jpeg"
            alt="Gokulakannan - Full Stack Developer"
          />
        </ProfileImage>

        <Bio
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p>
            Hello! I'm <strong>Gokulakannan</strong>, a passionate Full-Stack Developer
            specializing in building exceptional digital experiences. I graduated with a
            <strong> B.Tech in Information Technology</strong> from Anna University.
          </p>
          <p>
            My journey in web development started with curiosity and has evolved into a
            career where I create modern, accessible, and user-friendly web applications.
            I specialize in <strong>React.js</strong> for dynamic user interfaces and
            <strong> Node.js</strong> for robust backend systems.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to
            open-source projects, and staying updated with the latest web development trends.
          </p>
        </Bio>
      </Container>
    </AboutSection>
  );
};

export default About;