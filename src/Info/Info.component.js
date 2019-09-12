import React from 'react';
import './Info.component.css';

class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberItems: props.numberItems,
      selectedItems: 0
    };
    
  }

  updateInformation = () => {
    this.setState((state) => {
      console.log(state);
      this.state = {
        numberItems: this.props.numberItems
      }
    })
  };



  render() {
    return (
        <div className="Information">
          <p> Number items: {this.state.numberItems} </p>
          <p> Selected items: {this.state.selectedItems} </p>
        </div>
    )
  }
}

export default Info;
