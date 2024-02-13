# Place Picker App
_built with react_

## The backend folder
This project contains a backend that was built with express in the app.js file. 
The data folder contains places.json file which contains the available places. 
This folder also contains the user-places.json file where the places selected are being stored.

### The src folder
The src folder contains the components sub folder that holds six components.
There is also the http.js file that fetches data from the backend and the loc.js file 
which contains calculations in longitude and latitude and also sort places by distance.

#### About the app
This app is all about picking places one would like to visit from a list of available places.
Places selected will be shown at the top. You can delete the places selected by clicking
on it. A modal will be displayed when clicked with a confirmtion message, that ask if you
would want to delete or not. After five(5) seconds, failure to click no will automatically
the selected places.




