import axios from 'axios'
import config from "../config";

export async function getAllBlogs(pageNumber=1){
    const response = await axios.get(`${config.url}/blogs/all?page=${pageNumber}`)
    // console.log(response.data)
    return response.data.data
}


