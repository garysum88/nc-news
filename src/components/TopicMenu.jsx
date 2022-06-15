import {Link} from "react-router-dom"

function TopicMenu ({topics}) {


    return (
      <>
      <div className="TopicMenu">
      <div><strong>Select category: </strong></div>
        <div key="all"><Link to="/articles/topic/all">All</Link></div>
        { topics.map((topic)=>{
          return <div key={topic.slug}><Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link></div>
        })}

      </div>

      </>
    )
}

export default TopicMenu;

