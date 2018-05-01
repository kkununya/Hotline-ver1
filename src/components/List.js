import React, {Component} from 'react';
import Detail  from './Detail';
import Search from './Search';
import _ from 'lodash';
class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      district: 'เขตคลองสามวา'
    };
      let app = this.props.db.database().ref('โรงพยาบาล/'+this.state.district);
      app.on('value', snapshot => {
        this.getData(snapshot.val());
      });
    this.handleSearchChanged = this.handleSearchChanged.bind(this);
  }
  handleSearchChanged(selectedDistrict){
    let app = this.props.db.database().ref('โรงพยาบาล/'+selectedDistrict);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
    this.setState({district: selectedDistrict}, () => {
      console.log(typeof(this.state.district), this.state.district);
    });
  };

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
    });
    return (
        <div>
          <Search messageList={this.props.messageList} callbackParent={(selectedDistrict) => this.handleSearchChanged(selectedDistrict)}/>
          <br/>
          {messageNodes}
        </div>
    );
  }
}
export default List