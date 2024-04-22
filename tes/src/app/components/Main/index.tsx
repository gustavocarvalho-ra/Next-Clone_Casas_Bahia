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
            <div className="fri"><a href="/">Fritadeiras</a></div>
            <hr />
            <div className="exe">
              <a href="/" className="clas">Liquidificadores e Acessórios</a>
              <a href="/">Liquidificadores</a>
              <a href="/" className="clas">Aspiradores e Acessórios</a>
              <a href="/">Aspirador de pó</a>
              <a href="/">Aspirador Água e Pó</a>
              <a href="/" className="clas">Batedeiras</a>
              <a href="/">Batedeira</a>
              <a href="/">Planetária</a>
              <a href="/" className="clas">Cafeteiras</a>
              <a href="/">Cafeteiras Expresso</a>
              <a href="/">Cafeteiras Elétricas</a>
              <a href="/">Cafeteiras Dolce Gusto</a>
              <a href="/">Nespresso</a>
              <a href="/">Cafeteiras TRES</a>
              <a href="/" className="clas">Ferro de Passar</a>
            </div>
          </div>
        </div>
      </div>
    </MaiN>
  )
}