import { useEffect, useState } from "react";
import BlogTable from "../component/blogTable";
import { getAllBlogs } from "../services/blogService";
import handleError from "./handleError";


function Home() {
    const [loading, setLoading] = useState(true);
    const [blogsData, setBlogsData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
      loadData();
      setLoading(false);
    }, [])

    const loadData = async () => {
      try{
        const data = await getAllBlogs();

        setBlogsData(data);
        
      } catch(error){
        setErrorMessage(handleError(error));
        setLoading(true);
      }

    }


    return (
        <>
            {errorMessage && <div className="alert alert-warning" role="alert">
                {errorMessage}
              </div>}

            {loading? (
              <div class="d-flex align-items-center">
                <strong role="status">Loading...</strong>
                <div class="spinner-border ms-auto" aria-hidden="true"></div>
              </div>
          ):(
            <div className="container" >
              <BlogTable
                blogsList={blogsData}
              />
            </div>
          )}
        </>
    )
}

export default Home;