import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const PreTitle = styled.p`
  color: ${theme.accent};
  font-family: ${theme.fontMono};
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${theme.lightGray};
  font-weight: 600;

  ${device.tablet} {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  color: ${theme.text};
  font-size: 1.1rem;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 1.25rem 1.75rem;
  background: transparent;
  color: ${theme.accent};
  text-decoration: none;
  border: 1px solid ${theme.accent};
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fontMono};
  font-size: 1rem;
  transition: ${theme.transition};
  margin-bottom: 4rem;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: auto;

  a {
    color: ${theme.text};
    font-size: 1.5rem;
    transition: ${theme.transition};

    &:hover {
      color: ${theme.accent};
      transform: translateY(-3px);
    }
  }
`;

const Footer = styled.footer`
  margin-top: 5rem;
  font-family: ${theme.fontMono};
  font-size: 0.8rem;
  color: ${theme.text};
  
  a {
    color: ${theme.text};
    &:hover {
      color: ${theme.accent};
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <PreTitle data-aos="fade-up">06. What's Next?</PreTitle>
        <Title data-aos="fade-up" data-aos-delay="100">Get In Touch</Title>
        <Description data-aos="fade-up" data-aos-delay="200">
          I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Description>

        <ContactButton
          href="mailto:gokulkannangk28@gmail.com"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Say Hello
        </ContactButton>

        <SocialLinks data-aos="fade-up" data-aos-delay="400">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:gokulkannangk28@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="tel:+919361443302" aria-label="Phone">
            <FaPhone />
          </a>
        </SocialLinks>

        <Footer>
          <p>Designed & Built by Gokulakannan S</p>
        </Footer>
      </Container>
    </ContactSection>
  );
};

export default Contact;