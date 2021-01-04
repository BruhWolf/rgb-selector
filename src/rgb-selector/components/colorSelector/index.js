import React, {useEffect, useState } from "react"
import {RiAddLine} from 'react-icons/ri'
import {RiSubtractLine} from 'react-icons/ri'
import './styles.css'
const ColorSelector = ({onChange,type,fontColor}) =>{
    
    const alpha = 100
    const [color,setColor] = useState(255)

    useEffect(()=>{ 
        switch (type){
            case "alpha":
                if ( color < 0 ){ setColor(0); onChange(0) }
                else if ( color > alpha ){ setColor(alpha)}
                else {setColor( color); onChange( color)}
            break

            case "rgb":
                if( color < 0 ) { setColor(0); onChange(0) }
                else if( color > 255 ){ setColor(255); onChange(255)}
                else{ setColor(color);onChange(color)}
            break
            default: console.log('this selector prop type does not exist')
        }
    },[color,type,onChange])

    
function decrement(){
        var newColor = parseInt(color) -1
        setColor(newColor)
}
function increment(){
        var newColor = parseInt(color) +1 
        setColor(newColor)
}
    switch (type){
        case "rgb":
            console.log('rendering RGB')
            return (    <div id="pai">
                            <div className="selector">
                                <button className="decrement"
                                        onClick={decrement}
                                        style={{color: `${fontColor}`}}
                                >
                                    < RiSubtractLine id="svg" />                    
                                </button>
                                <input  className="number"     
                                        type="number"
                                        min="0"
                                        max="255"   
                                        style={{color: `${fontColor}`}}  
                                        value={color} 
                                        onChange={e=>{setColor(  e.target.value )}}
                                />
                                <button className="increment"  
                                        onClick={increment}      
                                        style={{color: `${fontColor}`}} 
                                >
                                    <RiAddLine id="svg"/>
                                </button>
                                <input  className="range"
                                        type="range"
                                        min="0"
                                        max="255"
                                        value={color}
                                        onChange={e=>{setColor(parseInt(e.target.value))}}
                                />
                            </div>
                        </div>
                    )
        case "alpha":     
            return  ( <div id="pai">
                            <div className="selector_alpha">
                                <button className="decrementA" 
                                        onClick={decrement} 
                                        style={{color: `${fontColor}`}}
                                >       
                                <RiSubtractLine  id="svg"/>
                                </button>
                                 <input className="alpha"
                                        type="number"
                                        min="0"  max="100"
                                        step=".001"
                                        value={(color/alpha)}
                                        style={{color: `${fontColor}`}}
                                        onChange={e=>{setColor(e.target.value*alpha)}}
                                />
                                <button className="incrementA"
                                        style={{color: `${fontColor}`}}
                                        onClick={increment} 
                                >
                                <RiAddLine  id="svg"/>
                                </button>
                                <input  className="range"
                                        type="range"
                                        min="0"
                                        max="1"
                                        step=".01"
                                        value={(color/100)}
                                        onChange={e=>{setColor(e.target.value*100)}}
                                />
                                </div>
                        </div>
                    )
            
        default: console.log('this selector prop type does not exist')
    }
} 

export default ColorSelector

