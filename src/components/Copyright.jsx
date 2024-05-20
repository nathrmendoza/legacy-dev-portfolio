import styled from "styled-components";
import { TypeText } from "../styles/Typography";
import { NarrowDiv } from "../styles/ThemeContainers";
import { textFade } from "../utils/FramerMotionAnimations";

const CopyrightText = styled(TypeText)`
    text-align: center;
    opacity: 0.65;
    margin: 0;
    font-size: 14px;
    line-height: 22px;
`

const CopyrightRow = () => {
    const currentYear = new Date().getFullYear();

    return (
        <NarrowDiv style={{marginBottom: '56px', marginTop: '40px'}}>
            <CopyrightText {...textFade}>© {currentYear} Nath Mendoza. All Rights Reserved.</CopyrightText>
        </NarrowDiv>
    )
}

export default CopyrightRow;