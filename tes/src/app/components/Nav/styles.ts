import styled from "styled-components";

export const NaV = styled.div`
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
    /* justify-content: space-between; */

    button {
    margin-right: 45px;
      border: none;
      background-color: transparent;
      color: #fff;
      
    }
    .a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 55px;
      a {
        color: #fff;
        
      }
    }
  }
  hr {
    border: 2px solid;
    color: red;
  }
`