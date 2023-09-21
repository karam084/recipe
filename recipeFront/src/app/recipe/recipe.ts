export interface Recipe {
  id:number,
  title:string;
  price:number,
  description:string,
  category:string,
  image:string,
  rating:RatingProps
}

interface RatingProps {
  rate:number,
  count:number
}
