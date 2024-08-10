

export default function App() {
    function calcularPrecoTotal(preco,qtde){
        return preco * qtde;
      }
      
      let preco = Number(prompt("Digite o preço do produto: "));
      let qtde = Number(prompt("Digite a quantidade do produto: "));
      let precoTotal = calcularPrecoTotal(preco,qtde);
      console.log(precoTotal);
    return (
        <div>Hello World</div>

    )
}