import { MaiN } from "./styles";

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
            <p>Produto vendido por:
              Vendido e entrege por
              Casas Bahia
            </p>
            <button>Limpar filtros</button>
          </div>
        </div>
      </div>
    </MaiN>
  )
}