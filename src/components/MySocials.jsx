import styled from "styled-components";
import { TypeH3, TypeText } from "../styles/Typography";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { getTheme } from "../styles/ThemeUtils";
import { divsFadeIn, iconsFadeIn, textFadeIn, titleFadeIn } from "../utils/FramerMotionAnimations";

const SocialsContainer = styled.div`
    margin: 72px 0 0;
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32px 0 0;
`

const SocialsAnchor = styled.a`
    color: ${getTheme('lightColor')};
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    margin: 0 12px;

    svg {
        width: 42px;
        height: auto;
    }

    &:hover {
        opacity: 0.65;
    }
`

const MySocials = () => {
    return (
        <SocialsContainer>
            <TypeH3 {...titleFadeIn} style={{textAlign: 'center', marginBottom: '12px'}}>My Socials</TypeH3>
            <TypeText {...textFadeIn} style={{textAlign: 'center'}}>Fairly active on these platforms, feel free to reach out.</TypeText>
            <IconsContainer >
                <SocialsAnchor {...iconsFadeIn} transition={{delay: 0.25, duration: 0.3}} href="https://www.linkedin.com/in/nathaniel-mendoza-425203163/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </SocialsAnchor>
                <SocialsAnchor {...iconsFadeIn} transition={{delay: 0.5, duration: 0.3}} href="https://www.facebook.com/neil328/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare/>
                </SocialsAnchor>
                <SocialsAnchor {...iconsFadeIn} transition={{delay: 0.75, duration: 0.3}} href="https://www.instagram.com/mndoza.nath/" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare/>
                </SocialsAnchor>
            </IconsContainer>
        </SocialsContainer>        
    )
}

export default MySocials