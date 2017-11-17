/**
 * @name:       Dialog
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-27
 * @modify Date:
 * @function:   
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as css from './index.less';


class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    };

    static show(options = {}) {
        let instance = _getInstance(options);
    }

    static close() {
        _close();
    }

    render() {
        let { className, style, content, title } = this.props;
        let _style = {
            width: '30%'
        };
        return (
            <div className={css['dialog']}>
                <div className={css['content']}>
                    <div className={css['title']}>
                        {title || 'defaultTitledefaultTitledefaultTitledefaultTitledefaultTitledefaultTitle'}
                    </div>
                    <div className={css['message']}>
                        {content || 'defaultDialog'}
                    </div>
                    <div className={css['footer']}>
                        <button style={_style}>
                            OK
                    </button>
                        <button style={_style}>
                            Cancel
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog;

let _instance = null;
let _container = null;

function _getInstance(options = {}) {
    if (!_instance) {
        if (!_container) {
            _container = document.createElement('div');
            document.body.appendChild(_container);
        }

        _instance = ReactDOM.render(<Dialog {...options} />, _container)
    }

    return _instance;
}

function _close() {
    if (_instance) {
        ReactDOM.unmountComponentAtNode(_container);
        _instance = null;
    }
}