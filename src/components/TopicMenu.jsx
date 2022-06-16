import {Link, useSearchParams, useParams} from "react-router-dom"

function TopicMenu ({topics}) {

  const [searchParams] = useSearchParams();

  const sort_by = searchParams.get('sort_by')
  const order = searchParams.get('order')

  const {topic} = useParams()

    return (
      <>
      <div className="TopicMenu">
      <div><strong>Category: </strong></div>
        <div key="all" className={topic? "NormalLink" : "SelectedLink"}><Link to={`/articles/topic/all${ sort_by ? `?sort_by=${sort_by}` : ""}${order ? (sort_by ? "&order=" + order : "?order=" + order) : ""}`}>All</Link></div>
        { topics.map((eachtopic)=>{
          return <div className={topic===eachtopic.slug? "SelectedLink" : "NormalLink"} key={eachtopic.slug}><Link to={`/articles/topic/${eachtopic.slug}${ sort_by ? `?sort_by=${sort_by}` : ""}${order ? (sort_by ? "&order=" + order : "?order=" + order) : ""}`}>{eachtopic.slug}</Link></div>
        })}

      </div>

      </>
    )
}

export default TopicMenu;