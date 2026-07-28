import express from 'express'
import { createStudent, getById } from '../repos/students-repo.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const student = req.body
    const result = await createStudent(student)
    console.log(result)
    res.status(201).json({id: result.insertedId})
})

router.get('/:usersId', async (req, res) => {
    const objectId = req.params
    console.log(objectId)
    const result = await getById(objectId.usersId)
    console.log(result)
    res.status(200).json(result)
})

export default router