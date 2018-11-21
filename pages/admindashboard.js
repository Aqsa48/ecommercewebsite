import React from 'react';
import Link from 'next/link';
import Head from '../components/head';

export default class extends React.Component{
    render(){
        return(
            <main>
                <Head />
        
                    <div className="col-md-10  " style={{margin:'30px;' }} >
                   <form  ><input type="text" name="search" placeholder="Search.."   style={{
                            border:'1px solid' ,
                            width: '130px',
                            boxsizing: ' border-box',
                            border: '2px solid #ccc',
                            width: '100%',
                            borderradius: '4px',
                            fontsize: '16px',
                            backgroundcolor: 'white',
                            webkittransition:' width 0.4s ease-in-out',
                             backgroundposition: '10px 10px', 
                             backgroundrepeat: 'no-repeat',
                             padding: '12px 20px 12px 40px',
                            transition:'width 0.4s ease-in-out'                    
                        }}/></form>
                        </div>
                
                           
        <div style={styles.sideBar} className='col-md-2 side-bar'>
            <div className='sidebar-container'>  
                
                 <div style={styles.sidebarAnchor} > <p>  <Link href='/desboard'><a ><i className='glyphicon glyphicon-home'></i> Deshboard</a></Link></p>                               
                 
                  <p > <Link href='/addadmin'><a> Add Admin</a></Link></p>
                  <p > <Link href='/addproduct'><a> Add product </a></Link></p>
                   
               
                </div>
                   
            </div>
        </div> 
            
            </main>
        )
    }
}

    var styles = {
    sideBar:{
       // backgroundColor:"#e74c3c",
       border:"1px solid black", 
       minHeight:"650px",
        color:"#fff",
        boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
    },
    item:{
        paddingBottom:"10px",
        paddingLeft:"5px",
        borderBottom:"1px solid rgba(0,0,0,0.1)"
    },
    sidebarAnchor:{
        cursor: "pointer",
       // color: "#fff",
        textDecoration: "none"

    }
}