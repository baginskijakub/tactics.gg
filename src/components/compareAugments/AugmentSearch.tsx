import React, {useState, useEffect} from 'react'
import { DefaultSearch } from '../search/DefaultSearch'
import './compare.css'

interface Props{
    augments: {name: string, src: string}[]
    selectAugment: (name: string) => void
}

export const AugmentSearch:React.FC<Props> = ({augments, selectAugment}) => {
    const[searchedAugments, setSearchAugments] = useState<{name: string, src: string}[]>(augments)
    const[allAugments, setAllAugments] = useState<{name: string, src: string}[]>(augments)
    //false - closed, true - open
    const[suggestedState, setSuggestedState] = useState(false)

    function onInputChange(value: string){
        let tempSearchAugments:{name: string, src: string}[] = []
        if(value !== "" || value !== undefined){
            allAugments.forEach(augment => {
                if(augment.name.toLowerCase().includes(value.toLowerCase())){
                    tempSearchAugments.push(augment)
                }
            })
        }
        else{
            tempSearchAugments = allAugments
        }
        setSearchAugments(tempSearchAugments)
    }

    useEffect(() => {
        if (augments) {
          setSearchAugments(augments);
          setAllAugments(augments)
        }
      }, [augments])

    function onFocus(){
        setSuggestedState(true)
    }

    function onFocusOut(){
        setSuggestedState(false)
    }

    function onAugmentSelect(name: string){
        console.log(name)
        selectAugment(name)
        onFocusOut()
    }

  return (
    <div className='augment-search-container'>
        <DefaultSearch initialValue='Search Augment' inputChange={onInputChange} onFocus={onFocus} onFocusOut={onFocusOut}/>
        {suggestedState && <div className='augment-search-suggested-container'>
            {searchedAugments.map(augment => {
                return(
                    <div className='augment-search-suggested' onMouseDown={() => onAugmentSelect(augment.name)} >
                        <img src={augment.src} alt={augment.name}/>
                        <p className='body-small'>{augment.name}</p>
                    </div>
                )
            })}
        </div>}
    </div>
  )
}

export default AugmentSearch