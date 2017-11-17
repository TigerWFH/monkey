import * as React from 'react';
import {connect} from 'react-redux';
import {getMockData} from './action';


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let {getMockData} = this.props;
        getMockData();
    }

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