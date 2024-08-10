export default function App() {
    function calcularMediaAvaliacoes (numeros) {
        const total = numeros.reduce((soma,numero)=>soma+numero.nota,0);
        return total/numeros.length;
      }
      
      
      const numeros = [
          {produto: '1',nota:7 },
          {produto: '1',nota:4},
          {produto: '1',nota:6}
      ]
      
      let media = calcularMediaAvaliacoes(numeros);
      console.log(media);
    return (
        <div>Hello World</div>
    )
}