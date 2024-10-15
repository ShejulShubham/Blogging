import axios from "axios";
import config from "../config";


export async function getAllCategories(){
    const result = await axios.get(`${config.url}/categories/all`)

    return result.data.data
}

export async function addCategory(paramTitle, paramDescription){
    const body = {
        title: paramTitle,
        description: paramDescription
    }
    const result = await axios.post(`${config.url}/categories/add`, body)

    return result.data;
}