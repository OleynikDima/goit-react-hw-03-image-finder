import React,{Component} from 'react'
import * as basicLightbox from 'basiclightbox'



export default class Modal extends Component {

closeModalWindow = e => {
    if(e.code === `Escape`){
        this.props.onClick()
    }
}

componentDidMount(){
    window.addEventListener('keydown',this.closeModalWindow)
}

componentWillUnmount(){
    window.removeEventListener('keydown', this.closeModalWindow)
}

instance =(urlImage)=> {
    return basicLightbox.create(`
    <div className="Overlay">
        <div className="Modal">
           <img src=${urlImage} alt="" />
         </div>
     </div>`)
}

render(){
    return (
   <div className="Overlay"
        onClick={this.props.onClick}>
           <div className="Modal">
               {this.props.children}
           </div>
     </div>
    )
}
}



