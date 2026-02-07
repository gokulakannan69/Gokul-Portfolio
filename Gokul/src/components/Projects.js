import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
`;

const Container = styled.div`
  max-width: 1200px;
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
  margin-bottom: 4rem;
  
  ${device.tablet} {
    font-size: 1.1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  transition: ${theme.transition};
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  
  ${device.tablet} {
    padding: 2rem;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${theme.accent};
    
    .folder-icon {
      color: ${theme.accent};
    }
    
    h3 {
      color: ${theme.accent};
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FolderIcon = styled.div`
  color: ${theme.accent};
  font-size: 40px;
  transition: ${theme.transition};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${theme.text};
    font-size: 1.3rem;
    transition: ${theme.transition};
    
    &:hover {
      color: ${theme.accent};
    }
  }
`;

const ProjectTitle = styled.h3`
  color: ${theme.lightGray};
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
  
  ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${theme.text};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 0.5rem;
  
  li {
    font-family: ${theme.fontMono};
    font-size: 0.85rem;
    color: ${theme.accent};
    background: rgba(37, 99, 235, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Amurta Hospital",
      description: "An advanced heart disease prediction system with AI-powered analysis. Features collaborative AI decision-making, confidence-aware predictions, cause-effect explanations, and blockchain-verified medical reports.",
      tech: ["TypeScript", "React", "Gemini AI", "Machine Learning"],
      github: "https://github.com/gokulakannan69/Amurta-Hospital",
      link: "https://github.com/gokulakannan69/Amurta-Hospital"
    },
    {
      title: "Customer Business Management",
      description: "A comprehensive business management system for tracking customers, orders, and inventory. Built with modern JavaScript frameworks for seamless business operations and data management.",
      tech: ["JavaScript", "React", "Node.js", "Database"],
      github: "https://github.com/gokulakannan69/Customer-Business-Management-System",
      link: "https://github.com/gokulakannan69/Customer-Business-Management-System"
    },
    {
      title: "Gokul Portfolio",
      description: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, mobile-first design, and optimized performance with Vercel deployment.",
      tech: ["JavaScript", "React", "Styled Components", "Framer Motion"],
      github: "https://github.com/gokulakannan69/Gokul-Portfolio",
      link: "https://gokul-portfolio-jade.vercel.app"
    },
    {
      title: "HandSpeak Sign Language",
      description: "A machine learning-based sign language recognition system that translates hand gestures into text. Uses computer vision and deep learning for real-time gesture detection and interpretation.",
      tech: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
      github: "https://github.com/gokulakannan69/HandSpeak-Sign-in-Language",
      link: "https://github.com/gokulakannan69/HandSpeak-Sign-in-Language"
    },
    {
      title: "Women Safety App",
      description: "A safety application designed to enhance women's security with features like emergency alerts, location tracking, and quick access to emergency contacts. Built with modern TypeScript for reliability.",
      tech: ["TypeScript", "React", "Geolocation API", "Real-time Alerts"],
      github: "https://github.com/gokulakannan69/Women-Safety",
      link: "https://github.com/gokulakannan69/Women-Safety"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Subtitle data-aos="fade-up">
          My work
        </Subtitle>
        <SectionTitle data-aos="fade-up" data-aos-delay="100">
          Featured Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectHeader>
                <FolderIcon className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </FolderIcon>
                <ProjectLinks>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <FaGithub />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <FaExternalLinkAlt />
                  </a>
                </ProjectLinks>
              </ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </TechList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;