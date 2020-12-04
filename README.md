# README

## Code Architecture

The following is an explanation of the organization of the components of my code, how data is passed down through the components, and how user interactions can trigger changes in the state of components.

### App.js

The html begins App.js, which defines the total list of 
recipes and their fields (name - the item name, difficulty - 
the difficulty to prepare the item, category - the category of 
food of the item, cooktime - the time it takes to cook, and 
image - an image of the item). App.js displays the title and subtitle 
of the page and then passes the list of recipes to the component 
FilteredList.

### FilteredList

FilteredList does the filtering and the sorting of the total recipe list 
passed down from App.js. In the state, it keeps track of the filtering and sorting conditions, with variables difficulty (what difficulty level to display, default "All"), category (what food categories to display, default "All"), and sort (what to sort by, defaulted to no sorting).

This component makes three navbars, one for users to filter by difficulty, one for users to filter by category, and one for users to choose a sorting condition. When a link is clicked on one of these navbars, a function is called that updates the respective state variable to be the new selected condition. 

This component also creates a DisplayComponents, passing down the total recipe list filtered and sorted according to the variable's values in the current state.

Changing the state by clicking a link triggers a rerender, so the items are resorted/filtered and rerendered every time the condition for sorting or filtering by any property is changed. 

### DisplayComponents

DisplayComponents calls the two sections of items to display, the filtered/sorted list of items, made with DisplayList, and the menu, made with DisplayAggregator. 

This component keeps track of the list of items that should go in the menu, so that using callback functions the cards in DisplayList can add to it and the cards in DisplayAggregator can remove from it. This list of items is in the state such that when it is changed, both displays will be re-rendered.

In summary, DisplayList is given the filtered/sorted list of items to display and an addToMenu function that allows it to callback and add items to the menu list in DisplayComponent's state. DisplayComponent is given the menu list of items to display and a removeFromMenu function that allows it to callback and remove items from the menu list in DisplayComponent's state.

#### DisplayList

DisplayList displays the filtered/sorted list of items as Cards by mapping through the list passed down by DisplayComponents. It includes a "Add to Menu" button on the Card, which when pressed by a user, calls the callback function passed down by DisplayComponents, which adds the item whose button is pressed to the menu list in the state of DisplayComponents.

#### DisplayAggregator

DisplayAggregator displays the list of items in the menu as Cards by mapping through the list passed down by DisplayComponents. It includes a "Remove" button on the Card, which when pressed by a user, calls the callback function passed down by DisplayComponents, which removes the item whose button is pressed from the menu list in the state of DisplayComponents.
