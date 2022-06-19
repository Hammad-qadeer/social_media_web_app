import React from "react";

 import ReactDOM from "react-dom";

 const rootNode = document.getElementById('root');


function Header(props) {
   return <h1>Hello {props.username}</h1>
}

function Layout(props){
   return <div style={{background: "palegoldenrod"}}>{props.children}</div>
}

function Login(){
   return <p>Please Login!!</p>
}

function Signout(){
   return <button>Signout</button>
}

const isAuthenticated = true;

 ReactDOM.render(
 <Layout>
    {isAuthenticated ? (
   <>
    <Header username = "Test User"/>
    <Signout/>
    </>
    ) : <Login/>}
    <footer>Copyright 2022</footer>
    </Layout>
 , rootNode
 );
