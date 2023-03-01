export interface LanePricing {
  upTo: number;
  extraPrice: number;
}

export interface OpenFieldBooking {
  upTo: number;
  extraPrice: number;
}

export interface Plan {
  _id: string;
  planName: string;
  redeemableCage: number;
  indoorField: number;
  lanePricing: LanePricing;
  openFieldBooking: OpenFieldBooking;
  price: number;
  stripePlanId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IUser {
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
  plan?: Plan;
  phoneNumber: string;
}
