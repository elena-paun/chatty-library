import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../assets/sizes";
import { ButtonType } from "./button";

type StateColors = {
    regular: string;
    hover: string;
}
// ['#ffc973', '#ff9b71', '#b692fe', '#01d4ff', '#e4ee90']
const typeColors: {[key in ButtonType]: StateColors} = {
    primary: {
        regular: 'rgb(68, 121, 252)',
        hover: 'rgb(38, 99, 249)',
    },
    secondary: {
        regular: 'rgb(24, 48, 79)',
        hover: '#3d3d3d',
    },
    accent: {
        regular: 'rgb(40, 229, 252)',
        hover: 'rgb(40, 229, 260)',
    },
    decorative: {
        regular: 'rgb(243, 65, 169)',
        hover: '#3d3d3d',
    },
    success: {
        regular: 'rgb(18, 206, 157)',
        hover: '#3d3d3d',
    },
    alert: {
        regular: 'rgb(255, 193, 18)',
        hover: '#3d3d3d',
    },
    error: {
        regular: 'rgb(210, 18, 18)',
        hover: '#3d3d3d',
    },
    active: {
        regular: '#01d4ff',
        hover: '#2e27cc',
    },
    progress: {
        regular: '#01d4ff',
        hover: '#2e27cc',
    },
    danger: {
        regular: '#ff9b71',
        hover: '#eb4d5d',
    },
    ghost: {
        regular: 'transparent',
        hover: '#dbdbdb',
    }
};

interface StyledButtonProps {
    innerType: ButtonType;
    size: ComponentSize;
    withText: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    /* Add margin in case of loading or icon */
    & > *:nth-child(1) {
        margin-left: ${pr => pr.withText ? 7 : 0}px;
    }
    font-size: 15px;

    border: none;
    cursor: pointer;
    background-color: ${ (pr) => typeColors[pr.innerType].regular };
    padding: 0 ${ pr => sidePaddings[pr.size]}px;
    height: ${ pr => heights[pr.size]}px;
    color: ${ pr => pr.innerType === 'ghost' 
        ? typeColors['primary'].regular
        : '#fff'
    };
    ${ pr => pr.disabled ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    ` : ''}
    border-radius: 20px;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${(pr) => typeColors[pr.innerType].regular};
    }
    &:hover {
        background-color: ${ (pr) => typeColors[pr.innerType].hover };
    }
`;

export const StyledIcon = styled.div`
    height: 20px;
`;