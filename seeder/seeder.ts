import Room from '../backend/models/room';
import mongoose from 'mongoose';
import { rooms } from './data';
//require('dotenv').config({path: 'next.config.js}) //if you install env

const seedRooms = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/hotel-booking');

    await Room.deleteMany();
    console.log('Rooms are delted');

    await Room.insertMany(rooms);
    console.log('RRooms are added');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedRooms();
