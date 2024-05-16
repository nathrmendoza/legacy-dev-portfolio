import styled, { keyframes } from "styled-components"
import { TypeH2,TypeText } from "../styles/Typography"
import { getTheme } from "../styles/ThemeUtils"

const popupZoom = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    65% {
        transform: translate(-50%, -50%) scale(1.045);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
`

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    backdrop-filter: blur(5px);
`

const PopupContainer = styled.div`
    position: relative;
    width: 90vw;
    height: 90vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 8px;
    animation: ${popupZoom} 1s ease-out forwards;
    padding: 72px 32px 32px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const CloseButton = styled.button`
    background: none;
    border: none;
    outline: none;
    position: absolute;
    top: 20px; 
    right: 20px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    padding: 0;
    margin: 0;

    i {
        position: absolute;
        top: 50%;
        left: calc(50% - 1px);
        display: inline-block;
        width: 36px;
        height: 5px;
        border-radius: 8px;
        transform-origin: center;
        &:first-child {
            left: calc(50% - 1px);
            transform: translate(-50%, -50%) rotate( -45deg);
        }
        &:last-child {
            transform: translate(-50%, -50%) rotate( 45deg);
        }
    }
`

const ViewSiteContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const ViewSiteAnchor = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-family: ${getTheme('primaryFont')};
    font-size: 18px;
    line-height: 24px;
    transition: all 0.25s ease-in-out;
    margin-left: 42px;
    margin-bottom: 16px;
    font-weight: 700;
    &:hover {
        opacity: 0.75;
    }
    svg {
        margin-right: 8px;
    }
`

const ScreenshotContainer = styled.div`
    overflow-y: auto;
    width: 100%;
    flex: 1;
`

const Screenshot = styled.img`
    width: 100%;
    height: auto;
    display: block;
`

const WorkFeature = ({work, hidePopupHandle}) => {
    const textColor = work.textColor === 'light' ? '#ffffff' : '#202023';

    const disablePropagate = (e) => {
        e.stopPropagation();
    }

    return (
        <MainContainer onClick={hidePopupHandle}>
            <PopupContainer style={{backgroundColor: work.bgColor}} onClick={disablePropagate}>
                <CloseButton onClick={hidePopupHandle}>
                    <i style={{backgroundColor: textColor}}></i><i style={{backgroundColor: textColor}}></i>
                </CloseButton>
                <ViewSiteContainer>    
                    <TypeH2 style={{color: textColor, marginBottom: '16px'}}>{work.name}</TypeH2>
                    <ViewSiteAnchor style={{color: textColor}} href={work.workLink} target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={textColor}><path fill-rule="evenodd" clip-rule="evenodd" d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z" fill="currentColor"/></svg>
                        VIEW SITE
                    </ViewSiteAnchor>
                </ViewSiteContainer>
                <TypeText style={{color: textColor}}>{work.desc}</TypeText>
                <ScreenshotContainer>
                    <Screenshot src={work.fullImage} alt={`${work.name} Page Screenshot`}/>
                </ScreenshotContainer>
            </PopupContainer>
        </MainContainer>
    )
}

export default WorkFeature