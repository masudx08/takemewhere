import React, {useState} from 'react'
import './filter.css'
import {Row, Col} from 'react-bootstrap'
export default function Filter() {
const [price, setPrice] = useState(2000)
const [night, setNight] = useState(14)
function sliderHandler(e){
  if(e.target.name === 'price'){
    setPrice(e.target.value)
  }else if(e.target.name === 'night'){
    setNight(e.target.value)
  }
}
console.log(price)
console.log(night)
  return (
    <Row className='filterContainer'>
      <Col xs={8} >
        <div className='txt'>
          I am based in <span className='highlight'>Sydney, Australia</span> <br />
          and I want to see travel options for:
        </div>
        <div>
          <button>Domestic</button>
          <button>International</button>
          <button>Either is fine</button>
        </div>
        <div>
          <input name='price' value={price} className='slider' min={1} max={2000}  type="range"  onChange={e=>sliderHandler(e)} />
          <input name='night' value={night} className='slider' min={1} max={14}  type="range"  onChange={e=>sliderHandler(e)} />
        </div>
      </Col>
    </Row>
  )
}
