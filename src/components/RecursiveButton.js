import React, { PureComponent } from "react";

export default class RecursiveButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { moreButtons: false };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const generation = this.props.generation || 0;
    const buttonActionDescription = !this.state.moreButtons
      ? "Создать кнопку!"
      : "Очистить потомков!";
    const buttonClass = !this.state.moreButtons ? "buttonAdd" : "buttonRemove";
    return (
      <>
        <button className={buttonClass} onClick={this.handleClick}>
          <b>{buttonActionDescription}</b> Поколение {generation}{" "}
        </button>
        {this.state.moreButtons && (
          <RecursiveButton generation={generation + 1} />
        )}
      </>
    );
  }
  handleClick() {
    this.setState((prevState) => ({ moreButtons: !prevState.moreButtons }));
  }
}
