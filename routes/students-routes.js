import express from 'express'
import { createStudent, getById } from '../repos/students-repo.js'
import { checkBody, checkStudentExist } from '../middlewares/students-middleware.js'

const router = express.Router()

router.post('/', checkBody, async (req, res) => {
    const student = req.body
    const result = await createStudent(student)
    console.log(result)
    res.status(201).json({id: result.insertedId})
})

router.get('/:usersId', async (req, res) => {
    const { usersId } = req.params
    const result = await getById(usersId)
    if (!result || result.length === 0) {
        return res.status(404).json({ error: 'Student not found' })
    }
    const student = result[0]
    return res.status(200).json({
        id: student._id,
        firstName: student.firstName,
        lastName: student.lastName,
        className: student.className,
        labSessionsIds: student.labSessionsIds
    })
})

export default router