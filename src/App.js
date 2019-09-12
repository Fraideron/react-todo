import React from 'react';
import './App.css';
import Item from './Item/Item.component';
import InputSection from './Input_section/Input_section.component.js';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Info from "./Info/Info.component";


class App extends React.Component{

  constructor (props) {
    super(props);
    this.header = "Tododo";
    this.state = {
      items: ['hello']
    };
  }

  addItem = (title) => {
    this.setState((state) => {
      return this.state.items.push(title);
    });
  };


  render() {
    return (
        <div className="App">
          <div className="Content">
            <div className="Todo">
              <div className="Main">
                <div className="Header">
                  {this.header}
                </div>
                <div className="Items" >
                  <PerfectScrollbar>
                    {this.state.items.map((title, i) => <Item title={title} key={i} isChecked="false"/>)}
                  </PerfectScrollbar>
                </div>
                <InputSection addItem={this.addItem}></InputSection>
              </div>
            </div>
            <div className="Info">
              <Info numberItems={this.state.items.length || 0}></Info>
            </div>
          </div>
        </div>

    );
  }

}

export default App;
