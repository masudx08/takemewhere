import React, {useEffect, useState} from 'react'
import './filter.css'
import {Row, Col} from 'react-bootstrap'
export default function Filter() {
const [price, setPrice] = useState(2000)
const [night, setNight] = useState(14)
const [category, setCategory] = useState('domestic')
function sliderHandler(e){
  if(e.target.name === 'price'){
    setPrice(e.target.value)
  }else if(e.target.name === 'night'){
    setNight(e.target.value)
  }
}

function handleBtn(e){
  const btnContainer = document.getElementById('btnContainer')
  let active= btnContainer.getElementsByClassName('active')
  const clsNm = active[0].className.replace(' active', '')
  active[0].className = clsNm
  e.target.className += ' active'
  setCategory(e.target.name)
}

console.log(category, 'category')
console.log(price, 'price')
console.log(night, 'night')


  return (
    <Row className='filterContainer'>
      <Col xs={8} md={7}>
        <div className='txt'>
          I am based in <span className='highlight underline'>Sydney, Australia</span> <br />
          and I want to see travel options for:
        </div>
        <div id='btnContainer'>
          <button className='mybtn active' name='domestic' onClick={e=>handleBtn(e)}>Domestic</button>
          <button className='mybtn' name='international' onClick={e=>handleBtn(e)}>International</button>
          <button className='mybtn' name='either' onClick={e=>handleBtn(e)}>Either is fine</button>
        </div>
        <Row className='justify-content-center'>
          <Col xs={10} md={5}>
            <div className='d-flex align-items-center'>
              <p >Price</p >
              <input name='price' value={price} className='slider' min={1} max={2000}  type="range"  onChange={e=>sliderHandler(e)} />
            </div>
            <div className='sliderTitleContainer'>
              <p className='ml-5'>$1</p>
              <p>$2000+</p>
            </div>
          </Col>
          <Col xs={10} md={5}>
            <div className='d-flex align-items-center'>
              <p >Night</p >
              <input name='night' value={night} className='slider' min={1} max={14}  type="range"  onChange={e=>sliderHandler(e)} />
            </div>
            <div className='sliderTitleContainer'>
              <p>1 night</p>
              <p>14 nights</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
