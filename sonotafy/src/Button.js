import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.link}>
        <button>
          {this.props.name}
        </button>
      </a>
    )
  }
}


export default Button;
