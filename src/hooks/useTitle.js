import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Duplo toy | ${title}`;
    },[title])
}
export default useTitle;