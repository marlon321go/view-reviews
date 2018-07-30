This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

##Setup-
 
 npm install
 npm start
 
 This will launch to the dev port http://localhost:3000/
 
##Architecture-

React and Redux are the main libraries used. The project was bootstraped with [Create React App](https://github.com/facebookincubator/create-react-app) and Infinity scrolling was achieved with (https://www.npmjs.com/package/react-infinite-scroll-component).

Filters and reviews are their own componenets, responsible for the functional logic. The filters write to the redux store, while the review component reads from it. The UI components (search, dropdowns, stars etc. ) are under /views folder, and are build to be re-usable. 

I'm not sure we should be using Redux for the current requirement, but I understand how it be would needed if additional requirements are added and the project scope widens. 
