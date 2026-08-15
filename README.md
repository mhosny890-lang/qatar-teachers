# Qatar Teachers
Bilingual Arabic/English tutoring marketplace for Qatar.

## Admin
- URL: `/admin/login`
- Username: `hosn890`
- Password: `12345dsA`

> For production, set these in environment variables and change the password after first login.

## Setup
1. `npm install`
2. copy `.env.example` to `.env.local`
3. set Supabase variables
4. run `supabase-schema.sql` in Supabase SQL editor
5. `npm run dev`

## Main routes
- `/`
- `/holy-quran`
- `/teachers`
- `/teachers/1`
- `/centers`
- `/register`
- `/login`
- `/teacher-dashboard`
- `/admin/login`
- `/admin/dashboard`
