import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const text = e.target.value;
    this.props.onClick(text);
  }

  render() {
    return (
      <div>
        <form onClick={this.handleClick}>
          <input type="radio" id="fast" value="fast" name="speed" />Fast
          <input type="radio" id="slow" value="slow" name="speed" />Slow
          <input type="radio" id="cute" value="cute" name="speed" />Cute
          <input type="radio" id="eek" value="eek" name="speed" />Eek
        </form>
      </div>
    )
  }
}
