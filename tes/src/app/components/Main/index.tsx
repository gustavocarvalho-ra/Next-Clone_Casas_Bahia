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
              <a href="/">Liquidificadores <span>(29)</span></a>
              <hr />
              <a href="/" className="clas">Aspiradores e Acessórios</a>
              <a href="/">Aspirador de pó <span>(16)</span></a>
              <a href="/">Aspirador Água e Pó <span>(11)</span></a>
              <hr />
              <a href="/" className="clas">Batedeiras</a>
              <a href="/">Batedeira <span>(6)</span></a>
              <a href="/">Planetária <span>(6)</span></a>
              <hr />
              <a href="/" className="clas">Cafeteiras</a>
              <a href="/">Cafeteiras Expresso <span>(2)</span></a>
              <a href="/">Cafeteiras Elétricas <span>(16)</span></a>
              <a href="/">Cafeteiras Dolce Gusto <span>(5)</span></a>
              <a href="/">Nespresso <span>(7)</span></a>
              <a href="/">Cafeteiras TRES <span>(6)</span></a>
              <hr />
              <a href="/" className="clas">Ferro de Passar</a>
            </div>
          </div>
        </div>
        <div className="sec">
          
        </div>
      </div>
    </MaiN>
  )
}