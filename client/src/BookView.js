import React from "react";


const Bookview =({title,author,image,handleClick,description,link})=>{
    return (
        <div>
            <h1 className='title'>{title}</h1>
            <h2 className= 'author'>{author}</h2>
            <img src={image} className='bookImage' onClick={handleClick} alt={title}></img>
            <h3 className='link'>{link}</h3>
            <h3 className='description'>{description}</h3>
            <button onClick={handleClick}>go Back</button>
        </div>
    )
    }
export default Bookview;