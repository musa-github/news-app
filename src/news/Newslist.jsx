import React, { Component } from 'react'

const getDateString =(dateStr)=>{
return new Date(dateStr).toDateString();
}

const NewsItem = ({item})=>{
  return(
    <div className="card mb-4">
    {item.urlToImage && (
      <img 
      className="card-img-top"
      src={item.urlToImage} 
      alt={item.title}
      />
    )}
    <div className="card-body">
      <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{color:"#424242"}}>
        <h5 className="card-title">{item.title}</h5>
      </a>
      <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{color:"#424242"}}>
        <p> {item.content}</p>
      </a>
      <div className="d-flex align-items-center justify-content-between m-3">
        <small>
          <strong>
            
            Published at : { getDateString(item.publishedAt)}
          </strong>
        </small>
        <small>
          <strong>
            {item.source.name}
          </strong>
        </small>

      </div>
    </div>
     </div>
  )
}
 class NewsIist extends Component {
  render() {
 const { news } = this.props;

    return (
      <div>
       { news && news.length === 0 && <h5> no content found</h5>}
       { news && news.map( item=><NewsItem item={item} key={item.title}/>)}

        
      </div>
    )
  }
}

export default NewsIist
