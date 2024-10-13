import { useEffect, useState } from "react"
import CategoryTable from "../component/categoryTable";
import handleError from "./handleError";


function Category(){
    const [categoryData, setCategoryData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() =>{
        loadData();
    }, [])

    const loadData = async () =>{
        try{

        } catch(error) {
            setErrorMessage(handleError(error));
        }
    }

    return (
        <>
            {errorMessage && <div className="alert alert-warning" role="alert">
                {errorMessage}
            </div>}
            <div className="row">
                <div className="col-12">
                    <div class="input-group input-group-lg">
                        <span class="input-group-text">Category</span>
                        <input type="text" class="form-control"/>
                    </div>
                    <div className="col-">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
                <  div className="col-12">
                    <CategoryTable
                        categoryList={categoryData}
                    />
                </div>
            </div>
        </>
    )
}

export default Category