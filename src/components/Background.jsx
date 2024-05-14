import styled from "styled-components"
import { NarrowDiv } from "../styles/ThemeContainers"
import { TypeH2, TypeText } from "../styles/Typography"
import { getTheme } from "../styles/ThemeUtils"

export const ExpRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: 0 0 16px;
    &:last-child {
        margin: 0;
    }
`

export const YearLabel = styled.span`
    font-size: 18px;
    line-height: 26px;
    font-family: ${getTheme('primaryFont')};
    font-weight: 700;
    display: inline-block;
    position: relative;
    margin-right: 26px;
    width: 124px;
    &:after {
        content: '|';
        position: absolute;
        right: -14px;
        top: 0;
    }
`

export const Description = styled.p`
    font-size: 18px;
    line-height: 24px;
    font-family: ${getTheme('primaryFont')};
    display: inline-block;
    flex: 1;
`

const Background = () => {
    return (
      <NarrowDiv style={{marginBottom: '96px'}}>
        <TypeH2 style={{textAlign: 'center'}}>Background</TypeH2>
        <ExpRow>
            <YearLabel>2016</YearLabel>
            <Description>Enrolled in a BS program in Entertainment and Multimedia Computing at CIIT College of Arts and Technology, Philippines.</Description>
        </ExpRow>
        <ExpRow>
            <YearLabel>Mid 2019</YearLabel>
            <Description>Completed an internship at University of the Philippines Diliman, College of Social Science and Philosophy, focusing on managing the CSSP school portal.</Description>
        </ExpRow>
        <ExpRow>
            <YearLabel>2019 - 2021</YearLabel>
            <Description>Worked as a front-end developer at Optimind Technology Solutions, focusing on projects for clients in the <b>Philippines and Hong&nbsp;Kong</b>. Responsibilities included website development, ad banners, and email templates. Additionally, led and assisted other front-end developers in adhering to industry standards.</Description>
        </ExpRow>
        <ExpRow>
            <YearLabel>2021 - 2024</YearLabel>
            <Description>Joined Sonnet Digital as a front-end developer, collaborating with clients from <b>Australia, New&nbsp;Zealand, and the U.S</b>. Developed various web applications, including informational websites, school portals, ecommerce sites, and internal tools.</Description>
        </ExpRow>
      </NarrowDiv>
    )
}

export default Background