'use server'

import { supabaseCreateClient } from '@/lib/supabase'
import { auth } from '@clerk/nextjs/server'

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth()

    const supabase = supabaseCreateClient()
    const { data, error } = await supabase
        .from('companions')
        .insert({ ...formData, author })
        .select()

    if (error || !data) throw error || new Error('Failed to create companion');
    return data[0]
}