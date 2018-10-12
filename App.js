import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./src/reducer/index";
import {SalutationContainer} from "./src/container/updateSalutation";

const store = createStore(reducer)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SalutationContainer />
            </Provider>
        );
    };
}

