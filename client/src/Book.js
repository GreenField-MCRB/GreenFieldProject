import React from "react";


const Book =({title,author,image,handleClick})=>{
    return (
        <div>
            <h1 className='title'>{title}</h1>
            <h2 className= 'author'>{author}</h2>
            <img src={image} className='bookImage' onClick={handleClick} alt={title}></img>
        </div>
    )
    }
export default Book;