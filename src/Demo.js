import React, { Component } from 'react';
import { connect } from 'react-redux';
import  getAction from './actions/updateName';
import { addItemAction, removeItemAction, updateItemAction } from './actions/ItemActions';
class Demo extends Component{
    constructor(){
            super();
            this.onClick = this.onClick.bind(this);
            this.onAddItem = this.onAddItem.bind(this);
            this.onRemoveItem = this.onRemoveItem.bind(this);
            this.onEditItem = this.onEditItem.bind(this);
            this.onUpdateItem = this.onUpdateItem.bind(this);
        }
        onClick(){
            if(this.inputField.value !== ''){
                this.props.onUpdate(this.inputField.value);
            }else{
                alert('please enter name before submitting');   
            }
        }
    onAddItem(){
        if(this.itemInput.value !== '' && this.inputIdField.value !== ''){
            this.props.onAddItem({name: this.itemInput.value, id: this.inputIdField.value});
        }
        else{
            alert('please enter id and name before save');   
        }
    }
    onRemoveItem(event){
        this.props.onRemoveItem({id: event.target.id});
    }
    onUpdateItem(event){
        this.props.onEditItem({id: event.target.id, name: event.target.name, editMode: 'Y'})
    }
    onEditItem(event){
        this.props.onEditItem({id:this.editIdField.value, name:this.editNameInput.value, editMode: 'N'});
    }
    render(){
        let items = this.props.items;
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div>
                Name: <input ref={ inputField => this.inputField = inputField}></input>
                <button onClick={this.onClick}>Update Name</button>
                </div>
            <hr/>
            <div>
                <h3>Add New Item</h3>
                Id: <input ref={ inputIdField => this.inputIdField = inputIdField}></input>
                Name: <input ref={ itemInput => this.itemInput = itemInput}></input>
                <button onClick={this.onAddItem}>Add Item</button>
            </div>
            <hr/>
            <h3>Items:</h3>
            <div>{items.map(item => {
                return(
                    !(item.hasOwnProperty('editMode')) || item.editMode === 'N' ?
            
                    <div>{item.id} <span/> {item.name}
                            <button id={item.id} name={item.name} onClick={this.onUpdateItem}>Edit</button> 
                            <button id={item.id} onClick={this.onRemoveItem}>Delete</button>
                        </div>
                    :
                   <div>
                        Id: <input value={item.id} ref={ editIdField => this.editIdField = editIdField}></input>
                        Name: <input value={item.name} ref={ editNameInput => this.editNameInput = editNameInput}></input>
                        <button onClick={this.onEditItem}>Update</button>
                    </div>
                        
                    
            );
            }
            )}</div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        name: state.name,
        items: state.items
    }
} 

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: event => dispatch(getAction(event)),
    onAddItem: event => dispatch(addItemAction(event)),
    onRemoveItem: event => dispatch(removeItemAction(event)),
    onEditItem: event => dispatch(updateItemAction(event))
  }
}

//const mapDispatchToProps ()
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
//export default connect(state => {return{name: state.name}})(Demo);