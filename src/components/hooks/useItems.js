import axios from "axios";
import { useEffect, useState } from "react"

const useItems = ()=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const url = "http://localhost:5000/items";
        axios.get(url)
        .then(res=>{
            console.log(res.data)
            setItems(res.data);
        })
        
    },[]);
    return [items,setItems]
}

export default useItems;