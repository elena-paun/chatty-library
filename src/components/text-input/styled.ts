import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../assets/sizes";
import CrossIcon from '../../icons/Cross';

interface StyledWrapperProps {
    width: string;
    innerSize: ComponentSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    position: relative;
    width: ${pr => pr.width};
    height: ${ pr => heights[pr.innerSize]}px;
`;

interface StyledTextInputProps {
    innerSize: ComponentSize;
    disabled: boolean;
    error: boolean;
    width: string;
    withIcon: boolean;
    withCross: boolean;
}


/* Real tag is assigned dynamically */
export const StyledTextInput = styled.input<StyledTextInputProps>`
    outline: none !important;
    box-sizing: border-box;
    position: relative;
    padding: 0;
    background-color: rgb(246, 247, 248);
    padding-left: ${ pr => sidePaddings[pr.innerSize] + (pr.withIcon ? sidePaddings[pr.innerSize] + 10/* icon */ : 0) }px;
    padding-right: ${ pr => sidePaddings[pr.innerSize] + (pr.withCross ? sidePaddings[pr.innerSize]/* cross */ : 0) }px;
    height: ${ pr => heights[pr.innerSize]}px;
    width: ${pr => pr.width};
    border-color: rgb(225, 235, 238);
    border-style: solid;
    outline: none;
    border-radius: 5px;
    color: #000;
    ${ pr => pr.disabled ? `
        background-color: rgb(246, 247, 248);
        color: #5e5e5e;
        cursor: not-allowed;
        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
        ` : ''
    }
    transition: 0.1s ease-out;
    box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : 'transparent'};
  
`;

interface StyledIconProps {
    innerSize: ComponentSize;
}

export const StyledIcon = styled.div.withConfig({
    shouldForwardProp: (prop, defPropValFN) =>
      !["innerSize"].includes(prop) && defPropValFN(prop),
  })<StyledIconProps>`
    box-sizing: border-box;
    position: absolute;
    left: ${ pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: translateY(-50%);

    height: 15px;
    width: 15px;
`;

interface StyledCrossProps {
    innerSize: ComponentSize;
}

export const StyledCross = styled(CrossIcon)<StyledCrossProps>`
    box-sizing: border-box;
    position: absolute;
    right: ${ pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    height: 15px;
`;