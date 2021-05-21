import { getSnapshot, types } from "mobx-state-tree"

const Todo = types.model({
    id:types.number,
    name:types.string,
    done:false,
    priority: types.number
})
.actions(self => ({
    setName(newName:string) {
        self.name = newName
    },
    toggle(){
        self.done = !self.done
    },
    setPriority(newPriority:number){
        self.priority = newPriority
    }
}))

const User = types.model({
    name:types.string
})

//creating the model of the main store
const RootStore = types.model({
    users: types.array(User),
    todos: types.optional(types.array(Todo),[])
})
.actions(self => ({
    addTodo(priority:number,name:string,id:number){
        self.todos.push(Todo.create({id,name,priority}))
    }
}))

// creating the instance of the RootStore model
export const store = RootStore.create({
    users: []
})

