const PageStatus = (props)=>{
  return(
    <div className="d-flex justify-content-between mt-3">
      <small>
        <strong> {props.totalPage} Page found</strong>
      </small>
      <small>
        <strong> {props.currentPage} Page of {props.totalPage} </strong>
      </small>
    </div>
  )
}
export default PageStatus