//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/home.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLight, faSharp } from '@fortawesome/free-solid-svg-icons';

library.add(faClock, faLight, faSharp);


//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));

