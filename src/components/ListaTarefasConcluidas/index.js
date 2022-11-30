import React from 'react'
import { TarefaConcluida } from './styled';

function ListaTarefasConcluidas(props) {

    const completas = props.completas;
  return (
    <div>
     <ul>
        {completas.map((tarefaConcluida)=>{
            return (
                <TarefaConcluida>{tarefaConcluida}</TarefaConcluida> 
            )
        })}
     </ul>
    </div>
  )
}

export default ListaTarefasConcluidas
