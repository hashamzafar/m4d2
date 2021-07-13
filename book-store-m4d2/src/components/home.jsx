import {component} from 'react'
import { Carousel,Container,Row,Col } from "react-bootstrap"
import items from "../data/menu.json"

class Home extends component {

    state ={
        selectedDish : null,

    }


    render(){
        return(
            
                <Container>
                    <Row className="justify-content-center mt-3">
                        <Col xs={12} md={6}>
                <h1>Welcome To Strive Restorant</h1>
                <p>We can only cook pasta</p>
                <Carousel>
        {
            items.map(item=>(

  <Carousel.Item key={item.id}>
    <img
      className="d-block w-100"
      src="http://placehold.it/300x200"
      alt="First slide"
      onClick={()=>{
          this.setstate({
              selectedDish : item.comments
          })
      }}
    />
    <Carousel.Caption>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  ))}
        
</Carousel>
</Col>
</Row>
{
    this.state.selectedDish !== null &&(
    <Row>

    
    <ul>
    {this.state.selectedDish.comments.map(c=>(
     <li keys={c.id}>   {c.comment}</li>
        ))}
        </ul>
    </Row>
    )
    }



            
</Container>
        )
    }
}
export default Home