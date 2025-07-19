import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaGlobe, FaMedium } from 'react-icons/fa';
import { socialLinks } from '../../data/content';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const LinkCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const IconWrapper = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ color, theme }) => color || theme.colors.accent};
`;

const LinkInfo = styled.div`
  text-align: left;
`;

const LinkName = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const LinkUsername = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const iconMap = {
  FaTwitter: FaTwitter,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaInstagram: FaInstagram,
  FaEnvelope: FaEnvelope,
  FaGlobe: FaGlobe,
  FaMedium: FaMedium,
};

const ReachOut: React.FC = () => {
  return (
    <Section id="reach-out">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Reach Out
        </Title>

        <LinksGrid>
          {socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap] || FaGlobe;
            
            return (
              <LinkCard
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <IconWrapper color={link.color}>
                  <IconComponent />
                </IconWrapper>
                <LinkInfo>
                  <LinkName>{link.name}</LinkName>
                  {link.username && (
                    <LinkUsername>{link.username}</LinkUsername>
                  )}
                </LinkInfo>
              </LinkCard>
            );
          })}
        </LinksGrid>
      </Container>
    </Section>
  );
};

export default ReachOut; 