import React from "react";

 import ReactDOM from "react-dom";

 const greeting = <h1>This is the greeting from react app</h1>
 const isReactUser = false;
 const rootNode = document.getElementById('root');


 function sayGreeting () {
    if(isReactUser){
       return greeting;
    }
    else {
        return <div>Hello react test user</div>
    }
 }

 ReactDOM.render(sayGreeting(), rootNode);