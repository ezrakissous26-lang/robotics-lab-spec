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
    } else {
        console.log(data)
        return data
    }
}