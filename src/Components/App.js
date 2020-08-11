import React,{Component} from 'react';
import Section from './Section/';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import axiosApi from './Service/AxiosAPI'
import LoaderBtn from './Button'
import Loader from './Loader';
import { animateScroll as scroll} from 'react-scroll'


import Modal from './Modal';
import './App.css';




//to do axios in component
// to do style
class App extends Component {

  state={
    articles:[],
    query:'',
    page:1,
    loading:false,
    showModal:false,
    url:''
  }


  toogleModal =()=>{
    this.setState(state => ({showModal:!state.showModal }))
  }
  //add text search
handleAddQuery = (text) =>{
    this.setState({
      query:text,
      page:1,
      articles:[],
    })
}

componentDidUpdate(prevProps,prevState){
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
       if(prevQuery !== nextQuery){
         this.AxiosArticles();
       }
}

AxiosArticles = () => {
  const {query, page} = this.state
  //
  this.setState({loading:true});
  //запрос на сервер 
    axiosApi
       .axiosApiWithQuery(query, page)
       .then(data => this.setState(prevState => {
         return {
          articles:[...prevState.articles,...data],
          page:prevState.page + 1
         }}))
       .catch(error => this.setState({error}))  
       .finally(()=>this.setState({loading:false})) 

  }

 handleClick = () =>{
   this.AxiosArticles();
   scroll.scrollToBottom();
 }


 handleAddUrlToModal= (url) =>{ 
   this.toogleModal();
   this.setState(preveState => ({url:preveState.url = url}))
}

  render(){
   const {articles,loading,showModal,url} = this.state
   
  return (
    <>
     <Section>
        <Searchbar 
            addQueryOnSubmit={this.handleAddQuery}/>
        </Section>

        <Section> 
         
          {loading && <Loader/>}
          {articles.length > 0 && <ImageGallery  array={articles} onClick={this.handleAddUrlToModal}/> }
          {articles.length > 0 && <LoaderBtn onClick={this.handleClick}/> }
          {showModal && <Modal  onClick={this.toogleModal}> <img src={url} alt="" /> </Modal>}
        </Section>
    </>
   )
 }
}

export default App;
