import axios from "axios";
import { useEffect, useState } from "react"

const useItem = (id)=>{
    const [item,setItem] = useState([]);
    useEffect(()=>{
        const url = `https://glacial-dawn-34678.herokuapp.com/inventory/${id}`;
        axios.get(url)
        .then(res=>{
            setItem(res.data);
        })
        
    },[]);
    return [item,setItem]
}

export default useItem;