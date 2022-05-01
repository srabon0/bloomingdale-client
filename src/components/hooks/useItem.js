import axios from "axios";
import { useEffect, useState } from "react"

const useItem = (id)=>{
    const [item,setItem] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${id}`;
        axios.get(url)
        .then(res=>{
            setItem(res.data);
        })
        
    },[id]);
    return [item,setItem]
}

export default useItem;