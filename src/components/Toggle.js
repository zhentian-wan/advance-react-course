import React from 'react';

class Toggle extends React.Component {

  // An empty function
  static defaultProps = {onToggle: () => {}};

  // default state value
  state = {on: false};

  // toggle method
  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => {
        this.props.onToggle(this.state.on)
      }
    );

  render() {
    return this.props.render({
        on: this.state.on,
        toggle: this.toggle,
        toggleProps: {
            'aria-expanded': this.state.on,
            onClick: this.toggle,
        }
    });
  }
}

export default Toggle;
