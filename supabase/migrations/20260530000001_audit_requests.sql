-- Table demandes d'audit (idempotent : safe à réexécuter)
create table if not exists public.audit_requests (
  id uuid primary key default gen_random_uuid(),
  firstname text not null,
  lastname text not null,
  email text not null,
  company text not null,
  volume text not null,
  need text not null check (need in ('email', 'sav', 'both')),
  message text,
  phone text,
  website text,
  created_at timestamptz not null default now()
);

alter table public.audit_requests enable row level security;

drop policy if exists "audit_requests_insert_anon" on public.audit_requests;

create policy "audit_requests_insert_anon"
  on public.audit_requests
  for insert
  to anon, authenticated
  with check (true);
