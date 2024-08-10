export default function App() {
    function filtrarDisponiveis(){
        const produtosDisponiveis= produtos.filter((elemento)=>elemento.disponivel);
        return produtosDisponiveis;
      }
      
      const produtos = [ 
        { nome: "Laptop", disponivel: true }, 
        { nome: "Tablet", disponivel: false }, 
        { nome: "Smartphone", disponivel: true } 
        ];
      
      let produtosDisponiveis = filtrarDisponiveis(produtos);
      console.log(produtosDisponiveis)
    return (
        <div>Hello World</div>
    )
}