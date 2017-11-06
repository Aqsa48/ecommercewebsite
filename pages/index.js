import React from 'react';
import Link from 'next/link';
import axios from 'axios';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:[]}
    }

    componentDidMount(){
        axios.get('/getuser').then((response)=>{
            this.setState({user:response.data.local})
        })
    }

    render(){
        return(
            <main>
                <h1>Hello World</h1>
                <b>Welcome</b><p>Username: {this.state.user.username}</p>
                <Link href='/logout'><a>Logout</a></Link>
            </main>
        );
    }
}