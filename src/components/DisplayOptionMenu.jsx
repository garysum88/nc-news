import {Link, useLocation } from "react-router-dom"

function DisplayOptionMenu ({orderState,setOrderState}) {

  const location = useLocation().pathname.substring(1)


    return (
      <>
      <div className="SortMenu__sortby">
      <div>
        <strong>Sort by: </strong></div>
        <div><Link to={`/${location}?sort_by=title`}>Title</Link></div>
        <div><Link to={`/${location}?sort_by=topic`}>Topic</Link></div>
        <div><Link to={`/${location}?sort_by=author`}>Author</Link></div>
        <div><Link to={`/${location}?sort_by=created_at`}>Date created</Link></div>
        <div><Link to={`/${location}?sort_by=votes`}>No.of vote</Link></div>
        <div><Link to={`/${location}`}> | (clear)</Link></div>
      </div>

      <div className="SortMenu__order">
      <div>
        <strong>Order: </strong></div>
        <div onClick={()=>setOrderState("asc")}>Ascending</div>
        <div onClick={()=>setOrderState("desc")}>Descending</div>
        {/* <div><Link to={`/${location}?order=asc`}>Ascending</Link></div>
        <div><Link to={`/${location}?order=desc`}>Descending</Link></div> */}

      </div>
      </>
    )
}


export default DisplayOptionMenu;
