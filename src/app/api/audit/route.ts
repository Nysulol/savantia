import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json(
      { error: "Supabase n'est pas configuré." },
      { status: 503 },
    );
  }

  let body: Record<string, string | undefined>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const firstname = body.firstname?.trim();
  const lastname = body.lastname?.trim();
  const email = body.email?.trim().toLowerCase();
  const company = body.company?.trim();
  const volume = body.volume?.trim();
  const need = body.need?.trim();
  const message = body.message?.trim() || null;
  const phone = body.phone?.trim() || null;
  const website = body.website?.trim() || null;

  if (!firstname || !lastname) {
    return NextResponse.json({ error: "Nom incomplet." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!company) {
    return NextResponse.json({ error: "Entreprise requise." }, { status: 400 });
  }
  if (!volume) {
    return NextResponse.json({ error: "Volume requis." }, { status: 400 });
  }
  if (!need || !["email", "sav", "both"].includes(need)) {
    return NextResponse.json({ error: "Besoin invalide." }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("audit_requests").insert({
    firstname,
    lastname,
    email,
    company,
    volume,
    need,
    message,
    phone,
    website,
  });

  if (error) {
    console.error("[audit]", error);
    return NextResponse.json(
      { error: "Impossible d'enregistrer la demande." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
