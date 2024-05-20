import styled from "styled-components";

export const NarrowDiv = styled.div`
    width: 860px;
    max-width: 100%;
    margin: 0 auto 96px;
    padding: 0 24px;
    overflow: hidden;

    @media only screen and (max-width: 640px) {
        margin: 0 auto 60px;
    }
`

export const WideDiv = styled.div`
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
`

