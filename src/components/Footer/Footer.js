import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href="tel:914-336-6843">(914)336-6843</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href="mailto:jamfin92@gmail.com">jamfin92@gmail.com</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>It's not in the name. It's the action behind it.</Slogan>
            </CompanyContainer>
            <SocialContainer>
                <SocialIcons href="https://github.com/jamfin92">
                    <AiFillGithub size="3rem"/>
                </SocialIcons>
                <SocialIcons href="https://linkedin.com/Jamfin92">
                    <AiFillLinkedin size="3rem"/>
                </SocialIcons>
                <SocialIcons href="https://instagram.com">
                    <AiFillInstagram size="3rem"/>
                </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
