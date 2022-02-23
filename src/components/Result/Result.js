import React from 'react'
import './result.css'
import BeachImg from '../../images/beach.jpg'
import { Col, Container, Row } from 'react-bootstrap'
export default function Result() {
  const results = [
    {
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
    {
      img : BeachImg,
      locationA: 'Nadi',
      locationB: 'Fiji',
      flyCost: 1107,
      roomCost: 834,
      roomSpec: '7n x $112'
    },
  ]
  return (
    <Container className='resultContainer'>
     <div>
     <div className='resultTextContainer'>
      <b >There are 29 different destinations in 12 countries you can travel for your budget, based on average prices</b>
     </div>
      {
        results.map(item=>{
          return (
            <Row className='mb-5 align-items-center'>
            <Col xs={10} md={4}>
              <img src={item.img} alt="" />
            </Col>
            <Col xs={10} md={8} >
              <div>
                <h1>
                <span className='locationA'>{item.locationA}, </span> 
                <span className='locationB'>{item.locationB}</span>
                </h1>
              </div>
              <div className='contentPart'>
                <div >
                  <h2>${item.flyCost}</h2>
                  <p>Return</p>
                </div>
                <div>
                  <h2>+</h2>
                </div>
                <div >
                  <h2>${item.roomCost}</h2>
                  <p>{item.roomSpec}</p>
                </div>
                <div>
                  <h2>=</h2>
                </div>
                <div className='highlight'>
                  <h2>${item.flyCost + item.roomCost}</h2>
                  <p>Total Price</p>
                </div>
              </div>
            </Col>
          </Row>
          )
        })
      }
     </div>
    </Container>
  )
}
