import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/content';
import backgroundImage from '../../assets/images/background.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['6xl']} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['4xl']};
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  /* Background image with overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${backgroundImage}) center/cover no-repeat;
    z-index: 0;
  }

  /* Dark overlay for better text readability */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 2;
  position: relative;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Bio = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadButton = styled(motion.a)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['2xl']};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  z-index: 10;
  text-align: center;
  width: max-content;

`;

const ScrollText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#reach-out');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <HeroSection id="hero">
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Name variants={itemVariants}>
            {personalInfo.name}
          </Name>
          
          <Title variants={itemVariants}>
            {personalInfo.title}
          </Title>
          
          <Bio variants={itemVariants}>
            {personalInfo.bio}
          </Bio>
          
          <ButtonContainer variants={itemVariants}>
            
            <DownloadButton
              href={personalInfo.resume}
              download="Nalin_Nagar_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <FaDownload />
            </DownloadButton>
          </ButtonContainer>
        </motion.div>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNextSection}
      >
        <ScrollText>Scroll Down</ScrollText>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 