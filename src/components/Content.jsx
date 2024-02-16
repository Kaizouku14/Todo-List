import React, { useState , useEffect} from 'react'
import "../style/Content.css"

const Content = ({addedTask}) => {
    const [tasks, setTasks] = useState([])
    const [Ischecked, setIsChecked] = useState([])

    useEffect(() => {
        if (addedTask) {
            setTasks(prevTasks => [...prevTasks, addedTask])
            setIsChecked(prevTasks => [...prevTasks, false])
        }
    },[addedTask])

    const handleDelete = (valueToRemove) => {
         const newTasks = tasks.filter((item) => item !== valueToRemove)
         setTasks(newTasks)
    }

    const handleChecked = (index) => (event) => {
        const newIsCheckedList = [...Ischecked];
        newIsCheckedList[index] = event.target.checked;
        setIsChecked(newIsCheckedList);
    }

    return(
       <main>
         {tasks.length > 0 && (
            <div className="list">
                {tasks.map((task, index) => (
                    <div className="task" key={index}>
                        <input type="checkbox" className="accept" checked={Ischecked[index]} onChange={handleChecked(index)}/>
                        <div className="todo" style={{textDecoration : Ischecked[index] ? 'line-through': ''}}>{task}</div> 
                        <button className="delete-button" onClick={() => handleDelete(task)}>x</button>
                    </div>
                ))}
            </div>
         )}   
       </main>
    )
}

export default Content