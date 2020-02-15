import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes'
import FetchApi from './hooks/fetchData';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {QueryBeers,QueryFavoriteBeers} from './utils/querry';
import './hooks/fetchData';

export const myContext = React.createContext<any>([{beerData :  {}},{favoriteBeer: {}},]);

const App : React.FC= () => {
    
    const value = [FetchApi(QueryBeers),FetchApi(QueryFavoriteBeers)]
    return (
        <myContext.Provider value={ value}>
            <BrowserRouter>    
                <Routes/>
            </BrowserRouter>
        </myContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
