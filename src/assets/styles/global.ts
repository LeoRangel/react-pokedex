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

    // Spacing
    --spacing-1: .75rem;
    --spacing-2: 1rem;
    --spacing-3: 1.5rem;
    --spacing-4: 3rem;
    --spacing-5: 3.75rem;

    // Padding
    --pd-container: var(--spacing-5) var(--spacing-3);

    // Radius
    --border-radius-1: .45rem;
    --border-radius-2: .65rem;

    // Shadow
    --shadow-1: 0 .5rem 1rem rgba(0,0,0,.15)!important;

    // Transition
    --bg-transition: background .5s;

    @media (max-width: 768px) {
      /* Padding */
      --pd-container: var(--spacing-4) var(--spacing-3);
    }
  }

  [data-theme="dark"] {
    // Color
    --gray-1: #F0F0F0;
    --gray-2: #D7D7D7;
    --gray-3: #BDBDBD;
    --gray-4: #89898A;
    --gray-5: #222224;
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
    background-color: var(--gray-5);
    position: relative;
    overflow-x: hidden;
    transition: var(--bg-transition);
  }
`;
