import { createGlobalStyle } from "styled-components";
import RalewayRegular from "../assets/fonts/Raleway/static/Raleway-Regular.ttf";
import RalewayBold from "../assets/fonts/Raleway/static/Raleway-Bold.ttf";
import RalewaySemibold from "../assets/fonts/Raleway/static/Raleway-SemiBold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Raleway-Regular';
    src: url(${RalewayRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway-SemiBold';
    src: url(${RalewaySemibold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway-Bold';
    src: url(${RalewayBold});
    font-style: normal;
  }
  html,p{
    font-family: 'Raleway-Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Raleway-Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Raleway-Bold'
  }
  
`;

export default Typography;
