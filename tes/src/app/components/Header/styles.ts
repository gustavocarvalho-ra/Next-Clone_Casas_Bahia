import styled from "styled-components";

export const He = styled.div `
  width: 100vw;
  height: 96px;
  display: grid;
  align-items: center;
  grid-template-columns: 200px auto 310px;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 8px;
  background: #F7F7F7;

  .Cab {

    a {
      font-size: 12px;
      margin: 0 25px 0 0;
      text-decoration: none;
      color: #0033c6;
    }
  }

  p {
    color: yellow;
  }
`