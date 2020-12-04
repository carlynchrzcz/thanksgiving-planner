import { Component } from "react";
import { Container, Button, Card, CardDeck } from "react-bootstrap";


export default class DisplayAggregator extends Component {
    constructor(props) {
        super(props);
    }

    totalCooktime() {
        var sum = 0;
        this.props.list.forEach(item => sum = sum + item.cooktime)
        return sum;
    }

    render() {
      return (
        <div style={{ border: '1px solid #d3d3d3'}}>
            <div style={{ backgroundColor: '#343a40', color: "white", padding: '10px'}}>
            <h3>My Thanksgiving Menu</h3>
            Total Cook Time: {+(this.totalCooktime()/60).toFixed(2)} hours ({this.totalCooktime()} minutes)
            </div>
            {this.props.list.map(item => 
                    <div>
                    <br />
                    <Card style={{ width: '350px', margin:'auto' }}>
                    <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                            <b>Food Category:</b> {item.category} <br />
                            <b>Cooking Time:</b> {item.cooktime} min
                    </Card.Text>
                    <Button variant="dark" onClick={() => this.props.remfun(item)}>
                                Remove
                    </Button>
                    
                    </Card.Body>
                    </Card>
                    <br />
                    </div>)}
        </div>)
    }
  }
