import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

function Logo() {
 let navigate = useNavigate();

  return (
    
   <>
       <MenuItem label="Tours" onClick={() => navigate("/")} />
    </>
  )
}

export default Logo
