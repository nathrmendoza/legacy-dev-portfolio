import styled from "styled-components";
import { TypeH3, TypeText } from "../styles/Typography";
import { useState } from "react";
import { getTheme } from "../styles/ThemeUtils";

import { DefaultButton } from "../styles/ThemeButtons";

const WorkItemContainer = styled.div`
    width: 50%;
    padding: 0 24px;
    margin: 0 0 32px;
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    &:hover .hover-box {
        opacity: 1;
        pointer-events: all;
    }
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    aspect-ratio: 550 / 365;
    margin: 0 0 24px;
    cursor: pointer;
    transition: all 1s ease-in-out;
`

const HoverBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.35s ease-in-out;
`

const HBoxBgColor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.85;
`

const WorkTitle = styled(TypeH3)`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const WorkItem = ({work, showPopupHandle}) => {

    const [check, setCheck] = useState(false);
    const textColor = work.textColor === 'light' ? '#ffffff' : '#202023';
    const invertedColor = work.textColor === 'light' ? '#202023' : "#ffffff";

    const [btnHovered, setBtnHovered] = useState(false);

    return (
        <WorkItemContainer>
            <ImageContainer onClick={() => {showPopupHandle(work)}}>
                <Image className={check ? 'test' : ''} src={work.imgSrc} alt={`${work.name} Thumbnail`} onClick={() => {setCheck(!check)}} />
                <HoverBox className="hover-box">
                    <HBoxBgColor style={{backgroundColor: work.bgColor}} />
                    <DefaultButton 
                        onMouseEnter={() => {setBtnHovered(true)}}
                        onMouseLeave={() => {setBtnHovered(false)}}
                        style={btnHovered ? 
                                { 
                                    backgroundColor: textColor, 
                                    borderColor: textColor, 
                                    color: invertedColor
                                } : {
                                    borderColor: textColor, 
                                    color: textColor
                                }}>VIEW PROJECT</DefaultButton>
                </HoverBox>
            </ImageContainer>
            <WorkTitle onClick={() => {showPopupHandle(work)}}>{work.name}</WorkTitle>
            <TypeText style={{marginBottom: 0, textAlign: "justify"}}>{work.desc}</TypeText>
        </WorkItemContainer>
    )
}

export default WorkItem