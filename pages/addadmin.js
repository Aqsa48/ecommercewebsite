import React from 'react';
import Link from 'next/link';
import Head from '../components/head';

export default class extends React.Component{
    render(){
        return(
            <main>
                <Head />
        
            
                 <div id="Form" className="col-md-4  col-md-offset-6" >          
                    <h1 > Admin Sign up </h1>
                    <form method='post' action='/admin' >
            
                        <p id="p2" style={{color:'red'}}>Username</p>
                        <input type="text" name='username' className="col-md-10" placeholder="Enter Username" />
                        <br></br><br></br>
                        <p id="p3">Email</p>
                        <input type="text" name='email' className="col-md-10"  placeholder="Enter Email" />
                        <br></br><br></br>
                        <p id="p4">Password</p>
                        <input type="password" name='password' className="col-md-10"  placeholder="Enter Password" />
                        <br></br><br></br>
                        <button type='submit' className="col-md-5" >Submit</button>
                
                      </form>
                    </div>
                
                
            </main>
        )
    }
}
