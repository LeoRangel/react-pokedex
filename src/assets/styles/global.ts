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
    --spacing-1: .25rem;
    --spacing-2: .5rem;
    --spacing-3: .75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.5rem;
    --spacing-6: 3rem;
    --spacing-7: 3.75rem;

    // Padding
    --pd-container: 0 var(--spacing-5);

    // Radius
    --border-radius-1: .45rem;
    --border-radius-2: .65rem;
    --border-radius-3: 1rem;

    // Shadow
    --shadow-1: 0 .5rem 1rem rgba(0,0,0,.15)!important;

    // Transition
    --bg-transition: background .5s;
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

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  .fadeIn { animation: fadeIn .2s both; }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .fadeInLeft { animation: fadeInLeft .5s both; }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .fadeInRight { animation: fadeInRight 1.5s both; }

  @keyframes spinner {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
  .spinner { animation: spinner 5s linear infinite; }
`;
