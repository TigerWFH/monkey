import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMockData} from './action';


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let {getMockData} = this.props;
        getMockData();
        console.log('llll****--->', this.context.router);
    }
    static contextTypes = {
        router: PropTypes.object
    };

    render(){
        return (
            <div>
                Home
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    let {home} = state;
    return home;
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        getMockData: ()=>{
            dispatch(getMockData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);