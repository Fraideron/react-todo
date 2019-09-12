import React from 'react';
import './Item.component.css';
import Checkbox from '@material-ui/core/Checkbox';


class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: !props.isChecked 
    };
    console.log(props);
  }


  handleChange = () => {
    this.setState({isChecked: !this.state.isChecked})
    console.log(this.isChecked);
  };

  render() {
      const isChecked = this.state.isChecked ? 'isChecked Item' : 'Item';
      return (
      <div className={isChecked} >
        <Checkbox
            onChange={this.handleChange}
            color="primary"
          />
        <div  
          className="Title"
        >
          {this.props.title}
        </div>
      </div>
    )
  }
}

export default Item;
