import React from 'react';
import Link from 'next/link';
import axios from 'axios';
 import Head from '../components/shared/Head';
// import crib from '../data/cribs.json';
import Card from '../components/shared/card';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:[]}
    }
    
    componentDidMount(){

        axios.get('/userinfo').then((response)=>{
            this.setState({user:JSON.parse(response.data)})
            console.log(this.state.user.accType);
            if(this.state.user.accType === 'user1' || this.state.user.accType === 'web'){   
            //  <p><Link href='/addadmin ' className='i'><a>Add Admin </a></Link></p>
                document.getElementById('adminbtn').disabled=true;
                document.getElementById('webmasterbtn').disabled=true;
            }
        })
        
        axios.get('/usercount').then((response)=>{
            this.setState({user:JSON.parse(response.data)})
            console.log(this.state.user.length);
        
        })
    

    
      
   var myDate = new Date();
    var hrs = myDate.getHours();
        if (hrs <= 12)
      this.setState({ greet:'Good Morning'});
       else if (hrs>= 12 && hrs <= 17) 
      this.setState({ greet:'Good Noon'});
        else if (hrs >= 17 && hrs <= 24)
      this.setState({ greet:'Good Evening'});

    }
    render(){
        return(
            <main>
          <Head /> 
            
                <div className='topbar'><div className='innertopbar '> <p> WELCOME USER   ::    
                   {this.state.user.username}    </p> 
                   <h4> {this.state.greet}    </h4>  
                </div>
                   
        <div style={styles.sideBar} className='col-md-2 side-bar'>
            <div className='sidebar-container'>  
                
                 <div style={styles.sidebarAnchor} > <p>  <Link href='/desboard'><a ><i className='glyphicon glyphicon-home'></i> Deshboard</a></Link></p>            
                     </div>
                    <br></br>
                    <br></br>
                       <form action='/addAdmin' >
                             <button type='submit' id='adminbtn'><i className='glyphicon glyphicon-home'></i> Add Admin</button>
                        </form>
                    <br></br>
                    <br></br>
                
                    <form action='/addWebmaster'>
                        <button type='submit' id='webmasterbtn'> <i className='glyphicon glyphicon-home'></i> Add Webmaster</button>
                    </form>               
            </div>
        </div> 
            
                     
            
      </div>
                <div  className='logout col-md-2'><Link href='/logout'><a>Logout</a></Link></div>
             
           <style>{`
                .topbar
               {
                border: 2px solid red;
                height:100px;
               }              
                .innertopbar
               {
                border: 2px solid blue;
                height:100%;
                }

                .logout
               {
                border: 2px solid red;
                margin-top :140px;
                top: 350px;
                margin-left: 700px;
               } 
                .disable {
                       border: 2px solid red;
                     
                }
             `}</style> 

            </main>
        );
      }
}
    var styles = {
    sideBar:{
        backgroundColor:"#e74c3c",
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
        color: "#fff",
        textDecoration: "none"

    }
}