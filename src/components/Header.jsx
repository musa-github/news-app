import React, { Component } from 'react'
import {newsCatagory} from "../news"

 class Header extends Component {
   state={
     searchTurm : ""
   }

   handleChange=(e)=>{
     this.setState({searchTurm:e.target.value})
   }
   handleKeyPress = (e )=>{
     
    if(e.key === 'Enter'){
      this.props.search(this.state.searchTurm)
    }
   }
   
  render() {
    const { catagory} =this.props;
 
    return (
     <div className="my-4">
       <h1 className="mb-4">
         Block Buster Headlines
       </h1>
       <input type="text"
              className="form-control"
              placeholder="Type Anithing"
              value={this.state.searchTurm}
              onChange={this.handleChange}
              onKeyPress = {this.handleKeyPress}
       />
          <div className="my-4">
           { newsCatagory && Object.keys(newsCatagory).map( ( item )=>{
             
             if(catagory === newsCatagory[item]){
               return <button 
                    onClick={()=>this.props.updateCategory(newsCatagory[item])}
                    className="btn btn-sm btn-warning mr-2 mb-2"> 
                    {`#${newsCatagory[item]}`}
               </button>
             }else{
              return <button 
                    onClick={()=>this.props.updateCategory(newsCatagory[item])}
                    className="btn btn-sm btn-light mr-2 mb-2"> 
                    {`#${newsCatagory[item]}`}
              </button>
             }
           })}
           
          </div>
     </div>
    )
  }
}

export default Header
