import styled from "styled-components";

export const MaiN = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  /* margin-top: 55px; */
  height: 1500px;
  background: #FCFCFC;

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
        height: 1133px;
        border: 1px solid #9a9a9a;
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
        hr {
          width: 95%;
        }
        .fri {
          width: 180px;
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
          width: 180px;
          height: 660px;
          display: flex;
          flex-direction: column;
          a {
            width: 160px;
            height: 44px;
            color: #575757;
            font-size: 12px;
            text-decoration: none;
            display: flex;
            align-items: center;
            margin: 11px 0 12px 0;

            &:hover {
              text-decoration: underline;
            }
          }
          .clas {
            width: 180px;
            font-weight: 900;
          }
          
          span {
            font-weight: 700;
            margin-left: 5px;
            color: #0033c6;
          }
        }
      }
    }
    .sec {
      width: 84%;
      height: 100vh;
      padding: 0 0 0 24px;
      .sort {
        width: 100%;
        min-height: 40px;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #575757;
        margin-bottom: 24px;
        strong {
          margin-right: 8px;
        }
        label {
          display: flex;
          align-items: center;
          div {
            width: 140px;
            min-height: 45px;
            display: flex;
            align-items: center;
            padding: 12px;
            margin-left: 20px;
            border-radius: 4px;
            border: 1px solid #575757;
            cursor: pointer;
          }
        }
      }

      #const {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        gap: 24px;

        .card {
          width: 250px;
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #C0C0C0;
          transition: all .6s;
          background: #FCFCFC;

          &:hover {
            border: 1px solid #0033c6;
            box-shadow: 5px 6px 10px 0px #838383;;
            scale: 1.03;
          }
          img {
            width: 180px;
            height: 180px;
            margin-bottom: 20px;
          }
          h3 {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.02em;
            line-height: 150%;
            margin-bottom: 12px;
          }
          span {
            font-weight: 500;
            font-size: 12px;
            line-height: 140%;
            letter-spacing: 0.02em;
            margin-bottom: 20px;

            strong {
              font-weight: 900;
            }
          }
          h2 {
            margin-top: 16px;
            font-size: 20px;
            font-weight: 800;
            color: #0033c6;
          }
        }
      }
    }
  }
`