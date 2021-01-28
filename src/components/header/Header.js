
import './Header.css'
import Rate from '../Rate'
const Header = ({ setMyInput, setMyRate, myRate }) =>{
    return (
        <div>
            <input type="text" className="inpu" placeholder="search here.." onChange={(e) => setMyInput(e.target.value)}/>
            <div style={{color:'#f20f1a', fontSize:'2rem', paddingTop:'20px'}}>
            <Rate rating={myRate} setMyRate={setMyRate} />
            </div>
        </div>
    )
}
export default Header