import React from 'react';
import {Container,Description} from '../../utils/style';
import {myContext} from '../../index';
import {DetailProps} from '../../interface/interface.common';
const Detail : React.FC<DetailProps> =  (props : DetailProps) => {
 
    const id = props.match.params.id

    const beersData = React.useContext(myContext)[0].data;
    return (
        <div>
            {beersData ?
                <div>
                    <div style={{margin:"35px"}}>
                    Beerify / {beersData.allBeers[id].Style.name.split(" ")[1]} / { beersData.allBeers[id].title}
                    </div>
                    <Container >
                        <img style={{margin :"20px"}} src={beersData.allBeers[id].image_path} alt="NO PICTURE" height="50%" width="50%"/>
                        <div>
                            <Description> name : {beersData.allBeers[id].title}</Description>
                            <Description> style : {beersData.allBeers[id].Style.name}</Description>
                            <Description> country : {beersData.allBeers[id].Country.name}</Description>
                            <Description >  {beersData.allBeers[id].description}</Description>
                        </div>
                    </Container>
                </div>
            : null}
        </div>
    );
};

export default Detail;