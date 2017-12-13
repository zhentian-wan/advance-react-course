import React from "react";
import Toggle from './Toggle';
import {Switch} from './Switch';

const App = () =>
    <Toggle
        onToggle={(on) => console.log("Toggle", on)}
        render={({on, toggle, toggleProps}) => (
            <div>
                {on
                    ? 'The button is on'
                    : 'The button is off'
                }
                <Switch on={on} {...toggleProps} />
                <hr />
                <button {...toggleProps}>
                    {on ? 'on': 'off'}
                </button>
            </div>
        )}
    />;
export default App;
