import { Injectable } from "@angular/core";

export interface ToDo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn:'root'})
export class TodosService {
  public todos: ToDo[] = [
    {id:1,title:'Buy a bread',completed:false, date: new Date()},
    {id:2,title:'Buy a milk',completed:true, date: new Date()},
    {id:3,title:'Buy a butter',completed:false, date: new Date()}
  ]

  onToggle(id: number) {
    const index = this.todos.findIndex(t=>t.id===id)
    this.todos[index].completed = !this.todos[index].completed
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(x=>x.id !== id)
  }

}
