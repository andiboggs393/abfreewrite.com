import React from "react"
import './books.css'
import books from './components/books_list'
import CoverArt from './components/CoverArt'
import InterestingQuote from "./InterestingQuote"

function Books() {

    const libItems = books.map(item => <div className="inLine"><div><h3>{item.genre}</h3></div><a href={item.link}><CoverArt key={item.id} item={item}/></a></div>) 


    return (
        <div>
            <h1 className="books">Books</h1>
            {libItems}
            {/* <InterestingQuote/> */}
        </div>
    )

}


export default Books