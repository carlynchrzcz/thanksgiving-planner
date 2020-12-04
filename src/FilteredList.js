import { Component } from "react";
import { Nav, Navbar, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayComponents from './DisplayComponents.js';

export default class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: "All",
            category: "All",
            sort: "Default"
        };
    }
  
    onSelectFilterDifficulty = event => {
        this.setState({
            difficulty: event
        })
    };

    onSelectFilterCategory = event => {
        this.setState({
            category: event
        })
    };

    onSelectSort = event => {
        this.setState({
            sort: event
        })
    };

    matchesFilterDifficulty = item => {
        // all items should be shown when no filter is selected
        if (this.state.difficulty === "All") { 
            return true
        } else if (this.state.difficulty === item.difficulty) {
            return true
        } else {
            return false
        }
    }

    matchesFilterCategory = item => {
        // all items should be shown when no filter is selected
        if (this.state.category === "All") { 
            return true
        } else if (this.state.category === item.category) {
            return true
        } else {
            return false
        }
    }

    sorter = (itema, itemb) => {
        if (this.state.sort === "Cook Time: Highest to Lowest") { 
            return itemb.cooktime - itema.cooktime;
        } else if (this.state.sort === "Cook Time: Lowest to Highest") {
            return itema.cooktime - itemb.cooktime;
        } else {
            return 0;
        }
    }
    
    render() {
      return (
        <div>
        <Col sm={8}>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Prep Difficulty:</Navbar.Brand>
            <Nav className="mr-auto">
                    <Nav.Link eventKey="All" onSelect={this.onSelectFilterDifficulty}>
                        All
                    </Nav.Link>
                    <Nav.Link eventKey="Easy" onSelect={this.onSelectFilterDifficulty}>
                        Easy
                    </Nav.Link>
                    <Nav.Link eventKey="Medium" onSelect={this.onSelectFilterDifficulty}>
                        Medium
                    </Nav.Link>
                    <Nav.Link eventKey="Hard" onSelect={this.onSelectFilterDifficulty}>
                        Hard
                    </Nav.Link>
            </Nav>
            </Navbar>

            <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Food Category:</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link eventKey="All" onSelect={this.onSelectFilterCategory}>
                        All
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Starch" onSelect={this.onSelectFilterCategory}>
                        Starch
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Meat" onSelect={this.onSelectFilterCategory}>
                        Meat
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Veggies" onSelect={this.onSelectFilterCategory}>
                        Veggies
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Dessert" onSelect={this.onSelectFilterCategory}>
                        Dessert
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>

            <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Sort by Cooking Time:</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link eventKey="Default" onSelect={this.onSelectSort}>
                        No Sort
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Cook Time: Lowest to Highest" onSelect={this.onSelectSort}>
                        Lowest to Highest
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Cook Time: Highest to Lowest" onSelect={this.onSelectSort}>
                        Highest to Lowest
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
            </Col>

            <DisplayComponents list={this.props.list.filter(this.matchesFilterDifficulty).filter(this.matchesFilterCategory).sort(this.sorter)} />
            </div>
        )
    }
  }
