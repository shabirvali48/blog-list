import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props

  return (
    <ul className="blogs-container">
      {blogsData.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
