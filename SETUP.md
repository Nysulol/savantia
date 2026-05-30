# Savantia — Mise en place (Next.js + Supabase + GitHub + Vercel)

## 1. Développement local

```bash
cd c:\Users\Inusa\Videos\Savantia
npm install
copy .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## 2. Supabase

1. Créer un compte sur [supabase.com](https://supabase.com).
2. **New project** → nom `savantia` (région proche de vos utilisateurs).
3. **Project Settings → API** : copier **Project URL** et **anon public** dans `.env.local`.
4. **SQL Editor** → coller le contenu de `supabase/migrations/20260530000000_waitlist.sql` → **Run**.
5. Tester le formulaire sur la landing : l’e-mail doit apparaître dans **Table Editor → waitlist**.

### Variables Vercel (même projet Supabase)

Dans le dashboard Vercel du projet, **Settings → Environment Variables** :

| Nom | Valeur |
|-----|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | clé anon (publique) |

Redéployer après ajout des variables.

## 3. GitHub

Le dépôt est poussé sur GitHub (compte **Nysulol**). Pour cloner ailleurs :

```bash
git clone https://github.com/Nysulol/savantia.git
```

## 4. Vercel

1. Installer la CLI (une fois) : `npm install -g vercel`
2. Se connecter : `vercel login`
3. Lier le projet depuis le dossier Savantia :

```bash
cd c:\Users\Inusa\Videos\Savantia
vercel link
vercel env pull .env.local   # optionnel : récupérer les vars depuis Vercel
```

**Ou** via l’interface (recommandé pour GitHub ↔ Vercel) :

1. [vercel.com/new](https://vercel.com/new)
2. **Import Git Repository** → choisir `Nysulol/savantia`
3. Framework : **Next.js** (détecté automatiquement)
4. Ajouter les variables Supabase (section 2)
5. **Deploy** — chaque `git push` sur `main` redéploie le site.

## 5. Landing HTML existante

Le mockup statique est dans `c:\Users\Inusa\Documents\Landing\` (`Savantia Landing.html`).  
Prochaine étape : migrer les sections vers des composants React dans `src/`.

## Checklist rapide

- [ ] `.env.local` rempli
- [ ] Migration SQL exécutée sur Supabase
- [ ] `npm run build` OK en local
- [ ] Dépôt GitHub créé et poussé
- [ ] Projet Vercel importé depuis GitHub
- [ ] Variables d’environnement sur Vercel
- [ ] URL de production testée (formulaire waitlist)
