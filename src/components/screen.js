export function Screen(props) {

    return(<pre
    
    className="screenStyle"
    style={props.styles}>
    {props.myText}
        </pre>)
}