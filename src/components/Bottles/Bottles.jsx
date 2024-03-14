import { useEffect } from "react";
import { useState } from "react"
import Bottle from "../Bottle/Bottle";
import './Bottles.css'




export default function Bottles() {

  const [bottles, setBottles] = useState([]);

  const [card, setCard] = useState([]);


  useEffect(() => {
    fetch('https://b9e0413acc084878bb7f8e94f0d4fbef.api.mockbin.io/')
      .then(res => res.json())
      .then(data => setBottles(data))
  }, [])



  const addCard = (add) => {
    // console.log("add")
    const newCard = [...card, add]
    setCard(newCard)
  }


  return (
    <div>

     <h2>Total Bottle : {bottles.length}</h2>
      <h2>Card Add : {card.length}</h2>



    <div className="card">

    {
        bottles.map((bottle) => {
          // console.log(bottle)

          return (

            <Bottle
            key = {bottle.id}
              bottle={bottle}
              addCard={addCard}
            ></Bottle>
          )
        })
      }
    </div>


    </div>
  )
}
