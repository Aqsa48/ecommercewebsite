import React from 'react';
import Link from 'next/link';
import Head from '../components/head';


export default class extends React.Component{
    constructor(props){
    super(props);
    this.state = {productimage:[]}
  }
  componentqDidMount(){
    // axios.get('/getproductimage').then((response)=>{
    //   this.setState({productimage:response.data})
    // })
  }
    render(){
        return(
            <main>          
                <form method='post' action='/addmyProduct' encType='multipart/form-data'>
                 
                 
{/* <select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
   */}
                 
                  <select name="productcategory">
                    <option value="men">Men's Fashion</option>
                    <option value="women">Women Fashio </option>
                    <option value="phone">Mobile & Tablets</option>
                    <option value="health">Health & Beauty </option>
                    <option value="appliance">appliance</option>
                 </select> 

                    <p>Brand Name</p>
                    <input type="text" name='brandname' placeholder="Enter Brand's Name---" /><br />
                    <p>Size</p>
                    <input type="text" name='producttitle' placeholder="Enter Title---" /><br/>
                    <p>Price</p>
                    <input type="text" name='productprice' placeholder="Enter Price---" /><br/>
                    <p>Image</p>
                    <input type='file' name='productimage' />
                    <br/><br/><br/>
                    <button type='submit'>Submit</button>

                </form>
          
            </main>

        )
    }
}