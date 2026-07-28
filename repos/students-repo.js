import { client } from "../db/students-connect.js";
import { ObjectId } from 'mongodb'

const db = client.db('students')
const students = db.collection('students')

export async function createStudents(body) {
    try {
        const result = await students.insertOne(body)
        console.log(result)
    } catch (e) {
        console.error('Error :', e.message)
    }
}

export async function getById(id) {
    try {
        const result = await students.find({ "_id": new ObjectId(id)}).toArray()
        console.log(result)
    } catch (e) {
        console.error('Error :', e.message)
    }
}

//await createStudents()
// await getById('6a68f118256acaffc50518d2')