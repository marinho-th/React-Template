export default function App() {
    function verificarEstoque(produtos,qtd){
        let qtdPositivo = produtos.filter(produto=>produto.quantidadeEmEstoque>qtd);
        return qtdPositivo;
      }
      
      
      
      const produtos = [ 
      
      { nome: "Laptop", quantidadeEmEstoque: 5 }, 
      { nome: "Tablet", quantidadeEmEstoque: 0 }, 
      { nome: "Smartphone", quantidadeEmEstoque: 3 } 
      ];
      let estoqueVerificado = verificarEstoque(produtos,0);
      console.log(estoqueVerificado);
    
    return (
        <div>Hello World</div>
    )
}