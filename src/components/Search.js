import React, {Component} from 'react';
import _ from 'lodash';
class Search extends Component {
  constructor(props){
    super(props);
    this.state  = {
      messages: [],
      value: ''
    };
    let app = this.props.db.database().ref('โรงพยาบาล')
    app.on('value', snapshot => {
        this.getData(snapshot.val());
        var name = snapshot.key;
    });
  }
  getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                    .keys()
                    .map(messageKey => {
                      let cloned = _.clone(messagesVal[messageKey]);
                      cloned.key = messageKey;
                      return cloned;
                    }).value();
    this.setState({
      messages: messages
    });
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    let messageNodes = this.state.messages.map((message) => {
      return (
          <option key={message.key}>{message.key}</option>
        )
      });
      return (
        <div>
          <div className="columns is-mobile is-centered">
            <div className="select is-rounded">
              <select value="this.state.value" onChange={this.handleChange}>
                {messageNodes}
              </select>
            </div>
          </div>
        </div>
      );
  }
}
export default Search