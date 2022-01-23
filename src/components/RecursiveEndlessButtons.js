import React, { PureComponent } from "react";

export default class RecursiveEndlessButton extends PureComponent {
  generation = this.props.generation || 0;

  constructor(props) {
    super(props);
    this.state = { children: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.clearAll);
    if (this.props.clearAll !== prevProps.clearAll) {
      console.log("------");
      this.setState({ children: [] });
    }
  }

  render() {
    const buttonActionDescription = "Создать кнопку!";

    const buttonClass = !this.state.moreButtons ? "buttonAdd" : "buttonRemove";
    return (
      <>
        <button className={buttonClass} onClick={this.handleClick}>
          <b>{buttonActionDescription}</b> Поколение <b>{this.generation}</b>{" "}
        </button>
        {this.state.children}
      </>
    );
  }
  handleClick() {
    const generation = this.generation + 1;
    const index = this.state.children.length;
    this.setState((prevState) => ({
      children: [
        <RecursiveEndlessButton
          clearAll={this.props.clearAll}
          key={index + "_" + generation}
          generation={generation}
        />,
        ...prevState.children,
      ],
    }));
  }
}
