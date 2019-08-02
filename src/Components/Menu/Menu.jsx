import React from 'react';
import './Menu.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../Actions/Actions'
class Menu extends React.Component {

    componentDidMount() {
        this.props.MENU_FETCH();
    }
    render() {
        let list = this.props.state.map((info, index) => <li onClick={() => { this.props.DISHES_FETCH(info.short_name) }} key={index}>{info.name}({info.short_name})</li>);

        let unorderedList = <ul>{list}</ul>;

        return (
            <div className='fetch'>
                <ul>
                    <h1>Menu Categories</h1>
                    {unorderedList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state.menu
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        MENU_FETCH: () => { dispatch(actionCreators.menu()) },
        DISHES_FETCH: (cat) => { dispatch(actionCreators.dishes(cat)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);