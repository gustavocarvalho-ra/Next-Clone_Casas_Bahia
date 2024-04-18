import styled from "styled-components";

export const He = styled.div `
  width: 100vw;
  height: 96px;
  background: #F7F7F7;
  margin: 0 200px;

  .grid {
    height: 96px;
    margin: 0 0 16px;
    display: grid;
    align-content: center;
    grid-template-columns: 250px 826px auto;
    grid-template-rows: repeat(2, 1fr);
    column-gap: 10px;
  }

  .cab {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      color: #0033c6;
      font-size: 12px;
      margin: 0 25px 0 0;
      text-decoration: none;
      margin-left: 3px;
    }
  }

  .pre {
    display: flex;
    align-items: center;

    a {
      color: #0033c6;
      font-size: 12px;
      margin: 0 25px 0 0;
      text-decoration: none;
      margin-left: 5px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    font-size: 28px;
    a {
      font-family: sans-serif;
      font-weight: 900;
      text-decoration: none;
      color: #0033c6;
    }

    span {
      font-weight: 600;
      color: red;
    }
  }

  .inp {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    button {
      width: 140px;
      height: 48px;
      color: #0033c6;
      font-size: 12px;
      background: #fff;
      border-radius: 5px;
      border: .1px solid #dfdfdf;
      cursor: pointer;
    }
  }

  .sea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 620px;
    height: 48px;
    background: #fff;
    border-radius: 5px;
    border: .1px solid #dfdfdf;
    padding: 0 0 0 24px;
    margin-left: 40px;

    input {
      width: 480px;
      height: 48px;
      color: #0033c6;
      font-size: 14px;
      border: none;
      background: transparent;
    }
  }

`