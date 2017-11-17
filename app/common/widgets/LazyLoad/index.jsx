/**
 * @name:      LazyLoad
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-18
 * @modify Date:2017-10-27
 * @more:      
 *          1、window.getComputedStyle
 *          2、IntersectionObserver API:用来监控DOM元素是否进入可视区域
 */
import * as React from 'react';

let isDbug = true;

class LazyLoad extends React.Component{
  constructor(props){
    super(props);
    this.scrollParent = null;
    this.scrollParentDom = null;
    this.viewportHeight = 0;
    this.pageYOffset = 0;
  }
  componentDidMount(){
    this.viewportHeight = window.innerHeight;
    this.pageYOffset = window.pageYOffset ? window.pageYOffset : window.scrollY;
    this.scrollParent = window.document;
    if (this.scrollParent !== null){
      this.scrollParent.addEventListener('scroll', this._onHandleScroll);
      if (isDbug){
        console.log('add scroll event...');
      }
    }
  }
  componentWillUnmount(){
    if (isDbug){
      console.log('willUnmount');
    }
    if (this.scrollParent){
      this.scrollParent.removeEventListener('scroll', this._onHandleScroll);
      this.scrollParent = null;
    }
  }
  _onHandleScroll(){
    if (isDbug){
      console.log('--->handlescroll');
    }
  }
  /**
   * @desc 获取最近的具有overflow:scroll/auto属性的父容器
   * @elem DOM元素
   */ 
  _getScrollParent(elem){

  }
  render(){
    return this.props.children;
  }
}

export default LazyLoad;