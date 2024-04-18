import styled from "styled-components";

export const He = styled.div `
  width: 100vw;
  height: 96px;
  display: grid;
  align-content: center;
  grid-template-columns: 475px auto 585px;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 8px;
  background: #F7F7F7;
  


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
    font-size: 30px;
    a {
      font-weight: 700;
      text-decoration: none;
      color: #0033c6;
    }

    span {
      font-weight: 300;
      color: red;
    }
  }


`