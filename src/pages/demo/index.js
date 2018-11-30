import * as React from 'react';
import Loading from '../../components/Loading';
import Mask, { MultipleMask } from '../../components/Mask';

export class Demo extends React.Component {

    onLoad = () => {
        Loading.mount();
        setTimeout(() => {
            Loading.mount({ content: '2s后调用' });
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

    onMultipleMask = () => {
        const options = {
            isShow: true,
            content: 'monkey的小屋'
        }
        this.mMask.show(options);
    }

    onMultipleMask2 = () => {
        const options = {
            isShow: true,
            content: '2222222monkey的小屋'
        }
        this.mMask.show(options);
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
                <button onClick={this.onMultipleMask}>
                    MultipleMask
                </button>
                <button onClick={this.onMultipleMask2}>
                    MultipleMask2
                </button>
                <MultipleMask ref={mask => this.mMask = mask} />
                <MultipleMask ref={mask => this.mMask2 = mask} />
            </div>
        )
    }
}

export default Demo;