import React from "react";
import Toggle from './Toggle';
import {Switch} from './Switch';

const App = () =>
    <Toggle
        onToggle={(on) => console.log("Toggle", on)}
        render={({on, toggle}) => (
            <div>
                {on
                    ? 'The button is on'
                    : 'The button is off'
                }
                <Switch on={on} onClick={toggle} />
            </div>
        )}
    />;
export default App;
