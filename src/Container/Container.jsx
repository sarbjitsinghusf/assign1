import React from 'react';
import './Container.css'
import Menu from '../Components/Menu/Menu';
import { connect } from 'react-redux';
import Dishes from '../Components/Dishes/Dishes';
function Container(props) {
    if (props.state.length !== 0) {
        return (
            <div className='container'>
                <Menu />
                <Dishes />

            </div>
        );
    }
    return (
        <div className='container'>
            <Menu />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        state: state.dishes
    }
}
export default connect(mapStateToProps)(Container);