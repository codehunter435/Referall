import "./../style/LinkContent.css"
function LinkContent({image ,link}){
    return(
        <div className="content-item"  onClick={()=>{
            window.location = link
        }}>
            <div className="image-back"></div>
            <div className="image" style={{backgroundImage : `url(${image})`}}></div>
        </div>
    )
}
export default LinkContent