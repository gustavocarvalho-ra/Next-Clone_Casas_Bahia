import styled from "styled-components";

export const MaiN = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .htt {
    width: 66vw;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 15px 20px 0 0;
    gap: 8px;

    span {
      font-size: 12px;
      color: #0033c6;
      font-weight: 700;


      a {
        text-decoration: none;
        color: #575757;
      }
    }
  }

  .titl {
    width: 67vw;
    margin-top: 4px;

    h1 {
      font-weight: 400;
      font-size: 28px;
      color: #0033c6;
    }
  }
`