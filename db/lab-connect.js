import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv/config'

const SECRET_KEY = process.env.SUPABASE_SECRET_KEY
const SUPABASE_URL = process.env.SUPABASE_URL

const supabase = createClient(SUPABASE_URL, SECRET_KEY)

const { data, error } = await supabase.from('sessions').select().limit(1)

if (error) {
    console.error('Failed to connect to Supabase', error.message)
} else {
    console.log('Connected to supabase')
}