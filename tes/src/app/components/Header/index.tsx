import { He } from "./styles"

import { FaRegCommentDots } from "react-icons/fa6";
import { CiMapPin } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaHandPaper } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";




export default function Header() {
  return (
    <He>
      <p> </p>
      <div className="cab">
        <FaRegCommentDots style={{fontSize:'15px', color:'#0033c6'}}/> <a href="/"> Chama no Zap</a>
        <CiMapPin style={{fontSize:'15px', color:'#0033c6'}}/> <a href="/"> Encontre uma loja</a>
        <IoIosCall style={{fontSize:'15px', color:'#0033c6'}}/> <a href="/"> Atendimento</a>
        <FaHandPaper style={{fontSize:'15px', color:'#0033c6'}}/> <a href="/"> Tradutor para Libras</a>
      </div>

      <div className="pre">
        <CiGift style={{fontSize:'16px', color:'#0033c6'}}/> <a href="/">Lista de presentes</a>
        <IoCardOutline style={{fontSize:'16px', color:'#0033c6'}}/> <a href="/">Cartão Casas Bahia</a>

      </div>
      <p style={{color: 'red'}}>aaaa</p>
    </He>
  );
}