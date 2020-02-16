export interface Beer{
    id : string;
    image_path : string;
    style_id : string;
    title : string;
    country_id : string;
    description : string;
    Country : Country;
    Style : Style;
    liked : boolean;
    FavoriteBeers : FavoriteBeer[];
}
export interface Country{
    id : string;
    name : string;
}
export interface Style{
    id : string;
    name : string;
}
export interface FavoriteBeer{
    id : string;
    beer_id : string;
}