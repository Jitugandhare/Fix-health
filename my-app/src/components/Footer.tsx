import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <img src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_white_6p2ZETYLi.svg" alt="" />
                </FooterSection>
                <FooterSection>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Fix Health</FooterHeading>
                    <FooterLink href="#">Product</FooterLink>
                    <FooterLink href="#">Blogs</FooterLink>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms & Conditions</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Company</FooterHeading>
                    <FooterLink href="#">About Us</FooterLink>
                    <FooterLink href="#">Careers</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Services</FooterHeading>
                    <FooterLink href="#">Knee Pain</FooterLink>
                    <FooterLink href="#">Neck Pain</FooterLink>
                    <FooterLink href="#">Back Pain</FooterLink>
                    <FooterLink href="#">Shoulder Pain</FooterLink>
                    <FooterLink href="#">Ankle and Foot Pain</FooterLink>
                    <FooterLink href="#">All Services</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Conditions</FooterHeading>
                    <FooterLink href="#">Spondylosis</FooterLink>
                    <FooterLink href="#">ACL Tear</FooterLink>
                    <FooterLink href="#">Achilles Tendonitis</FooterLink>
                    <FooterLink href="#">Plantar Fasciitis</FooterLink>
                    <FooterLink href="#">All Conditions</FooterLink>
                </FooterSection>
            </FooterContent>
            <SocialIcons>
                <SocialIconLink href="#" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="#" target="_blank" aria-label="Twitter">
                    <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="#" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="#" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                </SocialIconLink>
            </SocialIcons>
            <Copyright>
                © 2023. FixHealth.com | Illustrations designed by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">freepik</a>
            </Copyright>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  background-color: #25262b;
  color: white;
  padding: 40px 20px;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  transition: color 0.3s;

  &:hover {
    color: #0ef;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SocialIconLink = styled.a`
  color: white;
  font-size: 24px;
  margin-left: 10px;
  transition: color 0.3s;

  &:hover {
    color: #0ef;
  }
`;

const Copyright = styled.div`
  color: #ccc;
  font-size: 14px;
  text-align: left;
  margin-top: 20px;

  a {
    color: #ccc;
    text-decoration: underline;

    &:hover {
      color: #0ef;
    }
  }
`;

export default Footer;
