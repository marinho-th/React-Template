import img1 from "./executiva.jpg"
import "./CartaoPerfil.css"

export default function CartaoPerfil() {
    return(
        <div className="perfil">
            <h1>Nome do usuário: Thiago Marinho</h1>
            <p>Descrição: Estudante de Engenharia de Software, com conhecimentos em HTML, CSS e Javascript. Formado em Engenharia de Produção, com ampla experiência em Gerenciamento de Projetos e Operação no segmento de Telecom</p>
            <img className="imagem-de-perfil" src={img1}/>
        </div>
    )
}


