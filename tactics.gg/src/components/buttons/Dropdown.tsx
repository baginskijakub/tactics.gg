import React, {useState} from 'react'
import './buttons.css'
import {DropdownButton} from './DropdownButton'

interface Props{
    name: string;
    values: string[]
    defaultValue: string
}

export const Dropdown:React.FC<Props> = ({name, values, defaultValue}) => {
    const[selected, setSelected] = useState(defaultValue)

    //false represents closed, true => open
    const[state, setState] = useState(false)

    function handleOpen(){
        if(state === false){
            setState(true)
        }
        else{
            setState(false)
        }
    }
    return (
        <div className="dropdown-wrapper" onClick={handleOpen}>
            <div className="dropdown-name">
                <p className="body">{name}</p>
            </div>
            <div className="dropdown-value-container">
                <div className="dropdown-value">
                    <p className="body">{selected}</p>
                </div>
                {state && <div className="dropdown-buttons-container">
                    {values.map((element) => {
                        if(element === selected){
                            return (
                                <DropdownButton
                                    text={element}
                                    size="big"
                                    isSelected={true}
                                    fn={() => {}}
                                />
                            )
                        }
                        return (
                            <DropdownButton
                                text={element}
                                size="big"
                                fn={() => setSelected(element)}
                            />
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Dropdown
