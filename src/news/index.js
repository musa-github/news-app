import axios from "../utuls/axios"

export const newsCatagory = {
  entertainment: " entertainment",
  science: "science",
  business: "business",
  health: " health",
  sports: "sports"
}

const max_item_per_page= 10;

export default class News{

  constructor(category){
    this._category = category;
    this._searchTrum = "";
    this._pageSize = max_item_per_page;
    this._currentPage = 1;
    this._totalPage= 1;
    
  }

  async getNews(){
    try{
      const {data} = await axios.get(this._getUrl())
      
     this._totalPage = Math.ceil(data.totalResults / this._pageSize)
     
     return{
       article: data.articles,
       totalPage: this._totalPage,
       currentPage:this._currentPage,
       category:this._category,
       totalResult:data.totalResults,
       isNext:this._isNext(),
       isPrevious: this._isPrevious()
     }
    }catch(e){
      throw new Error(e);
    }
  }

  next(){
    if(this._isNext){
      this._currentPage ++;
      return this.getNews();
    }
    return false;
  }

  prev(){
    if(this._isPrevious){
      this._currentPage--;
      return this.getNews();
    }
    return false;
  }
  

  setCurrentPage(pageNumber){
      if( pageNumber < 1 && pageNumber > this._totalPage){
        throw new Error('Invalid Page Number')
      }
      this._currentPage = pageNumber;
      return this.getNews();
      
  }
  changeCategory(category){
    this._category = category;
    this._currentPage = 1;
    return this.getNews();

  }
  search( term){
    this._searchTrum = term;
    return this.getNews();

  }

  _getUrl(){
    let url= "/?"
    if(this._category) url +=`category=${this._category}`;
    if(this._searchTrum) url += `&q=${this._searchTrum}`;
    if(this._pageSize) url += `&pageSize=${this._pageSize}`;
    if( this._currentPage) url += `&page=${this._currentPage}`;

    return url;
  }
  _isNext(){
    return this._currentPage < this._totatPage;
  }

  _isPrevious(){
    return this._currentPage >1;
  }
 
}


