import { createContext, useContext, useState } from "react"

export const usercontext = createContext();

function Context(props) {

  const [data,setdata]=useState([

    {id:1, title: "Book 1", price: 618, originalPrice: 828 },
    {id:2, title: "Book 2", price: 663, originalPrice: 863 },
    {id:3, title: "Book 3", price: 499, originalPrice: 699 },
    {id:4, title: "Book 4", price: 750, originalPrice: 950 },
    {id:5, title: "Book 5", price: 389, originalPrice: 589 },
    {id:6, title: "Book 6", price: 420, originalPrice: 620 },
    {id:7, title: "Book 7", price: 299, originalPrice: 499 },
    {id:8, title: "Book 8", price: 559, originalPrice: 759 },
    {id:9, title: "Book 9", price: 680, originalPrice: 880 },
    {id:10, title: "Book 10", price: 525, originalPrice: 725 }
  
  ]);
  
  return (
    <usercontext.Provider value={[data,setdata]}>
      {
        props.children
      }
    </usercontext.Provider>
  )
}

export default Context