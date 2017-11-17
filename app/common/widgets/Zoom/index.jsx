/**
 * @name:       Zoom
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-9-13
 * @modify Date: 
 * @function: img尽量使用1:1，否者可能会出现裁剪
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import * as css from './index.less';

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      index: 1
    };
  }
  show = () => {
    this.setState({
      isShow: true
    });
  }
  render() {
    let total = 1;
    let { index } = this.state;
    let style = {
      display: this.state.isShow ? 'block' : 'none'
    };
    return <div className={css['zoom']}
      style={style}>
      <div className={css['imgWrapper']}>
        <i className={css['i']}>
        </i>
        <img className={css['img']}
          src={require('../../res/images/1.jpeg')} />
      </div>
      <div className={css['count']}>
        {`${index}/${total}`}
      </div>
    </div>
  }
}

Zoom.PropTypes = {

};

export default Zoom;