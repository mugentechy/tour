import axios from 'axios'
import { url } from "../../utils/url"


export const getReservation= async (listing_id) => {
    try {
        
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.get(`${url}/reservation/${listing_id}`, config)     

        return data
    } catch(e) {
       
        throw e;
    }
}


