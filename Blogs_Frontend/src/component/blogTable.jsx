import BlogList from "./blogList";


function BlogTable({blogsList, onEdit, onDelete}){
    return (
        <>
            {blogsList.length > 0 &&  
                <table className="table table-striped table-bordered table-hover">
                <caption></caption>
                    <thead className='table table-primary'>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                            <BlogList
                                blogs={blogsList}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                </table>
            }
        </>
    )
}

export default BlogTable;