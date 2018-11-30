import * as React from 'react';
import Loading from '../../components/Loading';
import Mask from '../../components/Mask';

export class Demo extends React.Component {

    onLoad = () => {
        Loading.mount();
        setTimeout(() => {
            Loading.mount({content: '2s后调用'});
        }, 2000);
    }

    onMask = () => {
        const options = {
            isShow: true,
            content: 'monkey的小屋'
        }
        Mask.show(options);

        setTimeout(() => {
            const options = {
                isShow: true,
                content: '2s后的monkey的小屋'
            }
            Mask.show(options);
        }, 2000);
    }

    render() {
        return (
            <div>
                Demo
                <button onClick={this.onLoad}>
                    Loading
                </button>
                <button onClick={this.onMask}>
                    Mask
                </button>
            </div>
        )
    }
}

export default Demo;