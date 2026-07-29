import { getById } from '../repos/students-repo.js'

export function checkBody(req, res, next) {
    const body = req.body
    if (!body) {
        return res.status(400).json({error: 'Body required'})
    } else if (!body.firstName || !body.lastName || !body.className) {
        return res.status(400).json({error: 'Invalid body'})
    }
    next()
}

export async function checkStudentExist(req, res, next) {
    const { studentId } = req.body
    if (!studentId || typeof studentId !== 'string') {
        return res.status(400).json({error: 'Invalid body'})
    }
    const students = await getById(studentId)
    if (!students || students.length === 0) {
        return res.status(404).json({error: 'Student not found'})
    }
    req.student = students[0]
    next()
}