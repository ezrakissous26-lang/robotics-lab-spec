import express from 'express'
import { getById } from '../repos/lab-repo.js'
import { checkBody, checkSessionExist } from '../middlewares/lab-middleware.js'
import { checkStudentExist } from '../middlewares/students-middleware.js'
import { updateLabSessionIds, countBySessionId } from '../repos/students-repo.js'

const router = express.Router()

router.post('/:sessionId/register', checkBody, checkStudentExist, checkSessionExist, async (req, res) => {
    const { sessionId } = req.params
    const student = req.student
    const [session] = await getById(sessionId)

    if (student.labSessionsIds?.includes(sessionId)) {
        const count = await countBySessionId(sessionId)
        return res.status(200).json({ remainingSpots: session.capacity - count })
    }

    const count = await countBySessionId(sessionId)
    if (count >= session.capacity) {
        return res.status(409).json({ error: 'Session full', remainingSpots: 0 })
    }

    await updateLabSessionIds(student._id.toString(), sessionId)

    return res.status(201).json({ remainingSpots: session.capacity - count - 1 })
})

router.get('/:sessionId', checkSessionExist, async (req, res) => {
    const { sessionId } = req.params
    const [session] = await getById(sessionId)
    const count = await countBySessionId(sessionId)
    return res.status(200).json({
        id: session.id,
        topic: session.topic,
        dateTime: session.dateTime,
        capacity: session.capacity,
        registeredCount: count,
        remainingSpots: session.capacity - count
    })
})

export default router