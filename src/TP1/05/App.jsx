export default function App() {
    function encontrarProdutoPorNome(produtos,produtoEscolhido){
        let produtoFiltrado = produtos.find(produto=>(produto.nome==produtoEscolhido))
        return produtoFiltrado
      }
      
      const produtos = [ 
      { nome: "Laptop", preco: 1000 }, 
      { nome: "Tablet", preco: 400 }, 
      { nome: "Smartphone", preco: 1500 } 
      ];
      
      let produtoEncontrado = encontrarProdutoPorNome(produtos,"Laptop");
      console.log(produtoEncontrado)
    return (
        <div>Hello World</div>
    )
}