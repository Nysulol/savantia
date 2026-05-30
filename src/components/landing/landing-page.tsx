import type { CSSProperties } from "react";
import { AuditForm } from "./audit-form";
import { Icon } from "./icon-sprite";
import { LandingEffects } from "./landing-effects";
import { LandingHeader } from "./landing-header";

function Stars() {
  return (
    <>
      <Icon id="i-star" />
      <Icon id="i-star" />
      <Icon id="i-star" />
      <Icon id="i-star" />
      <Icon id="i-star" />
    </>
  );
}

export function LandingPage() {
  return (
    <>
      <LandingEffects />
      <LandingHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="badge green reveal">
                <Icon id="i-zap" /> Réponse client en quelques minutes, 24/7
              </span>
              <h1 className="h1 reveal d1">
                Vos emails et votre SAV tournent en autopilote
              </h1>
              <p className="lead reveal d2">
                Savantia conçoit des workflows IA sur mesure qui traitent 60 à 80
                % de vos emails et demandes support — sans perdre la touche
                humaine, sans recruter.
              </p>
              <div className="hero-cta reveal d3">
                <a href="#contact" className="btn btn-primary">
                  Réserver un appel gratuit <Icon id="i-arrow" className="ico" />
                </a>
                <a href="#process" className="btn btn-ghost">
                  Voir comment ça marche
                </a>
              </div>
              <div className="hero-proof reveal d4">
                <div className="avatars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p>
                  Déjà adopté par <strong>+50 entreprises</strong> e-commerce
                  &amp; SaaS
                </p>
              </div>
            </div>

            <div className="hero-visual reveal d2">
              <div className="mock">
                <div className="mock-bar">
                  <span />
                  <span />
                  <span />
                  <div className="mock-url">app.savantia.fr · Boîte unifiée</div>
                </div>
                <div className="mock-body">
                  <aside className="mock-side">
                    <div className="mock-side-item active">
                      <Icon id="i-inbox" /> Boîte<span className="m-count">128</span>
                    </div>
                    <div className="mock-side-item">
                      <Icon id="i-spark" /> Auto-traités
                      <span className="m-count green">96</span>
                    </div>
                    <div className="mock-side-item">
                      <Icon id="i-users" /> À escalader
                      <span className="m-count">7</span>
                    </div>
                    <div className="mock-side-item">
                      <Icon id="i-trend" /> Statistiques
                    </div>
                  </aside>
                  <div className="mock-main">
                    <div className="mock-thread">
                      <div className="mt-from">
                        <span className="mt-ava">M</span>
                        <div>
                          <b>Marie L.</b>
                          <i>Où en est ma commande #8842 ?</i>
                        </div>
                        <span className="mt-time">il y a 1 min</span>
                      </div>
                      <div className="mt-ai">
                        <div className="mt-ai-head">
                          <Icon id="i-spark" /> Réponse rédigée par Savantia IA
                        </div>
                        <p>
                          Bonjour Marie, votre commande <b>#8842</b> a été expédiée
                          hier et arrive <b>demain avant 18h</b>. Voici le suivi :{" "}
                          <span className="mt-link">colissimo.fr/8842…</span>
                        </p>
                        <div className="mt-typing">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="mt-status">
                        <Icon id="i-check-c" /> Envoyé automatiquement · confiance
                        98%
                      </div>
                    </div>
                    <div className="mock-stat">
                      <div className="ms-ring" style={{ "--p": 73 } as CSSProperties}>
                        <span>73%</span>
                      </div>
                      <div>
                        <b>Traités sans humain</b>
                        <i>cette semaine · 412 messages</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-chip chip-a">
                <Icon id="i-clock" /> Délai moyen <b>1 min 40</b>
              </div>
              <div className="float-chip chip-b">
                <Icon id="i-trend" /> CSAT <b>+40%</b>
              </div>
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Garanties et intégrations">
          <div className="wrap trust-in">
            <p className="trust-label">
              Conçu pour s&apos;intégrer à votre stack — en toute confiance
            </p>
            <div className="trust-row">
              <span className="badge green">
                <Icon id="i-clock" /> Réponse &lt; 2 min
              </span>
              <span className="badge">
                <Icon id="i-shield" /> Conforme RGPD
              </span>
              <span className="badge">
                <Icon id="i-headset" /> Support 24/7
              </span>
              <span className="trust-sep" aria-hidden="true" />
              {["Shopify", "Gmail", "Zendesk", "Intercom", "Outlook"].map(
                (name) => (
                  <span key={name} className="logo-pill">
                    {name}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="section ps">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">
                <span className="dot" /> Le constat
              </span>
              <h2 className="h2">Votre support déborde. Vos clients attendent.</h2>
              <p className="lead">
                Chaque email non traité est un client qui doute. Savantia transforme
                vos points de friction en réponses instantanées et fiables.
              </p>
            </div>
            <div className="ps-grid">
              <div className="ps-col ps-pain reveal">
                <p className="ps-col-label">
                  <Icon id="i-alert" /> Aujourd&apos;hui
                </p>
                <ul className="ps-list">
                  <li>
                    <b>Inbox saturée</b>
                    <span>
                      Des centaines d&apos;emails s&apos;accumulent, les demandes
                      urgentes se noient dans la masse.
                    </span>
                  </li>
                  <li>
                    <b>SAV débordé</b>
                    <span>
                      L&apos;équipe répond toujours aux mêmes questions, sans
                      jamais reprendre le dessus.
                    </span>
                  </li>
                  <li>
                    <b>Clients insatisfaits</b>
                    <span>
                      Délais de réponse en heures voire en jours — la frustration
                      monte, les avis tombent.
                    </span>
                  </li>
                  <li>
                    <b>Coûts qui explosent</b>
                    <span>
                      Recrutements, turnover, heures supplémentaires : le support
                      coûte de plus en plus cher.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="ps-arrow" aria-hidden="true">
                <Icon id="i-arrow" />
              </div>
              <div className="ps-col ps-sol reveal d1">
                <p className="ps-col-label on-green">
                  <Icon id="i-spark" /> Avec Savantia
                </p>
                <ul className="ps-list">
                  <li>
                    <b>Tri &amp; réponse automatiques</b>
                    <span>
                      L&apos;IA lit, comprend et répond ou priorise chaque message
                      en quelques secondes.
                    </span>
                  </li>
                  <li>
                    <b>80 % du volume absorbé</b>
                    <span>
                      Les demandes répétitives sont traitées seules — votre équipe
                      se concentre sur l&apos;essentiel.
                    </span>
                  </li>
                  <li>
                    <b>Réponse en minutes, 24/7</b>
                    <span>
                      Nuit, week-end, pics d&apos;activité : vos clients sont servis
                      sans interruption.
                    </span>
                  </li>
                  <li>
                    <b>Un coût maîtrisé</b>
                    <span>
                      Vous absorbez la croissance sans gonfler l&apos;équipe. ROI
                      visible en 30 à 60 jours.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section services"
          id="services"
          style={{ background: "var(--surface-tint)" }}
        >
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">
                <span className="dot" /> Nos services
              </span>
              <h2 className="h2">Deux moteurs d&apos;automatisation, un même objectif</h2>
              <p className="lead">
                Des workflows sur mesure, construits autour de vos outils et de vos
                vrais échanges clients.
              </p>
            </div>
            <div className="svc-grid">
              <article className="svc-card reveal">
                <div className="svc-top">
                  <span className="icon-chip">
                    <svg aria-hidden="true">
                      <use href="#i-mail" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="h3">Automatisation Email</h3>
                    <p>Le bon message, au bon moment, sans intervention manuelle.</p>
                  </div>
                </div>
                <ul className="svc-list">
                  <li>
                    <Icon id="i-check" /> Séquences de bienvenue &amp; nurturing
                  </li>
                  <li>
                    <Icon id="i-check" /> Relances panier abandonné &amp; devis
                  </li>
                  <li>
                    <Icon id="i-check" /> Emails transactionnels intelligents
                  </li>
                  <li>
                    <Icon id="i-check" /> Personnalisation IA selon le comportement
                    client
                  </li>
                </ul>
              </article>
              <article className="svc-card reveal d1">
                <div className="svc-top">
                  <span className="icon-chip green">
                    <svg aria-hidden="true">
                      <use href="#i-headset" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="h3">SAV Automatisé</h3>
                    <p>Un support qui répond vite, juste, et sait passer la main.</p>
                  </div>
                </div>
                <ul className="svc-list">
                  <li>
                    <Icon id="i-check" className="green" /> Réponses instantanées aux
                    FAQ
                  </li>
                  <li>
                    <Icon id="i-check" className="green" /> Tri et priorisation
                    automatique
                  </li>
                  <li>
                    <Icon id="i-check" className="green" /> Escalade vers un humain
                    quand nécessaire
                  </li>
                  <li>
                    <Icon id="i-check" className="green" /> Base de connaissances
                    nourrie par vos échanges
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="cas">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">
                <span className="dot" /> Cas d&apos;usage
              </span>
              <h2 className="h2">Pensé pour les équipes à fort volume</h2>
            </div>
            <div className="use-grid">
              {[
                {
                  icon: "i-inbox",
                  tag: "E-commerce",
                  stat: "80 %",
                  desc: "Statut de commande, retours, suivi de livraison : l'IA répond à la place de votre équipe, instantanément.",
                },
                {
                  icon: "i-rocket",
                  tag: "SaaS",
                  stat: "Dès J1",
                  desc: "Activation, questions produit récurrentes, relances d'usage : vos utilisateurs avancent sans attendre.",
                  delay: "d1",
                },
                {
                  icon: "i-users",
                  tag: "Agences & PME",
                  stat: "Inbox propre",
                  desc: "Fini la boîte mail qui déborde : vos collaborateurs se concentrent sur la croissance.",
                  delay: "d2",
                },
              ].map((card) => (
                <article
                  key={card.tag}
                  className={`use-card reveal ${card.delay ?? ""}`}
                >
                  <span className="icon-chip">
                    <svg aria-hidden="true">
                      <use href={`#${card.icon}`} />
                    </svg>
                  </span>
                  <p className="use-tag">{card.tag}</p>
                  <p className="use-stat">
                    <b>{card.stat}</b>{" "}
                    {card.tag === "E-commerce"
                      ? "des demandes SAV traitées sans intervention humaine"
                      : card.tag === "SaaS"
                        ? ", onboarding email + support L1 automatisé"
                        : ", clients ravis, équipe focus croissance"}
                  </p>
                  <p className="use-desc">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section process"
          id="process"
          style={{ background: "var(--surface-tint)" }}
        >
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">
                <span className="dot" /> Comment ça marche
              </span>
              <h2 className="h2">De l&apos;audit à la production en 4 étapes</h2>
              <p className="lead">
                Un accompagnement clé en main. Vous validez, on construit, ça tourne.
              </p>
            </div>
            <ol className="proc-grid">
              {[
                ["1", "i-search", "Audit gratuit", "30 minutes pour analyser vos flux email & SAV."],
                ["2", "i-branch", "Conception sur mesure", "Workflows, règles d'escalade et ton de marque."],
                ["3", "i-plug", "Intégration", "Gmail, Outlook, Shopify, Zendesk, Intercom…"],
                ["4", "i-cog", "Production & optimisation", "Mise en ligne progressive et amélioration continue."],
              ].map(([num, icon, title, text], i) => (
                <li key={num} className={`proc-step reveal${i ? ` d${i}` : ""}`}>
                  <div className="proc-num">{num}</div>
                  <span className="icon-chip">
                    <svg aria-hidden="true">
                      <use href={`#${icon}`} />
                    </svg>
                  </span>
                  <h3 className="h3">{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section results">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow on-green">
                <span className="dot" /> Résultats
              </span>
              <h2 className="h2">Des chiffres, pas des promesses</h2>
            </div>
            <div className="kpi-grid">
              <div className="kpi-card reveal">
                <div className="kpi-num" data-to="-70" data-suffix="%">
                  -70%
                </div>
                <p>temps de réponse moyen</p>
              </div>
              <div className="kpi-card reveal d1">
                <div
                  className="kpi-num green"
                  data-to="40"
                  data-prefix="+"
                  data-suffix="%"
                >
                  +40%
                </div>
                <p>satisfaction client (CSAT)</p>
              </div>
              <div className="kpi-card reveal d2">
                <div className="kpi-num" data-to="-50" data-suffix="%">
                  -50%
                </div>
                <p>charge de l&apos;équipe support</p>
              </div>
              <div className="kpi-card reveal d3">
                <div className="kpi-num green" data-to="30" data-suffix="–60 j">
                  30–60 j
                </div>
                <p>pour un ROI visible</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section testi" style={{ background: "var(--surface-tint)" }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">
                <span className="dot" /> Ils nous font confiance
              </span>
              <h2 className="h2">Ce que disent nos clients</h2>
            </div>
            <div className="testi-grid">
              {[
                {
                  quote:
                    "« On traite 3× plus de tickets avec la même équipe. Le délai de première réponse est passé de 6 h à moins de 2 minutes. »",
                  initials: "CL",
                  g1: "#FBCFE8",
                  g2: "#A78BFA",
                  name: "Camille Laurent",
                  role: "Head of CX · Maison Brava (e-commerce)",
                  delay: "",
                },
                {
                  quote:
                    "« L'onboarding email tourne tout seul depuis le premier jour. Nos utilisateurs activent plus vite, le support L1 a quasiment disparu. »",
                  initials: "TM",
                  g1: "#A7F3D0",
                  g2: "#10B981",
                  name: "Thomas Mercier",
                  role: "COO · Pulse Analytics (SaaS)",
                  delay: "d1",
                },
                {
                  quote:
                    "« Enfin une inbox sous contrôle. Mon équipe ne passe plus ses matinées à répondre aux mêmes questions. »",
                  initials: "SR",
                  g1: "#FDE68A",
                  g2: "#F59E0B",
                  name: "Sofia Renard",
                  role: "Fondatrice · Atelier Nord (agence)",
                  delay: "d2",
                },
              ].map((t) => (
                <figure key={t.name} className={`testi-card reveal ${t.delay}`}>
                  <div className="testi-stars" aria-label="5 sur 5">
                    <Stars />
                  </div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span
                      className="t-ava"
                      style={
                        {
                          "--g1": t.g1,
                          "--g2": t.g2,
                        } as CSSProperties
                      }
                    >
                      {t.initials}
                    </span>
                    <div>
                      <b>{t.name}</b>
                      <i>{t.role}</i>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap faq-wrap">
            <div className="section-head reveal">
              <span className="eyebrow">
                <span className="dot" /> FAQ
              </span>
              <h2 className="h2">Les questions qu&apos;on nous pose</h2>
              <p className="lead">
                Une autre question ?{" "}
                <a href="#contact" className="inline-link">
                  Parlons-en lors de l&apos;audit gratuit.
                </a>
              </p>
            </div>
            <div className="faq-list reveal d1">
              {[
                [
                  "L'IA remplace-t-elle mon équipe SAV ?",
                  "Non — elle l'augmente. Savantia absorbe les demandes répétitives à faible valeur pour que votre équipe se concentre sur les cas complexes.",
                ],
                [
                  "Mes données clients sont-elles sécurisées ?",
                  "Oui. Conformité RGPD, hébergement en Europe, chiffrement en transit et au repos.",
                ],
                [
                  "Combien de temps pour la mise en place ?",
                  "2 à 4 semaines entre l'audit et la production, avec déploiement progressif.",
                ],
                [
                  "Quels outils intégrez-vous ?",
                  "Gmail, Outlook, Shopify, Zendesk, Intercom, Front, HubSpot et la plupart des CRM via API.",
                ],
                [
                  "Et si l'IA se trompe ?",
                  "Score de confiance, validation humaine ou escalade selon vos seuils.",
                ],
              ].map(([q, a]) => (
                <details key={q} className="faq-item">
                  <summary>
                    {q}
                    <Icon id="i-plus" className="icon faq-chevron" />
                  </summary>
                  <div className="faq-body">
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="wrap contact-grid">
            <div className="contact-copy reveal">
              <span className="eyebrow on-light">
                <span className="dot" /> Audit gratuit
              </span>
              <h2 className="h2">
                Prêt à automatiser vos emails et votre SAV ?
              </h2>
              <p className="lead contact-lead">
                Audit gratuit de 30 minutes — sans engagement. On analyse vos flux
                et on vous remet un plan d&apos;action concret.
              </p>
              <ul className="contact-benefits">
                <li>
                  <span className="cb-ic">
                    <Icon id="i-check" />
                  </span>
                  <div>
                    <b>Audit offert</b>
                    <span>Diagnostic complet de vos emails &amp; tickets.</span>
                  </div>
                </li>
                <li>
                  <span className="cb-ic">
                    <Icon id="i-check" />
                  </span>
                  <div>
                    <b>Plan d&apos;action concret</b>
                    <span>Automatisations prioritaires, chiffrées et planifiées.</span>
                  </div>
                </li>
                <li>
                  <span className="cb-ic">
                    <Icon id="i-check" />
                  </span>
                  <div>
                    <b>Sans engagement</b>
                    <span>Vous repartez avec de la valeur, libre de continuer ou non.</span>
                  </div>
                </li>
              </ul>
              <div className="contact-assure">
                <Icon id="i-lock" /> Réponse sous 24 h ouvrées · Vos données restent
                confidentielles
              </div>
            </div>
            <div className="contact-card reveal d1">
              <AuditForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">
                <Icon id="i-spark" />
              </span>
              <span className="brand-name">Savantia</span>
            </a>
            <p>
              Vos emails et votre SAV en autopilote. Servez vos clients 24/7, sans
              recruter.
            </p>
            <a href="#" className="foot-social" aria-label="LinkedIn de Savantia">
              <Icon id="i-in" /> LinkedIn
            </a>
          </div>
          <nav className="footer-links" aria-label="Liens de pied de page">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#contact">Contact</a>
            <a href="mailto:contact@savantia.fr">contact@savantia.fr</a>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Savantia. Tous droits réservés.</span>
          <span className="foot-made">
            Automatisation email &amp; SAV · Fait en France 🇫🇷
          </span>
        </div>
      </footer>
    </>
  );
}
