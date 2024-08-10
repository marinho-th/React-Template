
export default function ListaTarefas() {
    const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];
    return (
      <ol>
        {tarefas.map((elemento,index)=> <li key={index}>{elemento}</li>)}
        
      </ol>
    )
  }