import React from 'react';
import Link from 'next/link';
import Head from '../components/head'

export default class extends React.Component{
    render(){
        return(
            <main>
                <Head />
                <div id="Form" className="col-md-4 col-md-offset-4"> 
          
                    <h1 id="heading1">Login</h1>
                
                    <form method='post' action='/login' >
                        <p id="p1">Username</p>
                        <input type="text" name='username' className="col-md-10" id="t1" placeholder="Enter Username..." />
                        <br></br><br></br>
                        <p id="p2">Password</p>
                        <input type="password" name='password' className="col-md-10" id="t2" placeholder="Enter Password..." />
                        <button type='submit' className="col-md-5" id="iuBtn">Submit</button>
                    </form>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <p id="p5">Don't have an account? <Link href='/signup'><a>Signup</a></Link></p>
                </div>

            </main>
        )
    }
}