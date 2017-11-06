import React from 'react';
import Link from 'next/link';
import Head from '../components/head'

export default class extends React.Component{
    render(){
        return(
            <main>

                    <p ><Link href='/login' ><a><span className='fa fa-user'></span> Local Login </a></Link></p>

                    <p ><Link href="/signup"><a><span className="fa fa-user"></span> Local Signup</a></Link></p>
                    
                    <p><Link href="/auth/facebook" className="btn btn-primary"><a><span className="fa fa-facebook"></span> Facebook</a></Link></p>
                    
                    <p><Link href="/auth/google" className="btn btn-danger"><a><span className="fa fa-google-plus"></span> Google</a></Link></p>
	            
            
            </main>
    )}
}