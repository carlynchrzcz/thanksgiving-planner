import { Component } from "react";
import { Nav, Navbar, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayComponents from './DisplayComponents.js';

// displays filtering and sorting navbars and 
// filters and sorts items to be displayed
export default class FilteredList extends Component {
    constructor(props) {
        super(props);
        // state contains variables for current filtering and sorting conditions
        this.state = {
            difficulty: "All",
            category: "All",
            sort: "Default"
        };
    }

    // updates difficulty filter condition in state
    onSelectFilterDifficulty = event => {
        this.setState({
            difficulty: event
        })
    };

    // updates category filter condition in state
    onSelectFilterCategory = event => {
        this.setState({
            category: event
        })
    };

    // updates sort condition in state
    onSelectSort = event => {
        this.setState({
            sort: event
        })
    };

    // returns boolean representing whether an item's difficulty matches
    // the current difficulty filter condition
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

    // returns boolean representing whether an item's category matches
    // the current category filter condition
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

    // a sorter used to order two items depending on the current sorting condition
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
                {/* DIFFICULTY FILTER NAVBAR - if option selected, state updated to that option */}
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
                    
                    {/* CATEGORY FILTER NAVBAR - if option selected, state updated to that option */}
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

                    {/* SORTING OPTIONS NAVBAR - if option selected, state updated to that option */}
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
                                    Low to High
                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Cook Time: Highest to Lowest" onSelect={this.onSelectSort}>
                                    High to Low
                    </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Col>
                
                {/* filtered/sorted list passed to DisplayComponents */}
                <DisplayComponents list={this.props.list.filter(this.matchesFilterDifficulty).filter(this.matchesFilterCategory).sort(this.sorter)} />
            </div>
        )
    }
}
