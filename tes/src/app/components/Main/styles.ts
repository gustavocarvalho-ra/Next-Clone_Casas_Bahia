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

  .min {
    width: 68vw;
    height: 110vh;
    display: flex;
    flex-wrap: wrap;
    background: red;
    margin-top: 35px;


    .colu {
      width: 16%;
      background: yellow;

      .col {
        margin-left: 13px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        h2 {
          font-size: 13px;
          color: #0033c6;
          margin-bottom: 22px;
        }
        p {
          color: #575757;
          font-size: 13px;
          line-height: 15px;
          margin-bottom: 22px;
        }
      }
    }
  }
`