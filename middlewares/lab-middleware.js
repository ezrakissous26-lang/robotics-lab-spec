// import express from 'express'
// import { supabase } from '../db/lab-connect.js'

// export async function checkGoodParams(req, res, next) {
//     const {sessionId} = req.params
//     console.log(typeof(sessionId))
//     console.log(sessionId)
//     const { data , error } = await supabase.from('sessions').select().eq('id', sessionId)
//     console.log(data)
//     console.log(error)
//     if (data.length === 0) {
//         return res.status(404).json({error: 'SessionId not found'})
//     } next()
// }