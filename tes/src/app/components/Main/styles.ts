import styled from "styled-components";

export const MaiN = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 55px;

  .htt {
    width: 66vw;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 15px 20px 0 0;
    gap: 8px;
    margin-bottom: 10px;

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
    /* background: red; */
    margin-top: 35px;


    .colu {
      width: 16%;
      /* background: yellow; */
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .col {
        display: flex;
        margin-left: 13px;
        flex-direction: column;
        align-items: flex-start;
        h2 {
          font-size: 13px;
          color: #0033c6;
          margin-bottom: 24px;
        }
        p {
          color: #575757;
          font-size: 13px;
          line-height: 15px;
          margin-bottom: 24px;
        }
        button {
          background: #0033c6;
          font-size: 16px;
          color: #fff;
          border: none;
          width: 12em;
          height: 44px;
          border-radius: 6px;
          cursor: pointer;
          transition: .7s;

          &:hover {
            background: #002286;
          }
        }
      }

      .flt {
        margin-top: 25px;
        margin-left: 13px;
        width: 10vw;
        height: 80vh;
        border: 1px solid #575757;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-left: 7px;

        button {
          height: 44px;
          color: #575757;
          font-size: 16px;
          font-weight: 700;
          margin-top: 10px;
          border: transparent;
          cursor: pointer;
        }

        .fri {
          width: 160px;
          height: 44px;
          display: flex;
          align-items: center;
          a {
            color: #575757;
            font-size: 12px;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
        .exe {
          display: flex;
          flex-direction: column;
          a {
            width: 160px;
            height: 44px;
            color: #575757;
            font-size: 12px;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
          .clas {
            font-weight: 900;
          }
        }
      }
    }
  }
`