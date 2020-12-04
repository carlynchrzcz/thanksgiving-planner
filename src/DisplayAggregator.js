    import { Component } from "react";
    import { Button, Card } from "react-bootstrap";

    // displays the items in a users menu
    export default class DisplayAggregator extends Component {
        constructor(props) {
            super(props);
        }

        // calculates the total cooktime of the menu items
        totalCooktime() {
            var sum = 0;
            this.props.list.forEach(item => sum = sum + item.cooktime)
            return sum;
        }


        render() {
            return (
                <div style={{ border: '1px solid #d3d3d3' }}>
                    {/* section header */}
                    <div style={{ backgroundColor: '#343a40', color: "white", padding: '10px' }}>
                        {/* section title */}
                        <h3>My Thanksgiving Menu</h3>
                    {/* subtitle containing total cooktime converted to hours rounded and in minutes*/}
                    Total Cook Time: {+(this.totalCooktime() / 60).toFixed(2)} hours ({this.totalCooktime()} minutes)
                    </div>
                    {/* section body - maps list of menu items into cards */}
                    {this.props.list.map(item =>
                        <div>
                            <br />
                            <Card style={{ width: '350px', margin: 'auto' }}>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <b>Food Category:</b> {item.category} <br />
                                        <b>Cooking Time:</b> {item.cooktime} min
                                    </Card.Text>
                                    {/* button that pressing calls back to DisplayComponents to
                                        remove item from menu list in its state */}
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
