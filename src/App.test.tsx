import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes';
import {myContext} from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('beer_id 1 is liked',()=>{
  const beerData = React.useContext(myContext)[0].data;
  if(beerData){
    expect( beerData.allBeers[0].FavoriteBeers.beer_id).toEqual("1");
  //  beerData.allBeers[0].FavoriteBeers.beer_id
  }else{
    expect( beerData.allBeers[0].FavoriteBeers.beer_id).toEqual(null);
  }

});
