
import React, { Component } from 'react'

// import{Container,Row,Col} from 'reactstrap'
import MyNavbar from './MyNavbar'
import { Routes,Route } from 'react-router-dom'
import Git from './Git'
import MyCom from './MyCom'

export default class App extends Component {
  render() {
    return (
      <div>
           <div>
         <MyNavbar/>
      </div>
           <Routes>
             <Route exact path="/"  />
             <Route path="git" element={<Git/>} />
             <Route path="mycom" element={<MyCom/>} />
           </Routes>
    
      </div>
      
    )
  }
}
// {/* <Container>
//         <Row>
//           <Col><MyNavbar/></Col>
//         </Row>
//       </Container> */}