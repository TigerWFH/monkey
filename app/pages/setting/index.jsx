import * as React from 'react';
import PropTypes from 'prop-types';


export default class Setting extends React.Component{
    constructor(props){
        super(props)
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount(){
        console.log('settings:', this.context);
    }

    render(){
        return (
            <div>
                Settings
            </div>
        )
    }
}