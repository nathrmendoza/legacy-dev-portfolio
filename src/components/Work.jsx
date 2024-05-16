import styled from "styled-components"
import { NarrowDiv } from "../styles/ThemeContainers"
import {TypeH2, TypeText} from '../styles/Typography';

import works from '../works.json';
import WorkItem from "./WorkItem";
import { useState } from "react";
import WorkFeature from "./WorkFeature";

const WorkContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 56px -24px 0;
`

const Work = () => {

    const [workFeature, setWorkFeature] = useState({});
    const [popupState, setPopupState] = useState(false);

    const showPopup = (work) => {
        setPopupState(true);
        setWorkFeature(work)

        //set no scroll on body
        document.body.classList.add('no-scroll');
    }

    const hidePopup = () => {
        setPopupState(false);

        //remove no scroll on body
        document.body.classList.remove('no-scroll');
    }

    return (
        <>
        {popupState ? <WorkFeature work={workFeature} hidePopupHandle={hidePopup} /> : null}
        <NarrowDiv style={{marginBottom: '72px'}}>
            <TypeH2 style={{textAlign: 'center'}}>Works</TypeH2>
            <TypeText style={{textAlign: 'justify'}}>I've listed below some of the projects I've made throughout my career as a developer. Some are works of my own and others are works I've made for the company I've worked for. Go ahead, take a gander.</TypeText>
            <WorkContainer>
                {works.map((work, index) => <WorkItem key={index} work={work} showPopupHandle={showPopup}/>)}
            </WorkContainer>
        </NarrowDiv>
        </>
    )
}

export default Work