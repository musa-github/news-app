import React, { Component } from 'react'
import Header from "./components/Header"
import News, { newsCatagory} from './news'
import NewsIist from './news/Newslist'
import PageStatus from "./components/PageStatus"
import Pagination from "./components/Pagination"
import Loading from "./components/Loading"



const news = new News(newsCatagory.business);

 class App extends Component {
  state = {
    data:{},
    category:newsCatagory.business,
    isLoading: true
  };

  updateCategory = (category)=>{
    this.setState({isLoading:true})
    news.changeCategory(category)
    .then((data)=>{
      this.setState({data, isLoading:false})
    })
    .catch((e)=>{
      console.log(e);
      alert('Something Went Wrong');
      this.setState({isLoading:false})
    })
  }

  componentDidMount(){
 
    news.getNews().then((data)=>{
      
      this.setState({data, isLoading:false});

    }).catch( (e)=>{
      console.log(e);
      alert('Something Went Wrong');
      this.setState({isLoading:false})
      
    })
  }


next= ()=>{
  if(this.state.data.isNext){
    this.setState({isLoading:true})
  }

  news.next()
  .then((data)=>{
    this.setState({data, isLoading:false})
  })
  .catch((e)=>{
    console.log(e);
    alert('Something Went Wrong');
    this.setState({isLoading:false})
    
  })
}
prev = ()=>{
  if(this.state.data.isPrevious){
    this.setState({isLoading:true})
  }

  news.prev()
  .then((data)=>{
    this.setState({data, isLoading:true})
  })
  .catch((e)=>{
    console.log(e);
    alert('Something Went Wrong');
    this.setState({isLoading:false})
    
  })
};

handlePageChange = (value)=>{
  this.setState({
    data:{ 
      ...this.state.data, 
      currentPage: Number.parseInt(value)
    }
  });
};

goToPage =()=>{
  this.setState({isLoading:true});
  news.setCurrentPage(this.state.data.currentPage).then((data)=>{
    this.setState({data, isLoading:false})
  })
  .catch((e)=>{
    console.log(e);
    alert('Something Went Wrong');
    this.setState({isLoading:false})
  })
}

search = (searchTrum)=>{
  this.setState({isLoading:true})
  news.search(searchTrum)
  .then((data)=>{
    this.setState({data, isLoading:false})
  })
  .catch((e)=>{
    console.log(e);
    alert('Something Went Wrong');
    this.setState({isLoading:false})
  })
}
      
  render() {
  
    const {article,
    isPrevious,
    isNext,
    category,
    totalResults,
    currentPage,
    totalPage
  }= this.state.data;
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
          <Header catagory={category} 
          updateCategory={this.updateCategory}
          search={this.search}/>
          <PageStatus 
          currentPage={currentPage}
          totalPage={totalPage}/>
          
          {this.state.isLoading ?(
            <Loading/>
          ):(
            <div>
            <NewsIist news={this.state.data.article}/>
            <Pagination 
                next={this.next} 
                prev={this.prev}
                isNext={isNext}
                isPrevious={isPrevious}
                totalPage={totalPage}
                currentPage={currentPage}
                handlePageChange ={this.handlePageChange}
                goToPage={this.goToPage}
          />
          </div>
          )}
          
          </div>
        </div>
        
      </div>
    )
  }
}
export default App
