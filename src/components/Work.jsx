import styled from "styled-components"
import { NarrowDiv } from "../styles/ThemeContainers"
import {TypeH2, TypeText} from '../styles/Typography';

import works from '../works.json';
import WorkItem from "./WorkItem";

export const WorkContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 56px -24px 0;
`

const Work = () => {

    return (
        <NarrowDiv style={{marginBottom: '72px'}}>
            <TypeH2 style={{textAlign: 'center'}}>Works</TypeH2>
            <TypeText style={{textAlign: 'justify'}}>I've listed below some of the projects I've made throughout my career as a developer. Some are works of my own and others are works I've made for the company I've worked for. Go ahead, take a gander.</TypeText>
            <WorkContainer>
                {works.map((work, index) => <WorkItem key={index} work={work}/>)}
            </WorkContainer>
        </NarrowDiv>
    )
}

export default Work