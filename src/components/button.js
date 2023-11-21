export function Button({char,addLetter}){

return(

    <button type="botton" className="keyStyle" value={char}
    onClick={addLetter}
    >{char}  </button>
)

}