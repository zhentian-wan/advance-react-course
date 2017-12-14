import React from "react";
import Toggle from './Toggle';
import {Switch} from './Switch';

class App extends React.Component {
    initialState = {
        timesClicked: 0,
        on: false
    };

    state = this.initialState;

    handleToggle = () => {
        const timesClicked = this.state.timesClicked + 1;
        this.setState({
            timesClicked
        });
    };

    cleanTimes = () => {
        this.setState(
            this.initialState
        )
    };

    render() {
        const {on, timesClicked} = this.state;
        return (
            <Toggle
                on={on}
                defaultOn={true}
                onToggle={(on) => {
                    console.log("Toggle", on);
                    this.handleToggle();
                }}
                render={({on, toggle, getProps, reset}) => (
                    <div>
                        {on
                            ? 'The button is on'
                            : 'The button is off'
                        }
                        <Switch on={on} onClick={() => toggle()} {...getProps()} />
                        <hr/>
                        {
                            timesClicked >= 4 ?
                                (
                                    <div>
                                        <p>
                                            <b>'You have click too many times</b>
                                        </p>
                                        <button
                                            {...getProps({
                                                'aria-label': 'Reset'
                                            })}
                                            onClick={
                                                () => {
                                                    reset();
                                                    this.cleanTimes();
                                                }
                                            }>
                                            Reset
                                        </button>
                                    </div>
                                ) :
                                (
                                    <div>
                                        You have clicked {timesClicked} times
                                    </div>
                                )
                        }
                    </div>
                )}
            />
        );
    }
}

export default App;
