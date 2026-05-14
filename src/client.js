import { createClient } from '@supabase/supabase-js';

const URL = 'https://nvwdycwynumowzbbafla.supabase.co';

const API_KEY = 'sb_publishable_hfOtnfBfY5Pfcc66ostNpA_egfoo-8p';


export const supabase = createClient(URL, API_KEY);