//TODO: Type => Product Data Types
export interface ProductType {
  id: number;
  cartQuantity: number;
  shortName: string;
  cartIcon: string;
  slug: string;
  name: string;
  subTotal: number;
  image: ImagesTypes;
  category: string;
  categoryImage: ImagesTypes;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludesTypes[];
  gallery: GalleryTypes;
  others: OthersType[];
}

interface IncludesTypes {
  quantity: number;
  item: string;
}
interface GalleryTypes {
  first: ImagesTypes;
  second: ImagesTypes;
  third: ImagesTypes;
}
interface OthersType {
  slug: string;
  name: string;
  image: ImagesTypes;
}
interface ImagesTypes {
  mobile: string;
  tablet: string;
  desktop: string;
}
