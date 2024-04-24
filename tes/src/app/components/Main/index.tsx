import { MaiN } from "./styles";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Main() {

  const divProd = document.querySelector("#const")

  fetch("produtos.json").then((response) => {
      response.json().then((dados) => {
        dados.produtos.map((produto: { nome: string; preco: number; }) => {
          divProd?.innerHTML += `<h3> ${produto.nome} <h3>
          <h2>${produto.preco}<h2>`
        })
      })
    })

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
          <div className="sort">
            <p><strong>295</strong> produtos encontrados</p>
            <label htmlFor="">
              <span>Ordenar por</span>
              <div>Mais vendidos <FaLongArrowAltDown style={{marginLeft: '8px'}}/></div>
            </label>
          </div>
          <div id="const">
            <div className="card">
              <img src="" alt="aa" />
              <h3>aspirador</h3>
              <h2>R$164,90</h2>
            </div>
          </div>
        </div>
      </div>
    </MaiN>
  )
}