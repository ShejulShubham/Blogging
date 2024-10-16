

function CategoryTable({categoryList, onEdit, onDelete}){   
    return (
        <>
            {categoryList.length > 0 &&  
                <table className="table table-striped table-bordered table-hover">
                <caption></caption>
                    <thead className='table table-primary'>
                        <tr>
                            <th>Id</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {categoryList.map((category) => (
                            <tr id={category.id}>
                                <td>{category.id}</td>
                                <td>{category.title}</td>
                                <td >
                                    <button onClick={() => onEdit(category.id)} 
                                        className='btn btn-warning' style={{marginRight:'10px'}}>Edit</button>
                                    <button onClick={() => onDelete(category.id)}
                                        className='btn btn-danger'>Delete</button>
                                </td>
                            </tr> 
                        ))}
                        </tbody>
                </table>
            }
        </>
    )
}

export default CategoryTable;