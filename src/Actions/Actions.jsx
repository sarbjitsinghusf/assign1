import axios from 'axios';
export const MENU_FETCH = 'MENU_FETCH';
export const DISHES_FETCH = 'DISHES_FETCH';
export const menuFetch = (men) => {
    return {
        type: MENU_FETCH,
        value: men
    }
};
export const dishesFetch = (dish) => {
    return {
        type: DISHES_FETCH,
        value1: dish
    }

}
export const menu = () => {
    return dispatch => {
        return axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/category`)
            .then(res => {
                const men = res.data;
                dispatch(menuFetch(men));
            });

    };
};
export const dishes = (cat) => {
    return dispatch => {
        return axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${cat}`)
            .then(res => {
                const dish = res.data;
                dispatch(dishesFetch(dish));
            });
    }

}

