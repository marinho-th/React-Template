import "./CartaoProduto.css"

export default function CartaoProduto(props){
    return(
        <div className="card">
            <img src={props.imagem} alt ={props.nome}/>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <p>{props.preco}</p>
        </div>
    )
}