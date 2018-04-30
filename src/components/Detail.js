import React, {Component} from 'react';
class Detail extends Component {
  render(){
    return (
      <div>
        <a href={'tel:' + this.props.message }> 
        <div className="columns is-mobile">
          <div className="column is-three-quarters">
            <div>
              {this.props.name}
            </div>
            <div>
              {this.props.message}
            </div>
          </div>
          <div className="column has-text-centered">
              <img src="https://firebasestorage.googleapis.com/v0/b/hotline-e8448.appspot.com/o/phone.gif?alt=media&token=636d4b4f-7a4f-4dab-a298-07d6562667b2"/>
          </div>
        </div>
        </a>
      </div>
    )
  }
}
export default Detail