import {
    createGlobalStyle
} from "styled-components";

import BuMarkerWoff from "./bumarkerwoff.woff";
import BuMarkerWoff2 from "./bumarkerwoff2.woff2";

export default createGlobalStyle `
    @font-face {
        font-family: 'BuMarker';
        src: local('BuMarker'), local('FontName'),
        url(${BuMarkerWoff}) format('woff'),
        url(${BuMarkerWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;