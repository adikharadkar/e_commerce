export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;

  reviews: Review[];

  returnPolicy: string;
  minimumOrderQuantity: number;

  meta: {
    createdAt: string; // ISO date string
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };

  thumbnail: string;
  images: string[];
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductCardProps {
  title: string;
  thumbnail: string;
  rating: number;
  price: number;
}
