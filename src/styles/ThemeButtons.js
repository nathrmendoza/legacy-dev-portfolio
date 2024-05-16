import styled from "styled-components";
import { getTheme } from "./ThemeUtils";

export const DefaultButton = styled.button`
    z-index: 1;
    display: inline-block;
    padding: 12px 24px;
    text-align: center;
    font-family: ${getTheme('primaryFont')};
    font-size: 18px;
    line-height: 26px;
    background: transparent;
    border: 2px solid transparent;
    transition: all 0.25s ease-out;
    cursor: pointer;
`

export const SecondaryButton = styled(DefaultButton)`
    border: none;
`