import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    title: "Rapide",
    description: "Une stack moderne Next.js pour des pages qui chargent en un clin d'œil.",
  },
  {
    title: "Sécurisé",
    description: "Supabase gère vos données et l'authentification avec des bonnes pratiques intégrées.",
  },
  {
    title: "Prêt à déployer",
    description: "GitHub + Vercel : chaque push met votre landing à jour automatiquement.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <span className="text-xl font-semibold tracking-tight">Savantia</span>
        <a
          href="#waitlist"
          className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Liste d&apos;attente
        </a>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center md:py-32">
          <p className="mb-4 rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300">
            Bientôt disponible
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            L&apos;intelligence au service de votre croissance
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Savantia combine simplicité et puissance pour vous aider à lancer plus
            vite. Rejoignez la liste d&apos;attente pour être prévenu du lancement.
          </p>
          <div id="waitlist" className="mt-10 w-full flex justify-center">
            <WaitlistForm />
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-20 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h2 className="text-lg font-semibold">{feature.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Savantia. Tous droits réservés.
      </footer>
    </div>
  );
}
