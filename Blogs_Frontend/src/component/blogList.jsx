

function BlogList({blogs, onEdit, onDelete}){
    return (
        <tbody>
            {blogs && blogs.map((blog) => (
            <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{blog.create_time}</td>
                <td>{blog.author}</td>
                <td>
                    <button onClick={() => onEdit(blog.id)} 
                        className='btn btn-warning' style={{marginRight:'10px'}}>Edit</button>
                    <button onClick={() => onDelete(blog.id)}
                        className='btn btn-danger'>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
    )
}

export default BlogList;