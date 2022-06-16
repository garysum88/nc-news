import {Link, useSearchParams} from "react-router-dom"

function TopicMenu ({topics}) {

  const [searchParams] = useSearchParams();

  const sort_by = searchParams.get('sort_by')
  const order = searchParams.get('order')

    return (
      <>
      <div className="TopicMenu">
      <div><strong>Select category: </strong></div>
        <div key="all"><Link to={`/articles/topic/all${ sort_by ? `?sort_by=${sort_by}` : ""}${order ? (sort_by ? "&order=" + order : "?order=" + order) : ""}`}>All</Link></div>
        { topics.map((topic)=>{
          return <div key={topic.slug}><Link to={`/articles/topic/${topic.slug}${ sort_by ? `?sort_by=${sort_by}` : ""}${order ? (sort_by ? "&order=" + order : "?order=" + order) : ""}`}>{topic.slug}</Link></div>
        })}

      </div>

      </>
    )
}

export default TopicMenu;

