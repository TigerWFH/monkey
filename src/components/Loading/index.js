/**
 * @name:    Loading  
 * @author:  Monkey
 * @email:   334080374@qq.com
 * @date:    2018-11-30
 * @other: 单例模式，同一时刻仅会出现一个弹框，后续操作覆盖已有操作    
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from './index.module.scss';

const TEXT = '数据加载中...';

function Loading(props) {
    return (
        <div className={styles.root}>
            {props.content || TEXT}
        </div>
    )
}

Loading.mount = function(options) {
    let _instance = getInstance(options);

    return _instance
};

Loading.unmount = function() {
    ReactDOM.unmountComponentAtNode(container);
    instance = null;
}

let container = null;
let instance = null;

function getInstance(options) {
    if (!instance) {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
        }

        instance = ReactDOM.render(<Loading {...options} />, container);
    }

    return instance;
}

export default Loading;