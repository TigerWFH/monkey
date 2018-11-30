import * as React from 'react';
import Loading from '../../components/Loading';

export class Demo extends React.Component {

    onLoad = () => {
        Loading.mount();
    }
    render() {
        return (
            <div>
                Demo
                <button onClick={this.onLoad}>
                    Loading
                </button>
            </div>
        )
    }
}

export default Demo;