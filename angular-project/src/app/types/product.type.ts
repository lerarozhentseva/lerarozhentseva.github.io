export interface IProduct {
  id: string;
  name: string;
  img: string;
  size: string;
  sugar: boolean;
  stamp: boolean;
  price: Price,
  details: ProductDetails
}

export interface Price {
  250: number,
  500: number
}

export interface ProductDetails {
  calories: number,
  totalFat: number,
  cholesterol: number,
  sodium: number,
  totalCarbohydrate: number,
  protein: number,
  vitaminD: number,
  cancium: number
}

// export interface SendProduct {
//   productId: string
//   size: string
//   sugar: boolean
//   quantity: number
// }

