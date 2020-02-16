export const QueryBeers = `
query {
  allBeers {
    id
    title
    description
    style_id
    country_id
    image_path  
    Style{
        id
        name
    }
    Country{
      id
      name
    }FavoriteBeers{
      id
      beer_id
    }
  }
}
`;

export const QueryFavoriteBeers =  `
query {
    allFavoriteBeers  {
      id
      beer_id
    }
  }
`;
export const QueryBeer = (id: string) => `
    query {
        Beer(id:${id}){
            id
            title
            description
            style_id
            country_id
            image_path
            Style{
                id
                name
              }
        }
    }
`