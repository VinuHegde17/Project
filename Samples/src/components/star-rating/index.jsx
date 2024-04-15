export default function Rating(noOfStars=5){
    return(
       <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                
            })
        }
       </div> 
    )
}