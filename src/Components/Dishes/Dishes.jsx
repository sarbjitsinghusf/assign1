import React from 'react';
import './Dishes.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../Actions/Actions';
function Dishes(props) {

    let rows = props.state.map((info, index) => {
        const { id, name, description } = info //destructuring
        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
            </tr>
        )
    });

    let tab = <table id='ls'>
        <tbody>
            <tr>
                <th>Name: </th>
                <th>Description:</th>
            </tr>
            {rows}
        </tbody>
    </table>;

    return (
        <div id='dis'>
            {tab}
        </div>

    );

}


const mapStateToProps = state => {
    return {
        state: state.dishes
    }
}


export default connect(mapStateToProps)(Dishes);