import React from 'react';
import {myContext} from '../../index';
const Detail : React.FC=  (props : any) => {
    const id = props.match.params.id
    const beersData = React.useContext(myContext)[0].data;
    return (
        <div>
            {beersData ?
                <div style={{margin:30}}>
                    Beerify / {beersData.allBeers[id].Style.name} / { beersData.allBeers[id].title}
                    <div style={{display:'flex'}}>
                        <img src={beersData.allBeers[id].image_path} alt="NO PICTURE" height="50%" width="50%"/>
                        <div>
                            <div style={{display:'inline'}}> name : {beersData.allBeers[id].title}</div>
                            <div> style : {beersData.allBeers[id].Style.name}</div>
                            <div> country : {beersData.allBeers[id].Country.name}</div>
                            <div> description : {beersData.allBeers[id].description}</div>
                        </div>
                    </div>
                </div>
            : null}
        </div>
    );
};

export default Detail;