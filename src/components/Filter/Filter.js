import React, {useEffect, useState} from 'react'
import './filter.css'
import {Row, Col, Dropdown} from 'react-bootstrap'
export default function Filter() {
  const [price, setPrice] = useState(2000)
  const [night, setNight] = useState(14)
  const [category, setCategory] = useState('domestic')
  const [selectedLocation, setSelectedLocation] = useState('Sydney, Australia')
  const [isChecked, setIsChecked] = useState(false)
  const availableLocation = ['Dhaka, Bangladesh', 'Mumbai, India', 'Kabul, Afganisthan', 'London, England']

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

  useEffect(()=>{
    const mycheckbox = document.getElementById('checkbox')
    mycheckbox.checked = isChecked
  },[isChecked])
  
  function locationHandler(e){
    setSelectedLocation(e.target.innerText)
    setIsChecked(false)
  }

console.log(category, 'category')
// console.log(price, 'price')
// console.log(night, 'night')
// console.log(isChecked, 'isChecked')

  return (
    <Row className='filterContainer'>
      <Col xs={8} md={7}>
        <div className='txt'>
          I am based in {' '}
          <span className='highlight underline'>
            <input id='checkbox' type='checkbox'></input>
            <div className='selectedLocation' onClick={()=>setIsChecked(c=>!c)}> {selectedLocation}</div>
            <div className='items'>
              <div>
               {
                 availableLocation.filter(item=>item !== selectedLocation)
                 .map((location, i)=>{
                   return(
                     <div key={i} className='item' onClick={(e)=>locationHandler(e)}>{location}</div>
                   )
                 })
               }
              </div>
            </div>
          </span> <br />
          and I want to see travel options for:
        </div>
        <div id='btnContainer'>
          <button className='mybtn active' name='domestic' onClick={e=>handleBtn(e)}>Domestic</button>
          <button className='mybtn' name='international' onClick={e=>handleBtn(e)}>International</button>
          <button className='mybtn' name='either' onClick={e=>handleBtn(e)}>Either is fine</button>
        </div>
        <Row className='d-flex justify-content-around'>
          <Col xs={10} md={6}>
            <div className='sliderSection'>
              <p className='slider-title'>Price</p >
              <div className='slider-slide'>
                <input name='price' value={price} className='slider' min={1} max={2000}  type="range"  onChange={e=>sliderHandler(e)} />
                <div className='sliderTitleContainer'>
                  <p>$1</p>
                  <p>$2000+</p>
                </div>
              </div>
            </div>
            
          </Col>
          <Col xs={10} md={6}>
            <div className='sliderSection'>
              <p className='slider-title'>Night</p >
              <div className='slider-slide'>
                <input name='night' value={night} className='slider' min={1} max={14}  type="range"  onChange={e=>sliderHandler(e)} />
                <div className='sliderTitleContainer'>
                  <p>1 night</p>
                  <p>14 nights</p>
                </div>
              </div>
            </div>
            
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
