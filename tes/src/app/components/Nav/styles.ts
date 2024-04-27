import styled from "styled-components";

export const NaV = styled.div`
  margin-top: 14px;

  .blu {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0033c6;
  }

  .nav {
    width: 1400px;
    color: #fff;
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 44px;
    }

    button {
      width: 250px;
      height: 48px;
      margin: 0 30px 0 16px;
      border: none;
      background-color: transparent;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }

    .a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 55px;
      a {
        font-size: 15px;
        color: #fff;
        text-decoration: none;
        border-radius: 8px;
        transition: .5s;

        &:hover {
          background: #DB352D;
        }
      }
    }
  }
  hr {
    border: 2px solid;
    color: red;
  }

  .sas {
    width: 100%;
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