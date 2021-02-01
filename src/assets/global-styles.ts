import { colors } from './index';
import { createGlobalStyle } from 'styled-components';
import './fonts/styles.css';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
export const theme = {
    colors
}
