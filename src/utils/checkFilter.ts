function CheckFilter(styleFilter : string,country : string,beerStyle:string,beerCountry:string):boolean{
    if(styleFilter==="0" && country==="0")
        return true;
    if(styleFilter==="0"){
        if (country === beerCountry)
            return true;
        return false;
    }
    if(country==="0"){
        if(styleFilter===beerStyle)
            return true;
        return false;
    }
    if(country === beerCountry && styleFilter===beerStyle)
        return true;
    return false;
}
export default CheckFilter;