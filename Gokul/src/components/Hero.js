import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';
import { FaDownload } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.background};
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  text-align: left;
  color: ${theme.text};
  max-width: 1000px;
  width: 100%;
  z-index: 2;
  padding: 0 10px;

  ${device.tablet} {
    padding: 0 50px;
  }
`;

const PreTitle = styled(motion.p)`
  color: ${theme.accent};
  font-family: ${theme.fontMono};
  font-size: 0.9rem;
  margin-bottom: 1rem;

  ${device.tablet} {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${theme.lightGray};
  font-weight: 600;
  line-height: 1.1;

  ${device.mobile} {
    font-size: 3rem;
  }

  ${device.tablet} {
    font-size: 4.5rem;
  }

  ${device.laptop} {
    font-size: 5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${theme.secondary};
  margin-bottom: 1.5rem;
  font-weight: 600;
  line-height: 1.1;

  ${device.tablet} {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 0.9rem;
  color: ${theme.text};
  max-width: 540px;
  margin-bottom: 2rem;
  line-height: 1.6;

  ${device.tablet} {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PreviewButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  background: transparent;
  color: ${theme.accent};
  text-decoration: none;
  border: 1px solid ${theme.accent};
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fontMono};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${device.tablet} {
    padding: 1.25rem 1.75rem;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  background: transparent;
  color: ${theme.accent};
  text-decoration: none;
  border: 1px solid ${theme.accent};
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fontMono};
  font-size: 0.9rem;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${device.tablet} {
    padding: 1.25rem 1.75rem;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${theme.background};
  padding: 2rem;
  border-radius: ${theme.borderRadius};
  max-width: 800px;
  width: 90%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HeroSection id="home">
      <Content>
        <PreTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hi, I am ,
        </PreTitle>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Gokulakannan S.
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          B.Tech IT student crafting accessible, human-centered digital experiences through modern web development.        </Description>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <ButtonGroup>
            <PreviewButton onClick={() => setIsModalOpen(true)}>
              Preview Resume
            </PreviewButton>
            <DownloadButton
              href="/files/resume.pdf"
              download="Gokul_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Download Resume
            </DownloadButton>
          </ButtonGroup>
        </motion.div>
        {isModalOpen && (
          <ModalOverlay onClick={() => setIsModalOpen(false)}>
            <ModalContent onClick={e => e.stopPropagation()}>
              <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
              <embed src="/files/resume.pdf" type="application/pdf" width="100%" height="600px" />
              <DownloadButton
                as="a"
                href="/files/resume.pdf"
                download="Gokul_CV.pdf"
                style={{ marginTop: '1rem', display: 'inline-block' }}
              >
                <FaDownload /> Download Resume
              </DownloadButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Content>
    </HeroSection>
  );
};

export default Hero;