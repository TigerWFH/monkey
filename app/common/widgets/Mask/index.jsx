/**
 * @name:       Mask
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

class Mask extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };

  static show(options = {}){
    _getInstance();
  }

  static close(){
    _close();
  }

  render() {
    let { className, style, content } = this.props;
    return (
      <div className={className || css['mask']}
        style={style || null}>
        {content || 'Loading'}
      </div>
    )
  }
}

export default Mask;

let _instance = null;
let _container = null;

function _getInstance(options = {}) {
  if (!_instance) {
    if (!_container) {
      _container = document.createElement('div');
      document.body.appendChild(_container);
    }

    _instance = ReactDOM.render(<Mask {...options} />, _container);
  }

  return _instance;
}

function _close() {
  if (_instance) {
    ReactDOM.unmountComponentAtNode(_container);
    _instance = null;
  }
}