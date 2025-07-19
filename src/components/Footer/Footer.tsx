import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Nalin Nagar. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer; 