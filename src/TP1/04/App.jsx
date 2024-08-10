export default function App() {
    function filtrarAcimaPreco(produtos,limite){
        const produtosFiltrados = produtos.filter(produto => produto.preco > limite);
        return produtosFiltrados;
      }
      
      const produtos = [ 
      { nome: "Laptop", preco: 1000 }, 
      { nome: "Tablet", preco: 400 }, 
      { nome: "Smartphone", preco: 1500 } 
      ];
      
      let resultAcima = filtrarAcimaPreco(produtos, 600);
      console.log(resultAcima);
    return (
        <div>Hello World</div>
    )
}