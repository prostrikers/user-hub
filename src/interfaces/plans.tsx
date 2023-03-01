export interface LanePricing {
  upTo: number;
  extraPrice: number;
}

export interface OpenFieldBooking {
  upTo: number;
  extraPrice: number;
}

export interface IPlan {
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
