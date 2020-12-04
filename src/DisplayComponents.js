import { Component } from "react";
import DisplayList from './DisplayList.js';
import DisplayAggregator from './DisplayAggregator.js';
import { Row, Col } from "react-bootstrap";


export default class DisplayComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // represents the list of items that need to go in a user's menu
            aggregator: []
        };
    }

    // updates list in state to include item if not already included
    addToMenu = item => {
        // check not in list
        if (!this.state.aggregator.includes(item)) {
            // add to copy
            var newAggregator = this.state.aggregator.concat(item);

            this.setState({
                // update to copy
                aggregator: newAggregator
            })
        }
    };

    // updates list in state to remove item if it is in the list
    removeFromMenu = item => {
        var newAggregator = this.state.aggregator
        var index = this.state.aggregator.indexOf(item);
        // check in list
        if (index > -1) {
            // remove from copy
            newAggregator.splice(index, 1);
            this.setState({
                // update to copy
                aggregator: newAggregator
            })
        }
    }

    render() {
        return (
            <Row>
                <Col sm={8}>
                    {/* passes list of items to display to DisplayList 
                        along with callback functioin to add items to aggregator */}
                    <DisplayList list={this.props.list} addfun={this.addToMenu} />
                </Col>
                <Col sm={4}>
                    <br />
                    {/* passes list of items to display to DisplayAggregator 
                        along with callback functioin to remove items from aggregator */}
                    <DisplayAggregator list={this.state.aggregator} remfun={this.removeFromMenu} />
                </Col>
            </Row>)
    }
}