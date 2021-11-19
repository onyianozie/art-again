function PieceOfArt(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.imagePath} alt={props.alt}/>
        </div>
    )
}

export default PieceOfArt;

//P