/**
 * @name:    Loading  
 * @author:  Monkey
 * @email:   334080374@qq.com
 * @date:    2018-11-30
 * @other: 单例模式，同一时刻仅会出现一个弹框，后续操作覆盖已有操作    
 */
import * as React from 'react';
import Loading from '../../components/Loading';

export class Demo extends React.Component {

    onLoad = () => {
        Loading.mount();
        setTimeout(() => {
            Loading.mount({content: '2s后调用'});
        }, 2000);
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