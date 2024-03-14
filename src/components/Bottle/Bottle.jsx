import './Bottle.css'


export default function Bottle({bottle,addCard}) {
    // console.log(bottle)
    const {name, img} = bottle; 
  return (
    <div className='box'>
      <h2> {name}</h2>
      <img src={img} alt="" />
      <button onClick={()=> addCard(bottle)}>Buy Now</button>
    </div>
  )
}
