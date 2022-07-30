import { createContext } from 'react'


const defaultValue = {
    items: {}, 
    addItem(item) { 
        this.items[item.id] = item 
    },
    removeItem(item) { 
        delete this.items[item.id]
        return this.getItemsArr() 
    },
    getItemsArr() { 
        const result = []
        for (let key of Object.keys(this.items)) { 
            result.push(this.items[key])
        }
        return result
    }
}

const MyPageContext = createContext() 

export function MyPageContextProvider({ children }) {
    return <MyPageContext.Provider value={defaultValue}>{children}</MyPageContext.Provider> 
}

export default MyPageContext