"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./icon-sprite";

type FieldName =
  | "firstname"
  | "lastname"
  | "email"
  | "company"
  | "volume"
  | "need"
  | "consent";

const validators: Record<string, (v: string) => string> = {
  firstname: (v) => (v.trim() ? "" : "Indiquez votre prénom."),
  lastname: (v) => (v.trim() ? "" : "Indiquez votre nom."),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
      ? ""
      : "Email professionnel invalide.",
  company: (v) => (v.trim() ? "" : "Indiquez votre entreprise."),
  volume: (v) => (v ? "" : "Sélectionnez une fourchette."),
};

export function AuditForm() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<{ name: string } | null>(null);
  const [need, setNeed] = useState("");
  const [consent, setConsent] = useState(false);

  function setError(name: FieldName, msg: string) {
    setErrors((prev) => {
      const next = { ...prev };
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Partial<Record<FieldName, string>> = {};
    let firstBad: HTMLElement | null = null;

    (Object.keys(validators) as Array<keyof typeof validators>).forEach(
      (name) => {
        const msg = validators[name](String(data.get(name) ?? ""));
        if (msg) {
          nextErrors[name as FieldName] = msg;
          if (!firstBad) {
            firstBad = form.querySelector(`[name="${name}"]`);
          }
        }
      },
    );

    if (!need) {
      nextErrors.need = "Sélectionnez votre besoin principal.";
      if (!firstBad) firstBad = form.querySelector('input[name="need"]');
    }
    if (!consent) {
      nextErrors.consent = "Vous devez accepter pour être contacté(e).";
      if (!firstBad) firstBad = form.querySelector("#consent");
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      firstBad?.focus();
      return;
    }

    setLoading(true);
    const response = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        email: data.get("email"),
        company: data.get("company"),
        volume: data.get("volume"),
        need,
        message: data.get("message"),
        phone: data.get("phone"),
        website: data.get("website"),
      }),
    });

    setLoading(false);

    if (!response.ok) {
      const body = (await response.json()) as { error?: string };
      setError("email", body.error ?? "Envoi impossible. Réessayez.");
      return;
    }

    setSuccess({ name: String(data.get("firstname")).trim() });
  }

  if (success) {
    return (
      <div className="c-success" role="status">
        <div className="cs-check">
          <Icon id="i-check" />
        </div>
        <h3 className="h3">Demande envoyée à Savantia ✓</h3>
        <p>
          Merci <b>{success.name} !</b> Votre demande d&apos;audit est bien reçue.
          Un expert vous recontacte <b>sous 24 h ouvrées</b> pour planifier vos 30
          minutes.
        </p>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            setSuccess(null);
            setNeed("");
            setConsent(false);
            setErrors({});
          }}
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form className="c-form" onSubmit={handleSubmit} noValidate>
      <div className="c-row">
        <div className={`field${errors.firstname ? " invalid" : ""}`}>
          <label htmlFor="firstname">
            Prénom <i>*</i>
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Camille"
          />
          {errors.firstname ? (
            <p className="err show">{errors.firstname}</p>
          ) : (
            <p className="err" />
          )}
        </div>
        <div className={`field${errors.lastname ? " invalid" : ""}`}>
          <label htmlFor="lastname">
            Nom <i>*</i>
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Laurent"
          />
          {errors.lastname ? (
            <p className="err show">{errors.lastname}</p>
          ) : (
            <p className="err" />
          )}
        </div>
      </div>
      <div className="c-row">
        <div className={`field${errors.email ? " invalid" : ""}`}>
          <label htmlFor="email">
            Email professionnel <i>*</i>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="camille@entreprise.fr"
          />
          {errors.email ? (
            <p className="err show">{errors.email}</p>
          ) : (
            <p className="err" />
          )}
        </div>
        <div className={`field${errors.company ? " invalid" : ""}`}>
          <label htmlFor="company">
            Entreprise <i>*</i>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            placeholder="Maison Brava"
          />
          {errors.company ? (
            <p className="err show">{errors.company}</p>
          ) : (
            <p className="err" />
          )}
        </div>
      </div>
      <div className={`field${errors.volume ? " invalid" : ""}`}>
        <label htmlFor="volume">
          Volume mensuel approximatif <i>*</i>
        </label>
        <div className="select-wrap">
          <select id="volume" name="volume" required defaultValue="">
            <option value="" disabled>
              Sélectionnez une fourchette
            </option>
            <option value="<500">&lt; 500 emails / tickets</option>
            <option value="500-2000">500 – 2 000</option>
            <option value="2000-10000">2 000 – 10 000</option>
            <option value="10000+">10 000+</option>
          </select>
          <Icon id="i-arrow" className="icon select-caret" />
        </div>
        {errors.volume ? (
          <p className="err show">{errors.volume}</p>
        ) : (
          <p className="err" />
        )}
      </div>
      <div className="field">
        <label>
          Besoin principal <i>*</i>
        </label>
        <div className="seg" role="radiogroup" aria-label="Besoin principal">
          {(
            [
              ["email", "i-mail", "Automatisation email"],
              ["sav", "i-headset", "SAV / support"],
              ["both", "i-spark", "Les deux"],
            ] as const
          ).map(([value, icon, label]) => (
            <label key={value} className="seg-opt">
              <input
                type="radio"
                name="need"
                value={value}
                checked={need === value}
                onChange={() => {
                  setNeed(value);
                  setError("need", "");
                }}
              />
              <span>
                <Icon id={icon} /> {label}
              </span>
            </label>
          ))}
        </div>
        {errors.need ? (
          <p className="err show err-consent">{errors.need}</p>
        ) : (
          <p className="err err-consent" />
        )}
      </div>
      <div className="field">
        <label htmlFor="message">Votre situation</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Décrivez votre situation actuelle…"
        />
      </div>
      <details className="c-optional">
        <summary>
          Champs optionnels (téléphone, site web)
          <Icon id="i-plus" className="icon faq-chevron" />
        </summary>
        <div className="c-row">
          <div className="field">
            <label htmlFor="phone">Téléphone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="06 12 34 56 78"
            />
          </div>
          <div className="field">
            <label htmlFor="website">Site web</label>
            <input
              id="website"
              name="website"
              type="text"
              placeholder="entreprise.fr"
            />
          </div>
        </div>
      </details>
      <label className="c-consent">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            setError("consent", "");
          }}
          required
        />
        <span className="c-check" aria-hidden="true">
          <Icon id="i-check" />
        </span>
        <span className="c-consent-txt">
          J&apos;accepte d&apos;être contacté(e) concernant ma demande. <i>*</i>
        </span>
      </label>
      {errors.consent ? (
        <p className="err show err-consent">{errors.consent}</p>
      ) : null}
      <button
        type="submit"
        className="btn btn-primary btn-block c-submit"
        disabled={loading}
      >
        {loading ? "Envoi…" : "Demander mon audit gratuit "}
        <Icon id="i-arrow" className="ico" />
      </button>
      <p className="c-note">
        <Icon id="i-shield" /> Réponse sous 24 h ouvrées. Vos données restent
        confidentielles.
      </p>
    </form>
  );
}
