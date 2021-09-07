import { css } from "styled-components"

const mixin = {
  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    color: var(--blue);
    &:hover,
    &:focus,
    &:active {
      color: var(--blue-hover);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--blue) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--blue);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  flex_between: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flex_start: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  flex_center: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flex_around: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  flex_column: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  greenButton: css`
    border: 3px solid transparent;
    border-image: linear-gradient(
      to right,
      var(--blue) 0%,
      var(--green-hover) 100%
    );
    border-image-slice: 1;
    background-color: var(--black);
    color: var(--white);
    font-size: var(--fz-md);
    font-family: var(--font-lato);
    line-height: 1;
    box-shadow: var(--button-shadow);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 0.7rem 1.3rem;
    transition: none;

    &:hover,
    &:focus,
    &:active {
      border-image: linear-gradient(
        to right,
        var(--yellow-dark) 0%,
        var(--red-dark) 100%
      );
      border-image-slice: 1;
      color: var(--white);
      outline: none;
      box-shadow: var(--button-shadow-click);
    }
  `,
  redButton: css`
    border: 3px solid transparent;
    border-image: linear-gradient(
      to right,
      var(--yellow-dark) 0%,
      var(--red-dark) 100%
    );
    border-image-slice: 1;
    background-color: var(--black);
    color: var(--white);
    font-size: var(--fz-md);
    font-family: var(--font-lato);
    line-height: 1;
    box-shadow: var(--button-shadow);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 0.7rem 1.3rem;
    transition: none;

    &:hover,
    &:focus,
    &:active {
      border-image: linear-gradient(
        to right,
        var(--green) 0%,
        var(--green-hover) 100%
      );
      border-image-slice: 1;
      color: var(--white);
      outline: none;
      box-shadow: var(--button-shadow-click);
    }
  `,
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy);
    }
  `,
}

export default mixin
