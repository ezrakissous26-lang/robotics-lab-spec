import { supabase } from "../db/lab-connect.js";

export async function createSessions(body) {
    const { data, error } = await supabase.from('sessions').insert(body).select()
    if (error) {
        console.error('Failed:', error)
        return error
    } else {
        console.log(data)
        return data
    }
}

export async function getById(id) {
    const { data, error } = await supabase.from('sessions').select().eq('id', id)
    if (error) {
        console.error('Failed:', error)
        return error
    } else {
        return data
    }
}

export async function registerToSession(sessionId) {
    const [session] = await getById(sessionId)
    if (session.registered_count >= session.capacity) {
        return { full: true, remainingSpots: 0 }
    }
    const newCount = session.registered_count + 1
    const { error } = await supabase
        .from('sessions')
        .update({ registered_count: newCount })
        .eq('id', sessionId)
    if (error) {
        console.error('Failed:', error)
        return { error }
    }
    return { full: false, remainingSpots: session.capacity - newCount }
}