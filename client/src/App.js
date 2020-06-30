import React from "react";
import axios from "axios";
import "./App.css";
import Book from "./Book";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      API_KEY:`AIzaSyCOFhfX0lDmkWfbXmyS9vXQVLuSEEVMaMg`,
      books:[],
      search:'',
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}:keyes&key=${this.state.API_KEY}&maxResults=20`)
    .then(data=>{
      this.setState({books:data.data.items})   
      console.log(this.state.books)
    })
  }


  handleChange(event){
    this.setState({search:event.target.value})
  }

  

  render(){
    return (
      <div className='App'>
      <form onSubmit={this.handleSubmit} className='search-form'>
        <input placeholder='search for books' className="search-bar" type='text' value ={this.state.search} onChange={this.handleChange}></input>
        <button className="search-button" type='submit'>Search</button>
      </form>
      {this.state.books.map(book=>(
        <Book   key={book.volumeInfo.title}
        title ={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        image={book.volumeInfo.imageLinks.thumbnail} />
      ))}
    </div>
    )
  }

}

export default App;
