import styled from "styled-components";
import { NarrowDiv } from "../styles/ThemeContainers";
import { TypeH2, TypeText } from "../styles/Typography";

const GetInTouch = () => {
    return (
        <NarrowDiv style={{marginBottom: '72px'}}>
            <TypeH2 style={{textAlign: 'center'}}>Get in Touch</TypeH2>
            <TypeText style={{textAlign: 'justify'}}>If you're interested in the work I do, feel free to reach out thru this form. Alternatively, you could also get in touch with my social accounts.</TypeText>
        </NarrowDiv>
    )
}

export default GetInTouch