import './MovieCard.css'
import Rate from './Rate'
const MovieCard = ({el : {image, name, rating, date, description}}) =>{
    return (
        <>
           {/* <div className="cart">
               <div className="imgedit">
                  <img src={image}/>
                  <div className="detail">
                      <h1>{name}<span> {date}</span></h1>
                      <div className="desciption">
                          <p>{description}</p>
                      </div>
                      <div>
                          <h5>{}</h5>
                      </div>
                  </div>
               </div>

           </div> */}
           <div className="container">
  <div class="cellphone-container">    
      <div className="movie">       
        <div class="menu"><i class="material-icons"></i></div>
        <div className="movie-img">
            <img style={{width:'370px', height:'450px'}} src={image}/>
        </div>
        <div className="text-movie-cont">
          
            <div className="col1">
              <h1 style={{fontSize:'1.5rem', color:'#bfc2c4', textAlign:'center'}}>{name}<sapn> ({date})</sapn></h1>
            </div>
                      <div style={{color:'#f20f1a'}} className="col2">
                      <Rate rating = {rating}/>
            </div>
          <div className="mr-grid">
            <div className="col1">
              <p style={{color:'#bfc2c4'}}>{description}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
        </>
    )
}
export default MovieCard;