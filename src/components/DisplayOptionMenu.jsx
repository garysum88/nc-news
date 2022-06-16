import {Link, useLocation, useSearchParams} from "react-router-dom"

function DisplayOptionMenu ({orderState,setOrderState}) {

  const location = useLocation().pathname.substring(1)
  const [searchParams] = useSearchParams();

  const sort_by = searchParams.get('sort_by')
  const order = searchParams.get('order')

    return (
      <>
      <div className="SortMenu__sortby">
      <div>
        <strong>Sort by: </strong></div>
        <div className={sort_by==="created_at" || sort_by===null ? "SelectedLink" : "NormalLink"}><Link to={`/${location}?sort_by=created_at${order? "&order=" + order : ""}`}>Date</Link></div>
        <div className={sort_by==="title" ? "SelectedLink" : "NormalLink"}><Link to={`/${location}?sort_by=title${order? "&order=" + order : "" }`}>Title</Link></div>
        <div className={sort_by==="topic" ? "SelectedLink" : "NormalLink"}><Link to={`/${location}?sort_by=topic${order? "&order=" + order : ""}`}>Topic</Link></div>
        <div className={sort_by==="author" ? "SelectedLink" : "NormalLink"}><Link to={`/${location}?sort_by=author${order? "&order=" + order : ""}`}>Author</Link></div>
        <div className={sort_by==="votes" ? "SelectedLink" : "NormalLink"}><Link to={`/${location}?sort_by=votes${order? "&order=" + order : ""}`}>No.of vote</Link></div>
      </div>

      <div className="SortMenu__order">
      <div>
        <strong>Order: </strong></div>
        <div className={order==="asc" || !order ? "SelectedLink" : "NormalLink"}><Link to={`/${location}?${sort_by? "sort_by=" + sort_by + "&" : ""}order=asc`}>Ascending</Link></div>
        <div className={order==="desc" ? "SelectedLink" : "NormalLink"}><Link to={`/${location}?${sort_by? "sort_by=" + sort_by + "&" : ""}order=desc`}>Descending</Link></div>

      </div>
      </>
    )
}


export default DisplayOptionMenu;
