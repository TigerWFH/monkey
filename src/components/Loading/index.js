import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from './index.module.scss';

function Loading(props) {
    return (
        <div className={styles.root}>
            {props.content || '数据加载中...'}
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