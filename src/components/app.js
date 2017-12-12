import React from "react";
import Toggle from './Toggle';

const App = () =>
    <Toggle onToggle={(on) => console.log("Toggle", on)}>
        <Toggle.On>
            Switch is On!
        </Toggle.On>
        <Toggle.Button />
        <Toggle.Off>
            Switch is Off!
        </Toggle.Off>
    </Toggle>;
export default App;
