import express from 'express'
import { getById } from '../repos/lab-repo.js'
import { checkBody, checkSessionExist } from '../middlewares/lab-middleware.js'
import { updateLabSessionIds } from '../repos/students-repo.js'
import { checkStudentExist } from '../middlewares/students-middleware.js'

const router = express.Router()

router.post('/:sessionId/register', checkBody, checkSessionExist, checkStudentExist, async (req, res) => {
    const { studentId } = req.body
    const { sessionId } = req.params
    
    await updateLabSessionIds(studentId, sessionId)
    
    res.status(201).json({message: 'Student registered'})
})

router.get('/:sessionId', checkSessionExist, async (req, res) => {
    const objectId = req.params
    const result = await getById(objectId.sessionId)
    return res.status(200).json(result)
})

export default router