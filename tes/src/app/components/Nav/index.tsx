import { NaV } from "./styles";

import { RiMenuFill } from "react-icons/ri";


export default function Nav() {
  return (
    <NaV>
      <div className="container">
        <div className="nav">
          <RiMenuFill /><button>Compre por departamentos</button>
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
    </NaV>
  )
}