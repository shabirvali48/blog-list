import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails

  const hLine = () => {
    if (id > 1) {
      return <hr />
    }
    return null
  }

  return (
    <li className="blog">
      {hLine()}
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
