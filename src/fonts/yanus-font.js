import {
    createGlobalStyle
} from "styled-components";

import Yanus from "./Yanus.woff";
import Yanus2 from "./Yanus.woff2";

export default createGlobalStyle `
    @font-face {
        font-family: 'Yanus';
        src: local('Yanus'), local('FontName'),
        url(${Yanus}) format('woff'),
        url(${Yanus2}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }
`;