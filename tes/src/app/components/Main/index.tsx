import { MaiN } from "./styles";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";

export default function Main() {
  return (
    <MaiN>
      <div className="htt">
        <span className="prim"><a href="/">casasbahia.com.br</a></span>
        <span>{'>'}</span>
        <span>Eletroportáteis</span>
      </div>
      <div className="titl">
        <h1>Eletroportáteis</h1>
      </div>

      <div className="min">
        <div className="colu">
          <div className="col">
            <h2>Filtros selecionados</h2>
            <p>
              <strong>Produto vendido por:</strong> <br />
              Vendido e entrege por  <IoMdClose style={{marginLeft: '35px', fontSize:'15px', cursor: 'pointer'}}/><br />
              Casas Bahia
            </p>
            <button>Limpar filtros</button>
          </div>

          <div className="flt">
            <button className="fl">Eletroportáteis <Image style={{marginLeft: '33px'}} src="/traco.svg" width={10} height={10} alt="Traço para fechar os filtros"/></button>
          </div>
        </div>
      </div>
    </MaiN>
  )
}