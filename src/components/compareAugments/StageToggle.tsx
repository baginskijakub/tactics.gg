import React, {useState} from 'react'
import './compare.css'

interface Props{
    stateChange: (value: string) => void
}

export const StageToggle:React.FC<Props> = ({stateChange}) => {
    const[selected, setSelected] = useState("All")

    function handleSelect(value: string){
        stateChange(value)
        setSelected(value)
    }


  return (
    <div className='toggle-wrapper'>
        <h4>Stage</h4>
        <div className='toggle-container'>
            <div className={selected === "All" ? 'toggle-button-selected' : 'toggle-button'} onClick={() => handleSelect("All")}>
                <p className='body'>All</p>
            </div>
            <div className={selected === "2-1" ? 'toggle-button-selected' : 'toggle-button'} onClick={() => handleSelect("2-1")}>
                <p className='body'>2-1</p>
            </div>
            <div className={selected === "3-2" ? 'toggle-button-selected' : 'toggle-button'} onClick={() => handleSelect("3-2")}>
                <p className='body'>3-2</p>
            </div>
            <div className={selected === "4-2" ? 'toggle-button-selected' : 'toggle-button'} onClick={() => handleSelect("4-2")}>
                <p className='body'>4-2</p>
            </div>
        </div>
    </div>
  )
}