export default function App() {
    function filtrarPorCategoria(produtos,categEspecif){
        return produtos.filter(produto => produto.categoria === categEspecif);
      }
      
      const produtos = [ 
      
      { nome: "Laptop", categoria: "Eletrônicos" }, 
      { nome: "Camisa", categoria: "Roupas" }, 
      { nome: "Smartphone", categoria: "Eletrônicos" } 
      ];
      
      let categEspecif = filtrarPorCategoria(produtos, "Eletrônicos");
      console.log(categEspecif)
    return (
        <div>Hello World</div>
    )
}