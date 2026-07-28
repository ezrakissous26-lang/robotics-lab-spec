import { client } from "../db/students-connect.js";
import { ObjectId } from 'mongodb'

const db = client.db('students')
const students = db.collection('students')

export async function createStudent(body) {
    const student = {
        ...body,
        labSessionsIds: []
    }
    try {
        const result = await students.insertOne(student)
        return result
    } catch (e) {
        console.error('Error :', e.message)
    }
}

export async function getById(id) {
    try {
        const result = await students.find({ "_id": new ObjectId(id)}).toArray()
        console.log(result)
        return result
    } catch (e) {
        console.error('Error :', e.message)
    }
}

export async function getAll() {
    try {
        const result = await students.find().toArray()
        console.log(result)
    } catch (e) {
        console.error('Error :', e.message)
    }
}

export async function updateLabSessionIds(studentId, sessionId) {
    try {
        const result = await students.updateOne(
            {_id: new ObjectId(studentId)},
            {$push: { labSessionsIds: sessionId}})
            console.log(result)
    } catch (e) {
        console.error('Error :', e.message)
    }
}


//await createStudents()
// await getById('6a68f118256acaffc50518d2')


// await updateLabSessionIds('6a68f13a1fe080baabf8264e', '90e89f5c-1cdb-4865-8074-ce68234b7d9e')

// await getAll()