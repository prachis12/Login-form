function handleSubmit(e){
    e.preventDefault();

    }
  


function ToDoList(){
    return(
        <><form onSubmit={handleSubmit}>
         
            <div>
                <label htmlFor="">Enter task name: </label>
                <input type="text" name="" id=""/>
            </div>
           < button  type="submit">Add Task</button>
            </form></>
        
    )
}

export default ToDoList;