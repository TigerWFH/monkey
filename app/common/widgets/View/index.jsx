/**
 * @name:       View
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       
 * @modify Date:2017-10-27
 * @function:   
 */
import * as React from 'react';

import * as css from './index.less';

function View(props) {
    return <div className={css['view']}>
        {props.children}
    </div>
}

export default View;