
let option = prompt("Escoge una opción");
const todoList = [];

while(option !== "quit"){
  
    if(option === "new"){
        const newTodo = prompt("Agrega una nueva tarea")
        todoList.push(newTodo)
        console.log(
            `${newTodo} agregado a la lista`
        )
        
    }
    else if(option==="list"){
        for(todos of todoList){
            console.log( `${todoList.indexOf(todos)} ${todos}`)
        } 
    }
    else if(option === "delete"){
        option = "";
        const deleted = parseInt(prompt("Borra una tarea"));
        todoList.splice(deleted, 1)

        console.log(`Deleted ${deleted} sucessful`)
       
    }
    option = prompt("Escoge una opción");
    
}
console.log("OK YOU QUIT THE APP")


