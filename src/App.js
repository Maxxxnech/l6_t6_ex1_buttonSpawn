import React, { PureComponent } from "react";
import "./App.css";

import RecursiveButton from "./components/RecursiveButton";
import RecursiveEndlessButton from "./components/RecursiveEndlessButtons";
class App extends PureComponent {
  constructor(){
    super();
    this.state={clearAll: false}
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="button-wrapper">
          <h2>Обратимое порождение, один потомок</h2>
          <RecursiveButton />
        </div>
        <div className="button-wrapper">
          <h2>Бесконечное порождение и потомки</h2>
          <button className="buttonRemove" onClick={this.handleClick}>Очистить</button>
          <RecursiveEndlessButton clearAll={this.state.clearAll}/>
        </div>
      </div>
    );
  }
  handleClick(){
      this.setState(prevState=>({clearAll: !prevState.clearAll}))
  }
}

export default App;
