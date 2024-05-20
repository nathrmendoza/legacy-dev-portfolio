import styled from "styled-components"
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiJqueryLogo,
  DiReact,
  DiWordpress,
} from "react-icons/di";
import { SiJavascript, SiPhp, SiShopify } from "react-icons/si";

import { NarrowDiv } from "../styles/ThemeContainers"
import { TypeH2, TypeText } from "../styles/Typography"
import { FaCss3 } from "react-icons/fa";
import { divsFadeIn, textFadeIn, titleFadeIn } from "../utils/FramerMotionAnimations";

const ToolsList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 48px -36px 0;
    row-gap: 42px;
`

const ToolItem = styled.div`
    width: 20%;
    padding: 0 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg { 
        width: 64px;
        max-width: 100%;
        height: auto;
        transition: all 0.25s ease-in-out;
        &:hover {
            opacity: 0.75;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 25%;
    }
    @media only screen and (max-width: 480px) {
        width: 33.333%;
    }
`

const tools = ["HTML", "CSS", "Javascript", "PHP", "React", "jQuery", "Wordpress", "Shopify"]

const Tools = () => {
    return(
        <NarrowDiv>
            <TypeH2 {...titleFadeIn} style={{textAlign: 'center'}}>Tools of Trade</TypeH2>
            <TypeText {...textFadeIn}style={{textAlign: 'justify'}}>Below I've listed the technologies utilized in my projects. Gained proficiency using these tools through experience and interest in adapting to project quality standards.</TypeText>
            <ToolsList style={{marginTop: '36px'}}>
                {tools.map(e => (
                    <ToolItem {...divsFadeIn} key={e.toLowerCase()}>
                        <div className="svg-container">
                            {(() => {
                                switch (e.toLowerCase()) {
                                    case 'html':
                                        return <DiHtml5/>;
                                    case 'css':
                                        return <FaCss3/>;
                                    case 'javascript':
                                        return <SiJavascript/>;
                                    case 'php':
                                        return <SiPhp/>;
                                    case 'react':
                                        return <DiReact/>;
                                    case 'jquery':
                                        return <DiJqueryLogo/>;
                                    case 'wordpress':
                                        return <DiWordpress/>;
                                    case 'shopify':
                                        return <SiShopify/>;
                                    default: 
                                        return <span>{e}</span>;
                                }
                            })()}
                        </div>
                        <TypeText style={{textAlign: 'center', marginTop: '10px'}}>{e}</TypeText>
                    </ToolItem>
                ))}
            </ToolsList>
        </NarrowDiv>
    )
}

export default Tools