import React,{Component} from 'react'
import style from './SearchBar.module.css'

class Searchbar extends Component {
    state={
        value:''
    }


//change state.value -> search text input value
handleChange =(e) =>{
    this.setState({value:e.target.value})
    }

//func add text to App->state.query
handleOnSubmit=(event)=>{
    event.preventDefault();
    const {value} = this.state
    if(value.length > 0){
      this.props.addQueryOnSubmit(this.state.value)
    }
  }

render(){

     return (
     
        // <header className={style.Searchbar}>
        <header className={style.Searchbar}>
        <form 
        id="topbox"
        className={style.SearchForm}
        onSubmit={this.handleOnSubmit}
        >
          <button 
            type="submit" 
            className={style['SearchForm-button']}>
               <span 
               className={style['SearchForm-button-label']}>Search</span>
          </button>
      
          <input
            value={this.state.value}
            onChange={this.handleChange}
            className={style['SearchForm-input']}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      
     )
 } 
}

export default Searchbar;
