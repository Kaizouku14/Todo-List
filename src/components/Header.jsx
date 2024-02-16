import React, { useState } from 'react';
import "../style/Header.css";

const Header = ({ transferData }) => {
    const [value, setValue] = useState('')
    const [changeTheme, setChangeTheme] = useState('icons8-light-mode-78.png')
    const [toggleTheme, setToggleTheme] = useState(false)

    const handleInput = (event) => {
        const inputValue = event.target.value
        setValue(inputValue)
    }

    const handleSubmit = () => {
        if (value.trim() !== '') {
            transferData(value)
            setValue('')
        }
    }

    const handleTheme = () => {
      const setTheme = document.body

      if(!toggleTheme){
        setTheme.classList.add('light-mode')
        setChangeTheme('icons8-dark-mode-30.png')
        setToggleTheme(true)
      }else{
        setTheme.classList.remove('light-mode')
        setChangeTheme('icons8-light-mode-78.png')
        setToggleTheme(false)
      }
       
    }

    return (
        <header>
            <h2>To-Do List</h2>
            <img className="theme" src={changeTheme} alt="darkmode" onClick={handleTheme}/>
            <p>Create your task here.</p>

            <div className="task-input">
                <input type="text"
                    placeholder="Enter task here."
                    value={value}
                    onChange={handleInput} />
                <button onClick={handleSubmit}>+</button>
            </div>
        </header>
    );
}

export default Header;
