
function Gallery(props){
    return(
    <div>
        {props.data.medium}
        {props.data.objectBeginDate}
        {props.data.primaryImage ? <img className="primaryImage" src={props.data.primaryImage} alt={props.data.title} /> : "No Image!"}
    </div>
    )
}

export default Gallery