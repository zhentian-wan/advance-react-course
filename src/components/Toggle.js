import React from 'react';

class Toggle extends React.Component {

    // An empty function
    static defaultProps = {
        defaultOn: false,
        onToggle: () => {
        }
    };

    // default state value
    initialState = {on: this.props.defaultOn};
    state = this.initialState;

    isControlled() {
        return this.props.on !== undefined;
    }

    // toggle method
    toggle = () =>{
      if (this.isControlled()) {
        this.props.onToggle(!this.props.on)
      } else {
          this.setState(
              ({on}) => ({on: !on}),
              () => {
                  this.props.onToggle(this.state.on)
              }
          );
      }
    };


    reset = () => this.setState(
        this.initialState
    );

    render() {
        return this.props.render({
            on: this.isControlled() ?
                    this.props.on :
                    this.state.on,
            toggle: this.toggle,
            reset: this.reset,
            getProps: (props) => {
                return {
                    'aria-expanded': this.state.on,
                    role: 'button',
                    ...props
                };
            }
        });
    }
}

export default Toggle;
