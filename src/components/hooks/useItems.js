import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { ItemContext } from "../../App";

const useItems = ()=>{
    const [items,setItems] = useContext(ItemContext)
    const [loaded,setLoaded] = useState(false)

    useEffect(()=>{
        
        const url = "http://localhost:5000/items";
        axios.get(url)
        .then(res=>{
            console.log(res.data)
            setItems(res.data);
            setLoaded(true)
           
        })
        
    },[]);
    return [items,setItems,loaded,setLoaded]
}

export default useItems;