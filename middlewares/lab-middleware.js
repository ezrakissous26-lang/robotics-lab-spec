import express from 'express'
import { getById } from '../repos/lab-repo.js'

export function checkBody(req, res, next) {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({error: 'Body required'})
    } else if (!body.studentId || typeof(body.studentId) !== "string") {
        return res.status(400).json({error: 'Invalid body'})
    } next()
}

export async function checkSessionExist(req, res, next) {
    const objectId = req.params
    const result = await getById(objectId.sessionId)
    if (result.length === 0) {
        return res.status(404).json({error: 'Id not found'})
    } else if (result.code === '22P02') {
        return res.status(400).json({error: result.message})
    } next()
}