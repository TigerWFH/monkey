import * as React from 'react';
import {connect} from 'react-redux';

export class Home extends React.Component {
    static defaultProps = {
        name: "defautProps-monkey",
        age: 12
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    // 16.3已经废弃
    // componentWillMount() {
    // }

    static getDerivedStateFromProps(nextProps, preState) {

        console.log("data===>", nextProps);
        return {}
    }

    // 16.3已经废弃
    // componentWillReceiveProps(nextProps) {
    // }

    componentDidMount() {
        console.log("didMount===>", this.props.name);
    }

    // 16.3已经废弃
    // componentWillUpdate() {
    // }

    componentDidUpdate() {

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("prevProps==>", prevProps);

        return {}
    }

    render() {
        return (
            <div>
                <div>Home</div>
                {this.props.name}
                {this.props.age}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const {home = {}} = state;

    return home;
}

export default connect(mapStateToProps)(Home);