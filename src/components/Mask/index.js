/**
 * @name:    Mask 
 * @author:  Monkey
 * @email:   334080374@qq.com
 * @date:    2018-11-30
 * @other: 类似Loading，也是单例，提前声明    
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './index.module.scss';

let instance = null;

class Mask extends React.Component {
    static show(options) {
        instance.show(options);
    }

    static hide() {
        instance.hide();
    }

    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        this.container.className = styles.root;
        this.container.onclick = this.hide;
        document.body.appendChild(this.container);
        this.state = {
            isShow: false,
            content: undefined
        };
    }

    show = (options) => {
        this.setState({
            ...options
        });
    }

    hide = () => {
        this.setState({
            isShow: false,
            content: undefined
        });
    }

    render() {
        instance = this;
        const isShow = this.state.isShow;
        this.container.style.display = isShow ? 'flex' : 'none';
        return ReactDOM.createPortal(this.state.content, this.container);
    }

    // 在全局声明，关闭app才会调用该页面
    // componentWillUnmount() {
    //     if (!!this.container) {
    //         document.body.removeChild(this.container)
    //         this.container = null;
    //     }
    // }
}

export class MultipleMask extends React.Component {

    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        this.container.className = styles.root;
        this.container.onclick = this.hide;
        document.body.appendChild(this.container);
        this.state = {
            isShow: false,
            content: undefined
        };
    }

    show = (options) => {
        this.setState({
            ...options
        });
    }

    hide = () => {
        this.setState({
            isShow: false,
            content: undefined
        });
    }

    componentWillUnmount() {
        if (!!this.container) {
            document.body.removeChild(this.container);
            this.container = null;
        }
    }

    render() {
        this.container.style.display = this.state.isShow ? 'flex' : 'none';
        return ReactDOM.createPortal(this.state.content, this.container);
    }

    componentWillUnmount() {
        if (!!this.container) {
            document.body.removeChild(this.container)
            this.container = null;
        }
    }
}

export default Mask;