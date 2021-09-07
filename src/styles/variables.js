import { css } from "styled-components"

const variables = css`
  :root {
    --black: #050505;
    --black-shadow: #0a1d37;
    --white: #ffffff;
    --green: #00df9a;
    --blue: #00adff;
    --grey: #2c3643;
    --green-hover: #00dea1;
    --red-dark: #fc5664;
    --yellow-dark: #ffc371;
    --navy: #16213e;

    --font-roboto: "Roboto", sans-serif;
    --font-lato: "Lato", sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-vl: 28px;
    --fz-heading: 32px;

    --navbar-height: 70px;

    //transition
    --transition: all 0.5s ease;
    --cubic: cubic-bezier(0.06, 0.07, 0.03, 1);

    //border-radius
    --border-radius: 6px;

    //box-shadow
    --button-shadow: 0px 3px 4px 3px var(--black-shadow);
    --button-shadow-click: 0px 0px 4px 0px var(--black-shadow);
  }
`

export default variables
