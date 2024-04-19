import { He } from "./styles"

import { FaRegCommentDots } from "react-icons/fa6";
import { CiMapPin } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaHandPaper } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { LiaUserAltSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


export default function Header() {
  return (
    <He>
      <div className="grid" style={{margin: '8px 0 12px 0'}}>
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

        <div className="logo">
          <a href="/">CASAS<span>BAHIA</span></a>
        </div>

        <div className="inp">
          <button><IoMdPin style={{fontSize:'14px'}}/> Informe seu CEP</button>
          <div className="sea">
            <input type="text" placeholder="O que você está procurando?" /><FaSearch style={{fontSize:'24px', marginRight: '25px'}}/>
          </div>
        </div>
        
        <div className="user">
          <LiaUserAltSolid style={{fontSize:'60px', marginLeft: '20px', color:'#0033c6'}}/>
          <div className="cad">
            <span className="first">Entre ou cadastre-se</span> <br/>
            <span>para ver seus pedidos</span>
          </div>
          <CiHeart style={{fontSize:'54px', marginLeft: '26px', color:'#0033c6'}}/>
          <IoCartOutline style={{fontSize:'54px', marginLeft: '4px', color:'#0033c6'}}/>
        </div>
      </div>
    </He>
  );
}