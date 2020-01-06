import React from "react";
import { placeholder } from "@babel/types";
import {addMovie} from '../Action'
import {connect} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      key:"",
      image: "",
      title: "",
      star: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    
  }


  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleclick = e => {
    this.props.addMovie({
      key: Date.now(),
      title: this.state.title,
      image: this.state.image,
      star: this.state.star,
      edit:false
    });
    this.setState({
      key:"",
      image: "",
      title: "",
      star: ""
    })
  };

  render() {
    return (
      <div className="addbutton">
      <Button color="danger" onClick={this.toggle} className="addbutton">Add</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
        <ModalBody>
    
        <input
          value={this.state.star}
          name="star"
          onChange={this.handleChange}
          placeholder="rating..."
        />
        <input
          value={this.state.image}
          name="image"
          onChange={this.handleChange}
          placeholder="picture..."
        />
        <input
          value={this.state.title}
          name="title"
          onChange={this.handleChange}
          placeholder="title..."
        />
   
    
        </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleclick}>Add</Button>{' '}
          
          </ModalFooter>
        </Modal>
   
        </div>





    );
  }
}

const d=(dispatch)=>{
    return{
        addMovie:(payload)=>{dispatch(addMovie(payload))
     }
  }}
  
  export default connect(null,d)(Add)