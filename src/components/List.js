import React, {Component} from 'react';
import Detail  from './Detail';
import _ from 'lodash';
class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      // name: ""
    };
    let app = this.props.db.database().ref('โรงพยาบาล/' + this.props.name);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
    console.log(this.props.name);
  }
  setName(name) {
    this.state.setName = name;
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
  render(){
    
    let messageNodes =  this.state.messages.map((message) => {
        return (
            <div className="card" key={message.key}>
              <div className="card-content">
                <Detail message = {message[0]} name = {message.key}/>
              </div>
            </div>
          )
      //   Object.values(value).forEach(element => {
      //     console.log(element)
      //   });
    });
    return (
        <div>
          {messageNodes}
        </div>
    );
  }
}
export default List