import React, {Component} from 'react';
import Box from './components/box';
import style from './css/main.scss';


class App extends Component {
    render() {
        return(
        <div   className={style.app}>
            <Box />
        </div>
        )
    }
}
export default App