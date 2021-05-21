import React, { useEffect, useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {values} from 'mobx'
import { TodoContext } from './App'

type todoInterface = {
    id:number,
    name:string,
    done:boolean,
    priority: number
}


const TodoList = () => {
    const storeContext = useContext(TodoContext)
    
    
    return (
        <section>
            {
                storeContext.todos.map((todo:todoInterface) => (
                        <p key={todo.id}>{todo.name}</p>
                ))
            
            }
            <button className="py-1 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700" onClick={e => storeContext.addTodo(1,"test",1)}>Add</button>
        </section>
    )
}

export default observer(TodoList);