import styled from "styled-components";

export const NaV = styled.div`
  margin-top: 14px;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 48px;
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
`