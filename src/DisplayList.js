import { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";


export default class DisplayList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
              {this.props.list.map(item => 
                <Col>
                  <br />
                  <Card style={{ width: '270px', margin:'auto' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <b>Food Category:</b> {item.category}<br />
                      <b>Prep Difficulty:</b> {item.difficulty}<br />
                      <b>Cooking Time:</b> {item.cooktime} min
                    </Card.Text>
                    <Button variant="dark" onClick={() => this.props.addfun(item)}>Add To My Menu</Button>
                  </Card.Body>
                </Card>
                <br />
              </Col>)}
            </Row>)
    }
}
