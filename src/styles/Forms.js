import styled from "styled-components";
import { getTheme } from "./ThemeUtils";
import { DefaultButton } from "./ThemeButtons";

export const Input = styled.input`
    width: 100%;
    font-family: ${getTheme('primaryFont')};
    font-size: 18px; 
    line-height: 26px;
    padding: 6px 12px;
    color: ${getTheme('primaryColor')};
    background-color: ${getTheme('lightColor')};
    border-radius: 5px;
    border: 1px solid #000;
    margin: 0 0 16px;
    transition: all 0.25s ease-out;
    
    &:disabled {
        opacity: 0.45;
        pointer-events: none;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    font-family: ${getTheme('primaryFont')};
    font-size: 18px; 
    line-height: 26px;
    padding: 6px 12px;
    color: ${getTheme('primaryColor')};
    background-color: ${getTheme('lightColor')};
    border-radius: 5px;
    height: 220px;
    border: 1px solid #000;
    margin: 0 0 16px;
    transition: all 0.25s ease-out;

    &:disabled {
        opacity: 0.45;
        pointer-events: none;
    }
`

export const SubmitButton = styled(DefaultButton)`
    width: 180px;
    border-color: ${getTheme('lightColor')};
    color: ${getTheme('lightColor')};
    &:hover {
        background-color: ${getTheme('lightColor')};
        color: ${getTheme('darkColor')};
    }
    &:disabled {
        opacity: 0.45;
        pointer-events: none;
    }
`