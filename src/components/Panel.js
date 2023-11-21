import { Button } from './button';
import { useState } from 'react';
import { Screen } from './screen';
import {ColorButton } from './ColorButton';
 function Panenl() {


    const heKey = '-/?קראטוןםפשדגכעיחלךףזסבהנמצתץ'.split("");
    const enKey = 'qwertyuiopasdfghjklzxcvbnm,./-'.split("");
    const [he, setLan] = useState(true);
    const [text, setText] = useState("");

    const colorsStile = [ {color: "blue"}, {color: "green"}, {color: "yellow"}];
    const [colorState, setColorState] = useState(colorsStile[0]);

    return (<>
        <Screen myText={text} styles={colorState} />

     
        <div className='keysCont'>
        {
        he == true ? heKey.map((key) => <Button className="keysStyle" char={key} addLetter={() => setText(text + key)}
        />)
            : enKey.map((key) => <Button char={key} addLetter={() => setText(text + key)} />)}
           
        <button type='button' className="navStyle" onClick={() => { setText(text + " ") }}>Space</button>
        
        <button type='button'  className="navStyle"onClick={() => { setColorState(colorsStile[0]) }} > Blue  </button>
        <button type='button'  className="navStyle"onClick={() => { setColorState(colorsStile[1]) }} > Green </button>
        <button type='button'  className="navStyle"onClick={() => { setColorState(colorsStile[2]) }} > Yellow </button>
        
        <button type='button' className="navStyle"onClick={() => { setLan(false) }} > En </button>
        <button type='button' className="navStyle" onClick={() => { setLan(true) }}> עברית</button>
       
        <button type='button' className="navStyle" onClick={() => { setText("") }}>Cleer all</button>
        
        <button type='button' className="navStyle" onClick={() => { setText(text.slice(0,-1)) }}>Delete</button>
        <button type='button' className="navStyle" onClick={() => { setText(text.toUpperCase()) }}>ToLowerCase</button>
        
        </div>
    </>
    )

}
 export default Panenl;

