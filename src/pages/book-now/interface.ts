export interface IBookingDetails {
  _id: string;
  startTime: string;
  endTime: string;
  place: string;
  transactionId: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
