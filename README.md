# README

## Code Architecture

The following is an explanation of the organization of the components of my code, how data is passed down through the components, and how user interactions can trigger changes in the state of components.

### App.js

The html beguns App.js, which defines the total list of 
recipes and their fields (name - the item name, difficulty - 
the difficulty to prepare the item, category - the category of 
food of the item, cooktime - the time it takes to cook, and 
image - an image of the item). App.js displays the title and substitle 
of the page and then passes the list of recipes to the component 
FilteredList.

### FilteredList

FilteredList does the filtering and the sorting of the total recipe list 
passed down from App.js.

FINISH

### DisplayComponents

DisplayComponents calls the two sections of items to display, the filtered/sorted list of items, made with DisplayList, and the menu, made with DisplayAggregator. 

This component keeps track of the list of items that should go in the menu, so that using callback functions the cards in DisplayList can add to it and the cards in DisplayAggregator can remove from it. This list of items is in the state such that when it is changed, the menu will be re-rendered.

Putting it all together, DisplayList is given filtered/sorted list of items to display and an addToMenu function that allows it to callback and add items to the menu list in DisplayComponent's state. DisplayComponent is given the menu list of items to display and a RemoveFromMenu function that allows it to callback and remove items from the menu list in DisplayComponent's state.

#### DisplayList

DisplayList displays the filtered/sorted list of items as Cards by mapping through the list passed down by DisplayComponents. It includes a "Add to Menu" button on the Card, which when pressed by a user, calls the callback function passed down by DisplayComponents, which adds the item whose button is pressed to the menu list in the state of DisplayComponents.

#### DisplayAggregator

DisplayAggregator displays the list of items in the menu as Cards by mapping through the list passed down by DisplayComponents. It includes a "Remove" button on the Card, which when pressed by a user, calls the callback function passed down by DisplayComponents, which removes the item whose button is pressed from the menu list in the state of DisplayComponents.
