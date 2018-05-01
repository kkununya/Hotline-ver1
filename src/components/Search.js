import React, {Component} from 'react';
import List from './List';
import _ from 'lodash';
import firebase from 'firebase';
class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      val: ''
    };
  }
  handleChange(event) {
    // this.setState({value: event.target.selectedOption})
    let val = event.target.value;
    console.log(event.target.value);
    render: function(){
      return(
        <List >
      );
    }
  }
  render(){
    console.log(this.props.messageList);
    let messageNodes = this.props.messageList.map((message) => {
      return (
          <option value={message.key} key={message.key}>{message.key}</option>
        )
      });
      return (
        <div>
          <div className="columns is-mobile is-centered">
            <div className="select is-rounded">
              <select value={messageNodes.messagesVal} onChange={this.handleChange}>
                {messageNodes}
              </select>
            </div>
          </div>
          <List db={firebase} name={this.state.val}/>
        </div>
      );
  }
}
export default Search