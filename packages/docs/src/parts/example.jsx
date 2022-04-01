import { Spinbutton, InputSpinner, NumberInputSpinner } from 'semantic-ui-react-spinbutton';
import 'semantic-ui-react-spinbutton/dist/index.css';

export default () => (
    <div>
        <Spinbutton
            orientation='vertical'
            upIcon='caret up'
            downIcon='caret down'
            onUp={handleUp}
            onDown={handleDown}
            onWheel={handleWheel}
        />
        <InputSpinner
            buttonPosition='left'
            buttonOrientation='horizontal'
            onUp={handleUp}
            onDown={handleDown}
            onWheel={handleWheel}
            onKey={handleKey}
        />
        <NumberInputSpinner
            min='0'
            max='100'
            step='5'
            buttonPosition='wrapped'
            buttonOrientation='horizontal'
        />
    </div>
);
