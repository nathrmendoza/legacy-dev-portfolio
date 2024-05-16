import React from "react";
import styled from "styled-components"

const LoaderContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
`;

const UILoader = () => {
    return (
        <LoaderContainer>
            <img src="./loader.gif" alt="Loader" width="84" height="84" />
        </LoaderContainer>
    )
}

export default UILoader