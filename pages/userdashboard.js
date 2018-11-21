import React from 'react';
import Link from 'next/link';
import axios from 'axios';

import ProductDiv from '../components/productDiv';

import Head from '../components/head';

// let PRODUCTS=[];

export default class extends React.Component{
    
constructor(props){
    super(props);
    this.state = {productsData:[],data:''}
    
     this.getmenfashion=this.getmenfashion.bind(this);
    this.getwomenfashion=this.getwomenfashion.bind(this);
     this.getAppliance=this.getAppliance.bind(this);
    this.getMobile=this.getMobile.bind(this);
     this.health=this.health.bind(this);
   
  }
  componentDidMount(){
    axios.get('/getProducts').then((response)=>{
    this.setState({productsData:response.data});
    console.log('++'+this.state.productsData);
    let PRODUCTS=[];
    
for(let i=0;i<this.state.productsData.length;i++)
    {
         
  console.log('++'+this.state.productsData);
PRODUCTS.push(<ProductDiv key={Math.random()}

          image={this.state.productsData[i].productimage}
          brand={this.state.productsData[i].brandname}
          producttitle={this.state.productsData[i].producttitle}
          productprice={this.state.productsData[i].productprice}
          productcategory={this.state.productsData[i].productcategory}
           />);
    }
this.setState({data:PRODUCTS});
    })
  }

getmenfashion(){

    axios.get('/getMenfashion').then((response)=>
      {
      this.setState({productsData:response.data});
      console.log(this.state.productsData);
     let PRODUCTS=[];

      for(let i=0;i<this.state.productsData.length;i++){
           
          PRODUCTS.push(<ProductDiv key={Math.random()}

          image={this.state.productsData[i].productimage}
          brand={this.state.productsData[i].brandname}
           producttitle={this.state.productsData[i].producttitle}
          productprice={this.state.productsData[i].productprice}
          productcategory={this.state.productsData[i].productcategory}
      
           />);
      }
this.setState({data:PRODUCTS});
    })
  }




  getwomenfashion(){
      axios.get('/getWomenfashion').then((response)=>{
      this.setState({productsData:response.data});
      console.log(this.state.productsData);
      
      let PRODUCTS=[];
      for(let i=0;i<this.state.productsData.length;i++){
          PRODUCTS.push(<ProductDiv key={Math.random()}
          image={this.state.productsData[i].productimage}
          brand={this.state.productsData[i].brandname}
          producttitle={this.state.productsData[i].producttitle}
          productprice={this.state.productsData[i].productprice}
          productcategory={this.state.productsData[i].productcategory}
      

           />);
      }
this.setState({data:PRODUCTS});
    })
  }


  getMobile(){
      axios.get('/getPhones').then((response)=>{
      this.setState({productsData:response.data});
      console.log(this.state.productsData);
let PRODUCTS=[];
      for(let i=0;i<this.state.productsData.length;i++){
          PRODUCTS.push(<ProductDiv key={Math.random()}
          image={this.state.productsData[i].productimage}
          brand={this.state.productsData[i].brandname}
          producttitle={this.state.productsData[i].producttitle}
          productprice={this.state.productsData[i].productprice}
          productcategory={this.state.productsData[i].productcategory}
    
           />);
      }
this.setState({data:PRODUCTS});
    })
  }




  health(){
      axios.get('/getHealth').then((response)=>{
      this.setState({productsData:response.data});
      console.log(this.state.productsData);
let PRODUCTS=[];
      for(let i=0;i<this.state.productsData.length;i++){
          PRODUCTS.push(<ProductDiv key={Math.random()}
          image={this.state.productsData[i].productimage}
          brand={this.state.productsData[i].brandname}
          producttitle={this.state.productsData[i].producttitle}
          productprice={this.state.productsData[i].productprice}
          productcategory={this.state.productsData[i].productcategory}
    
           />);
      }
this.setState({data:PRODUCTS});
    })
  }
  


  getAppliance(){
      axios.get('/getAppliance').then((response)=>{
      this.setState({productsData:response.data});
      console.log(this.state.productsData);
let PRODUCTS=[];
      for(let i=0;i<this.state.productsData.length;i++){
          PRODUCTS.push(<ProductDiv key={Math.random()}
          image={this.state.productsData[i].productimage}
          brand={this.state.productsData[i].brandname}
          producttitle={this.state.productsData[i].producttitle}
          productprice={this.state.productsData[i].productprice}
          productcategory={this.state.productsData[i].productcategory}
           />);
      }
this.setState({data:PRODUCTS});
    })
  }
  render(){
        return(
            <main>
             <Head/>
              <div className="col-md-10  " style={{margin:'30px' }} >
                   <form  ><input type="text" name="search" placeholder="Search.."   style={{
                            border:'1px solid yellow' ,
                            width: '100%',
                            boxsizing: ' border-box',
                            border: '2px solid #ccc',
                            height: '100%',
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

        <div className='sidebar-container col-md-4' 
            style={{border : '1px solid yellow',
                    width:'300px',
                    height:'3000px'
                    }}>  
             <ul type="none">
                  <li id="list" onClick={this.getmenfashion}  > Men's Fashion</li> 
                  <li id="list" onClick={this.getwomenfashion}  > Women's Fashion</li> 
                  <li id="list" onClick={this.getMobile}  > Mobile&Tablets</li> 
                  <li id="list" onClick={this.getAppliance}  > Applinace </li>
                  <li id="list" onClick={this.health}  > Health&Beauty </li>   
            </ul>
        </div> 
            
            <div style={{
                    border:'4px solid blue',
                    width:'100%',
                    height:'100%'
                }}>
                
                {this.state.data}
                </div>

            </main>
        );
    }
}
