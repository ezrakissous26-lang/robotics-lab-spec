import { MongoClient } from 'mongodb'
import dotenv from 'dotenv/config'

const MONGO_URL = process.env.MONGO_URL

export const client = new MongoClient(MONGO_URL)