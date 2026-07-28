import express from 'express'

export function checkBody(req, res, next) {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({error: 'Body required'})
    } else if (!body.firstName || !body.lastName || !body.className) {
        return res.status(400).json({error: 'Invalid body'})
    } next()
}