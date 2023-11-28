export default function Button(props) {
    return(
        <Button className={'btn ${props.disabled ? "disabled":"" }'} 
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.text}
        </Button>
        
    )
;
}