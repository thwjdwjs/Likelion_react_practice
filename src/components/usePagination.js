import { useEffect, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"

function usePagination(items) {
    const location = useLocation() 
    const query = useSearchParams() 
    const [pageItems, setPageItems] = useState([]) 
    const [numberOfPagesArr, setNumberOfPageArr] = useState([])  

    useEffect(() => {
        let page = Number(query[0].get("page")) 
        if (!page) {
            page = 0 
        }
        let min = page * 9 
        let max = (page + 1) * 9 

        const chosenItems = items.slice(min, max) 
        const numberOfPages = items.length % 9 === 0 ? items.length / 9 : ((items.length - (items.length % 9)) / 9) + 1 
        setNumberOfPageArr([...new Array(numberOfPages)]) 
        setPageItems(chosenItems)
    }, [location, items]) 

    return {
        pageItems,
        numberOfPagesArr
    }
}

export default usePagination