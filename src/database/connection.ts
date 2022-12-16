import { PostgrestClient } from '@supabase/postgrest-js';
import { DATABASE_URI } from 'src/database/constants';

export const supabase = new PostgrestClient(DATABASE_URI);
