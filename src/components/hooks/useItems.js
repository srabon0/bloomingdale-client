import axios from "axios";
import { useContext, useEffect } from "react"
import { ItemContext } from "../../App";

const useItems = ()=>{
    const [items,setItems] = useContext(ItemContext)
    

    useEffect(()=>{

        const getItems = async()=>{
            const url = "https://glacial-dawn-34678.herokuapp.com/items"
            try {
             const {data} = await axios.get(url);
             setItems(data)
             console.log(data)
            } catch (error) {
 
                
            }
 
        }
        getItems();
        
    
        
    },[]);
    return [items,setItems]
}

export default useItems;