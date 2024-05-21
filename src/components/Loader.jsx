import React from "react";
import styled from "styled-components"

const LoaderContainer = styled.div`
    width: 100%;
    height: 400px;
    margin: 0 auto 24px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UILoader = () => {
    return (
        <LoaderContainer>
            <img src="./assets/loader.gif" alt="Loader" width="84" height="84" />
        </LoaderContainer>
    )
}

export default UILoader