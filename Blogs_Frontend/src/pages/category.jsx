import { useEffect, useState } from "react"
import CategoryTable from "../component/categoryTable";
import handleError from "./handleError";
import { addCategory, getAllCategories } from "../services/categoryService";


function Category(){

    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [trigger, setTrigger] = useState(0);

    useEffect(() =>{
        loadData();
    }, [trigger])

    const loadData = async () =>{
        try{
            const data = await getAllCategories();

            setCategoryData(data);
        } catch(error) {
            setErrorMessage(handleError(error));
        }
    }

    const handleAddCategories = async () => {
        setErrorMessage('');
        try{
            if(category.length === 0){
                setErrorMessage("Category can't be empty")
            }else if ( description.length === 0){
                setErrorMessage("Description can't be empty")
            }else {
                const result = await addCategory(category, description);
                
                if(result.status == "success"){
                    alert("Category added !")
                } 
            }

            setTrigger(() => trigger+1);
        }catch(error) {
            setErrorMessage(handleError(error));
        }
    }

    return (
        <>
            {errorMessage && <div className="alert alert-warning" role="alert">
                {errorMessage}
            </div>}
            <div className="row g-3" style={{margin:"10px", height:"150px"}}>
                <div className="col-8 align-self-center">
                    <div class="input-group input-group-lg">
                        <span class="input-group-text">Category</span>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Add Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                </div>
                <div className="col-8 align-self-center">
                    <div class="input-group input-group-lg">
                        <span class="input-group-text">Description</span>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Add Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="col align-self-center">
                        <button type="submit" class="btn btn-primary" onClick={handleAddCategories}>Submit</button>
                </div>
                <div className="col-12">
                    <CategoryTable
                        categoryList={categoryData}
                    />
                </div>
            </div>
        </>
    )
}

export default Category