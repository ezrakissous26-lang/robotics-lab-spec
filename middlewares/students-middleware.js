import express from 'express'
import { getById } from '../repos/students-repo.js'

export function checkBody(req, res, next) {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({error: 'Body required'})
    } else if (!body.firstName || !body.lastName || !body.className) {
        return res.status(400).json({error: 'Invalid body'})
    } next()
}

export async function checkStudentExist(req, res, next) {
    const { studentId } = req.body
    const objectId = req.params.studentId
    const student = await getById(studentId || objectId)
    if (!student || student.length === 0) {
        return res.status(404).json({error: 'Student not found'})
    } next()
}