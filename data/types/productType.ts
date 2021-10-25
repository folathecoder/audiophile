//TODO: Type => Product Data Types
export interface ProductType {
  id: number;
  slug: string;
  name: string;
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
