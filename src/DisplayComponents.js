import { Component } from "react";
import DisplayList from './DisplayList.js';
import DisplayAggregator from './DisplayAggregator.js';
import { Row, Col } from "react-bootstrap";


export default class DisplayComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aggregator: []
        };
    }

    addToPlanner = item => {
        if (!this.state.aggregator.includes(item)) {
            var newAggregator = this.state.aggregator.concat(item);
        
            this.setState({
                aggregator: newAggregator
            })
        }  
    };

    removeFromPlanner = item => {
        var newAggregator = this.state.aggregator
        var index = this.state.aggregator.indexOf(item);
        if (index > -1) {
            newAggregator.splice(index, 1);
            this.setState({
                aggregator: newAggregator
            })
        }
    }

    render() {
        return (
            <Row>
                <Col sm={8}>
                    <DisplayList list={this.props.list} addfun={this.addToPlanner}/>
                </Col>
                <Col sm={4}>
                <br />
                    <DisplayAggregator list={this.state.aggregator} remfun={this.removeFromPlanner}/>
                </Col> 
            </Row>)
    }
}