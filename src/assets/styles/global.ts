import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    // Font
    --primary-font: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

    // Color
    --primary-color: 	#ee1515;
    --gray-1: #222224;
    --gray-2: #89898A;
    --gray-3: #BDBDBD;
    --gray-4: #D7D7D7;
    --gray-5: #F0F0F0;

    // Gap
    --gap-items-1: .75rem;
    --gap-items-2: 1rem;
    --gap-items-3: 1.5rem;
    --gap-items-4: 3rem;
    --gap-items-5: 3.75rem;

    // Padding
    --pd-container: var(--gap-items-5) var(--gap-items-3);

    // Radius
    --border-radius-1: .45rem;
    --border-radius-2: .65rem;

    // Shadow
    --shadow-1: 0 .5rem 1rem rgba(0,0,0,.15)!important;

    @media (max-width: 768px) {
      /* Padding */
      --pd-container: var(--gap-items-4) var(--gap-items-3);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-size: 16px;
    font-family: var(--primary-font);
    color: var(--gray-1);
    position: relative;
    overflow-x: hidden;
  }
`;
