import { He } from "./styles"

import { FaRegCommentDots } from "react-icons/fa6";
import { CiMapPin } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";


export default function Header() {
  return (
    <He>
      <p> </p>
      <div className="Cab">
        <a href=""><FaRegCommentDots style={{fontSize:'13px'}} /> Chama no Zap</a>
        <a href=""><CiMapPin style={{fontSize:'14px'}}/> Encontre uma loja</a>
        <a href=""><IoIosCall style={{fontSize:'14px'}}/> Atendimento</a>
        <a href="">Tradutor para Libras</a>
      </div>
      <p style={{color: 'yellow'}}>aaaa</p>
    </He>
  );
}