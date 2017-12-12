import React from 'react';
import {Switch} from './Switch';

const ToggleOn = ({on, children}) => {
  if(on) {
    return (<div>{children}</div>)
  } else {
    return null;
  }
};
const ToggleOff = ({on, children}) => {
    if(on) {
        return null;
    } else {
        return (<div>{children}</div>);
    }
};
const ToggleButton = ({on, toggle, ...props}) => (
    <Switch on={on} onClick={toggle} {...props} />
);

class Toggle extends React.Component {

  // An empty function
  static defaultProps = {onToggle: () => {}};
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;

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
    const children = React.Children.map(
        this.props.children,
        (child) => React.cloneElement(child, {
            on: this.state.on,
            toggle: this.toggle
        })
    );
    return (
        <div> {children} </div>
    )
  }
}

export default Toggle;
