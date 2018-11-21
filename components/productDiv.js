import React from "react";
import Head from '../components/head';


export default class extends React.Component{
 
constructor(props){
    super(props);
    this.my=this.my.bind(this);
  }

  ComponentDidMount(){
   
    window.onload=myLoad;
var id;
id = location.hash;
console.log(id);

  }


 my(){
   console.log('++++++++++helowwww');
  }
    render(){
        return(
            <main>
                <Head />
                <div className="maindiv" onClick={this.my} style={{
                    border:'1px solid red' }}>
                <div className="col-md-4 "  style={{border : '1px solid red',
                    width:'300px',
                    height:'400px',
                    margin:'20px'       
                    }}>
 
                    <img src={this.props.image} style={{
                    border:'1px solid',
                    width:'250px',
                    height:'300px'

                }} />  

                   <p> {this.props.productcategory}</p>
                   
                   <p>{this.props.brand}</p>
                   
                   <p>{this.props.producttitle}</p>
                   
                   <p>{this.props.productprice}</p>

                    </div>
                </div>
            </main>
        );
    }

}
function my(){
    alert('dddd');
}