import { useEffect, useState } from "react";

const UseRecuperation = (url) => {
  const [movie,setMovie] = useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
   //const abort= new AbortController()
   setTimeout(() => {
     setMovie()
       
        }, 2000);
  }
  
  ,[url])

 
  return [movie,loading]
}
export default UseRecuperation;