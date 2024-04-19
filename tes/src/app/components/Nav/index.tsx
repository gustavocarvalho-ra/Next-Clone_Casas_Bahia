import { NaV } from "./styles";

import { RiMenuFill } from "react-icons/ri";


export default function Nav() {
  return (
    <NaV>
      <div className="blu">
        <div className="nav">
          <RiMenuFill style={{position: 'absolute'}}/><button>Compre por departamentos</button>
          <div className="a">
            <a href="/">Telefonia</a>
            <a href="/">Eletrodomésticos</a>
            <a href="/">TVs e Vídeo</a>
            <a href="/">Móveis</a>
            <a href="/">Eletroportáveis</a>
            <a href="/">Informática</a>
            <a href="/">Serviços</a>
            <a href="/">Carnê Digital</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="sas">
        <a href="/">Cupom</a>
        <a href="/">Ofertas da TV</a>
        <a href="/">Retira Rápida</a>
        <a href="/">Portal do Carnê</a>
        <a href="/">Baixe o APP</a>
        <a href="/">banQi</a>
        <a href="/">Venda seus produtos</a>
        <a href="/">Vip</a>
      </div>
    </NaV>
  )
}