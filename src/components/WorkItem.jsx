import styled from "styled-components";
import { TypeH3, TypeText } from "../styles/Typography";
import { useState } from "react";

export const WorkItemContainer = styled.div`
    width: 50%;
    padding: 0 24px;
    margin: 0 0 32px;
`

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    aspect-ratio: 550 / 365;
    margin: 0 0 24px;
    cursor: pointer;
    transition: all 1s ease-in-out;
`

const WorkItem = ({work}) => {

    const [check, setCheck] = useState(false);

    return (
        <WorkItemContainer>
            <Image className={check ? 'test' : ''} src={work.imgSrc} alt={`${work.name} Thumbnail`} onClick={() => {setCheck(!check)}} />
            <TypeH3>{work.name}</TypeH3>
            <TypeText style={{marginBottom: 0, textAlign: "justify"}}>{work.desc}</TypeText>
        </WorkItemContainer>
    )
}

export default WorkItem