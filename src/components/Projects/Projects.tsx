import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { projects } from '../../data/content';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1200px;
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
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)<{ featured?: boolean }>`
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme, featured }) => featured ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows['2xl']};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  ${({ featured, theme }) => featured && `
    background: linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 100%);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${theme.colors.accent}, #66b3ff);
    }
  `}
`;

const ProjectHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ProjectDetails = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const TechStack = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechLabel = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ActionButton = styled(motion.a)<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  
  ${({ primary, theme }) => primary ? `
    background: ${theme.colors.accent};
    color: white;
    border: 2px solid ${theme.colors.accent};
    
    &:hover {
      background: transparent;
      color: ${theme.colors.accent};
    }
  ` : `
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.border};
    
    &:hover {
      border-color: ${theme.colors.accent};
      color: ${theme.colors.accent};
    }
  `}
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  
  ${({ status, theme }) => {
    switch (status) {
      case 'completed':
        return `background: ${theme.colors.success}20; color: ${theme.colors.success};`;
      case 'in_progress':
        return `background: ${theme.colors.warning}20; color: ${theme.colors.warning};`;
      case 'maintained':
        return `background: ${theme.colors.info}20; color: ${theme.colors.info};`;
      default:
        return `background: ${theme.colors.border}; color: ${theme.colors.textSecondary};`;
    }
  }}
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Sample project details for RapidMatch
  const rapidMatchDetails = [
    "Designed and implemented a high-performance C++ order book matching engine",
    "Supporting market, limit (GTC), and fill-or-kill (FOK) orders with price-time priority",
    "Achieved throughput of over 400,000 orders per second with 2.5 μs average latency",
    "Built custom TCP client with optimized bitfield-encoded messages",
    "Created FastAPI middleware for HTTP communication with the order book"
  ];

  return (
    <Section id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        Projects
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A showcase of my latest work in high-performance systems and full-stack development
        </Subtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                featured={project.featured}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectHeader>
                  <ProjectMeta>
                    <MetaInfo>
                      <FaCalendarAlt />
                      April 2025 – May 2025
                    </MetaInfo>
                    <StatusBadge status={project.status}>
                      {project.status.replace('_', ' ')}
                    </StatusBadge>
                  </ProjectMeta>
                  
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectHeader>

                {project.id === 'rapidmatch' && (
                  <ProjectDetails>
                    <DetailsList>
                      {rapidMatchDetails.map((detail, index) => (
                        <DetailItem key={index}>{detail}</DetailItem>
                      ))}
                    </DetailsList>
                  </ProjectDetails>
                )}

                <TechStack>
                  <TechLabel>Technologies Used</TechLabel>
                  <TechList>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechList>
                </TechStack>

                <ProjectActions>
                  <ActionButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    primary
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    View Code
                  </ActionButton>
                  
                  {project.liveUrl && (
                    <ActionButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </ActionButton>
                  )}
                </ProjectActions>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects; 