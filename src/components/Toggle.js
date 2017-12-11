import React from 'react';
import {Switch} from './Switch';

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
    const {on} = this.state;
    return (
      <Switch on={on} onClick={this.toggle} />
    )
  }
}

export default Toggle;
