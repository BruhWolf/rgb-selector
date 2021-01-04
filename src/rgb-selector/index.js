import React, { useState } from 'react'
import ColorSelector from './components/colorSelector'
import './styles.css'

const RGBSelector = () => {

    const [ R, setR ] = useState(255)
    const [ G, setG ] = useState(255)
    const [ B, setB ] = useState(255)
    const [ A, setA ] = useState(100)
    

    const rgbTreshHold = 375
    const alphaTreshHold = 40
    const hexR = parseInt( ( R * (A/100)) + (255 * (1 - (A/100))), 0)
    const hexG = parseInt( ( G * (A/100)) + (255 * (1 - (A/100))), 0)
    const hexB = parseInt( ( B * (A/100)) + (255 * (1 - (A/100))), 0)
    const fontColor = (R + G + B) >= rgbTreshHold ? `rgba(0,0,0,.75)` : (A <= alphaTreshHold) ? `rgba(0,0,0,.75)` : `rgba(255,255,255,.9)`
    const Hexadecimal = `#${hexR.toString(16)}${hexG.toString(16)}${hexB.toString(16)}`;
    const RGB = `rgb(${hexR},${hexG},${hexB})`
    return<>
        <div className="RGB_Grid" style={{ backgroundColor:  `rgba(${R},${G},${B},${(A/100)})`}}>
            <div className="Title" style={{color:`${fontColor}`}}>
                <div className="Hex">
                    <h3 >{ `${Hexadecimal}`}</h3>
                    <h1>Hexadecimal</h1>
                </div>
                <div className="RGB">
                    <h3 >{RGB}</h3>
                    <h1>RGB</h1>
                </div>
                <div className="RGBA">
                    <h3>rgba( {R} , {G} , {B} , {A/100  } )</h3>
                    <h1>RGBA</h1>
                </div>
            </div>
            <div id="red">
                <ColorSelector    type="rgb"  fontColor={fontColor}  onChange={color=>setR(color)}/>
            </div>
            <div id="green">
                <ColorSelector  type="rgb"   fontColor={fontColor} onChange={color=>setG(color)}/>
            </div>
            <div id="blue" >
                <ColorSelector   type="rgb"   fontColor={fontColor} onChange={color=>setB(color)}/>
            </div>
            <div id="alpha" >
                <ColorSelector  type="alpha"  fontColor={fontColor} onChange={color=>setA(color)}/>
            </div>
        </div>
    </>
}
export default RGBSelector;