import React, { Component } from 'react'

class Pagination extends Component {
  state = {
    isIditable: false
  }
  render() {
    const {
      next, prev, totalPage, currentPage, isNext, isPrevious, handlePageChange, goToPage
    }= this.props;
    return (
      <div className="d-flex justify-content-between m-2">
        <button 
        className="btn btn-sm btn-primary" 
        disabled={!isPrevious} 
        onClick={()=>{
          prev();
        }}>
           Preveous
           </button>
        <div>
          <p className="flex-grow-1 text-center"> 
          {
            this.state.isIditable ? (
            <input type="numer"
            value={currentPage}
            onChange={(e)=>{
              
              handlePageChange(e.target.value)
            }
            } 
            onKeyPress={(e)=>{
              if(e.key === 'Enter'){
                goToPage();
                this.setState({isIditable:false}) 
              }
              
            }}
             />
            ):(
              <div style={{userSelect:"none", lineHeight:"1.1"}}
              title="Double click to change the page "
              onDoubleClick={()=>{
                this.setState({isIditable: !this.state.isIditable})
              }}>
                {currentPage}of {totalPage} <br/>
                <small> Double tap to change the page</small>
              </div>
            )
          }
          </p>
        </div>
        <button 
        className="btn btn-sm btn-primary" 
        disabled={isNext}
        onClick={()=>{
          next();
        }}
        > 
        Next
        </button>
        
      </div>
    )
  }
}

export default Pagination
