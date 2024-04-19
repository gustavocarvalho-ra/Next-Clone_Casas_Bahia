import styled from "styled-components";

export const NaV = styled.div`
  margin-top: 14px;

  .blu {
    width: 100vw;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0033c6;
  }

  .nav {
    color: #fff;
    display: flex;
    align-items: center;

    button {
      width: 200px;
      height: 48px;
      margin: 0 45px 0 16px;
      border: none;
      background-color: transparent;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }

    .a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 55px;
      a {
        font-size: 15px;
        color: #fff;
        text-decoration: none;
      }
    }
  }
  hr {
    border: 2px solid;
    color: red;
  }

  .sas {
    width: 100vw;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 118px;

    a {
      font-size: 12px;
      text-decoration: none;
      color: #0033c6;
      font-weight: 400;
    }
  }
`