import mongoose, { Document, Schema, mongo } from 'mongoose';

export interface ILocation {
  type: string;
  coordinates: number[];
  formattedAddress: string;
  city: string;
  state: string;
  zipcode: string;
  countrys: string;
}
export interface IImage extends Document {
  public_id: string;
  url: string;
}
export interface IReview extends Document {
  // user: IUser;
  rating: number;
  comment: string;
}
export interface IRoom extends Document {
  //put I in front od room (IRoom) to mention it is an interface
  name: string;
  description: string;
  pricePerNight: number;
  address: String;
  location: ILocation;
  guestCapcacity: string;
  numOfBeds: number;
  isInternet: boolean;
  isBreakfast: boolean;
  isAirConditioned: boolean;
  isPetsAllowed: boolean;
  isRoomCleaning: boolean;
  ratings: number;
  numOfReviews: number;
  images: IImage[];
  category: string;
  reviews: IReview[];
  user: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}
const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter room name'],
    trim: true, //remove all blank space from starting and ending
    maxLength: [200, 'Room name can not exceed 200 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please enter room description'],
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please enter room price per night'],
    default: 0.0,
  },
  address: {
    type: String,
    required: [true, 'Please enter room address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere', //in mongo it means geo special data
    },
    formattedAddress: String,
    city: String,
    state: String,
    zipcode: String,
    countrys: String,
  },
  guestCapcacity: {
    type: Number,
    required: [true, 'Please enter room guest capacity'],
  },
  numOfBeds: {
    type: Number,
    required: [true, 'Please enter number of beds'],
  },
  isInternet: {
    type: Boolean,
    default: false,
  },
  isBreakfast: {
    type: Boolean,
    default: false,
  },
  isAirConditioned: {
    type: Boolean,
    default: false,
  },
  isPetsAllowed: {
    type: Boolean,
    default: false,
  },
  isRoomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'please enter category'],
    enum: {
      values: ['King', 'Single', 'Twins'],
      message: 'Please enter correct category for room',
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      reating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room || mongoose.model<IRoom>('Room', roomSchema);
