import axios from "axios";
import { useContext, useEffect } from "react"
import { ItemContext } from "../../App";

const useItems = ()=>{
    const [items,setItems] = useContext(ItemContext)
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