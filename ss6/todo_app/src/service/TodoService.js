import axios from "axios";

export async function getTodoList(){
    const res =  await axios.get('http://localhost:8080/toDoList');
    return res.data;
}


export async function createTodo(task){
    await axios.post('http://localhost:8080/toDoList', task);

}

