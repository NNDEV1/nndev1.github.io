import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaBuilding } from 'react-icons/fa';
import { experiences } from '../../data/content';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accent}80
    );
    border-radius: ${({ theme }) => theme.borderRadius.full};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 30px;
    }
  }
`;

const ExperienceCard = styled(motion.div)<{ index: number }>`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  position: relative;
  
  ${({ index }) => index % 2 === 0 ? `
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  ` : `
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    margin-left: ${({ theme }) => theme.spacing['3xl']};
  }
`;

const TimelineNode = styled.div<{ index: number }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.accent};
  border: 4px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 30px;
  }
`;

const ExperienceContent = styled.div<{ index: number }>`
  flex: 1;
  max-width: 45%;
  
  ${({ index }) => index % 2 === 0 ? `
    margin-right: 60px;
  ` : `
    margin-left: 60px;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    margin-left: ${({ theme }) => theme.spacing['2xl']};
    margin-right: 0;
  }
`;

const ExperienceHeader = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

const CompanySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CompanyLogo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  object-fit: contain;
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const CompanyIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const CompanyLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-decoration: none;
  margin-left: ${({ theme }) => theme.spacing.md};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    text-decoration: underline;
  }
`;

const Position = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const DescriptionItem = styled.li`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::before {
    content: '▶';
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    position: absolute;
    left: 0;
    top: 2px;
  }
`;

const TechnologiesSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TechnologiesLabel = styled.h5`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.accent}20;
  color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.accent}30;
`;

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <Section id="experience">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My journey in software engineering, machine learning, and high-performance systems
        </Subtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Timeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                index={index}
                variants={itemVariants}
              >
                <TimelineNode index={index} />
                <ExperienceContent index={index}>
                  <ExperienceHeader>
                    <CompanySection>
                      <CompanyInfo>
                        <CompanyName>
                          {experience.companyLogo ? (
                            <CompanyLogo 
                              src={experience.companyLogo} 
                              alt={`${experience.company} logo`}
                            />
                          ) : (
                            <CompanyIcon>
                              <FaBuilding />
                            </CompanyIcon>
                          )}
                          {experience.company}
                          {experience.companyUrl && (
                            <CompanyLink 
                              href={experience.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <FaExternalLinkAlt /> Visit Company
                            </CompanyLink>
                          )}
                        </CompanyName>
                        <Position>{experience.position}</Position>
                      </CompanyInfo>
                      <MetaInfo>
                        <MetaItem>
                          <FaCalendarAlt />
                          {experience.startDate} {experience.endDate ? `– ${experience.endDate}` : '– Present'}
                        </MetaItem>
                        <MetaItem>
                          <FaMapMarkerAlt />
                          {experience.location}
                        </MetaItem>
                      </MetaInfo>
                    </CompanySection>

                    <DescriptionList>
                      {experience.description.map((item, idx) => (
                        <DescriptionItem key={idx}>
                          {item}
                        </DescriptionItem>
                      ))}
                    </DescriptionList>

                    <TechnologiesSection>
                      <TechnologiesLabel>Technologies & Skills</TechnologiesLabel>
                      <TechnologiesList>
                        {experience.technologies.map((tech) => (
                          <TechTag key={tech}>{tech}</TechTag>
                        ))}
                      </TechnologiesList>
                    </TechnologiesSection>
                  </ExperienceHeader>
                </ExperienceContent>
              </ExperienceCard>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Experience; 