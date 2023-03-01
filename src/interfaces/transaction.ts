export interface UserId {
  _id: string;
  email: string;
  __v: number;
  bio: string;
  createdAt: Date;
  firstName: string;
  lastName: string;
  profileImgUrl: string;
  role: string;
  sid: string;
  stripeCustomerId: string;
  updatedAt: Date;
}

export interface Product {
  productId: string;
  productType: string;
  price: number;
  discount: number;
  title: string;
  description: string;
  meta?: any;
  _id: string;
}

export interface ITransactionDetails {
  _id: string;
  userId: UserId;
  stripePaymentIntent?: any;
  status: string;
  isPaymentProcessed: boolean;
  transactionType: string;
  product?: Product;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
