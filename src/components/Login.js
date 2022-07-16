import { useState } from "react";

function Login( {setUser} ) {

    const [username, setUsername] = useState('')

    function handleSubmit(event){ 
        event.preventDefault();
        setUser(username)

    }
    return ( 
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <input 
        placeholder="Input Username"
        onChange={event => setUsername(event.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
    </div> 
    );
}

export default Login;