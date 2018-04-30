import React, {Component} from 'react';
import _ from 'lodash';
class DetailListContainer extends Component {
  constructor(props){
    super(props);
    this.state  = {
      messages: []
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
  render(){
    return (
      <div>
      </div>
    )
  }
}
export default DetailListContainer