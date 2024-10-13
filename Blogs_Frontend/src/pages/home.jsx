import { useEffect, useState } from "react";
import BlogTable from "../component/blogTable";
import { getAllBlogs } from "../services/blogService";
import handleError from "./handleError";


function Home() {
    const [loading, setLoading] = useState(false);
    const [blogsData, setBlogsData] = useState([]);
    
    useEffect(() => {
      loadData();
    }, [])

    const loadData = async () => {
      try{
        const data = await getAllBlogs();

        setBlogsData(data);
      } catch(error){
        handleError(error);
      }

      setLoading(false);
    }


    return (
        <div>
            {loading? (
              <h2 className='loading'>Loading Content.....</h2>
          ):(
            <BlogTable
              blogsList={blogsData}
            />
          )}
        </div>
    )
}

export default Home;