"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { ArrowRight } from "./Icons";

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

const types = ["Full home", "Single room", "Villa / Bungalow", "Restaurant / Café", "Retail / Boutique", "Office", "3D visualisation only"];

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (fd: FormData): Errors => {
    const e: Errors = {};
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/[\s-]/g, "");
    const email = String(fd.get("email") || "").trim();
    if (name.length < 2) e.name = "Please enter your name.";
    if (!/^(\+?91)?[6-9]\d{9}$/.test(phone)) e.phone = "Enter a valid 10-digit mobile number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "That email doesn't look right. Please check it.";
    return e;
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = ev.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    const msg = [
      `Hello Anjali, I'd like to discuss a project with House of Interio.`,
      ``,
      `Name: ${fd.get("name")}`,
      `Phone: ${fd.get("phone")}`,
      fd.get("email") ? `Email: ${fd.get("email")}` : "",
      `Project: ${fd.get("type")}`,
      fd.get("message") ? `\n${fd.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="f-name">Name <span aria-hidden="true">*</span></label>
        <input id="f-name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
        {errors.name && <p className="field__err" id="e-name" role="alert">{errors.name}</p>}
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="f-phone">Phone <span aria-hidden="true">*</span></label>
          <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} />
          {errors.phone && <p className="field__err" id="e-phone" role="alert">{errors.phone}</p>}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
          {errors.email && <p className="field__err" id="e-email" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-type">Project type</label>
        <select id="f-type" name="type" defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-msg">Tell us about your space</label>
        <textarea id="f-msg" name="message" rows={4} placeholder="Location, size, timeline, or anything you have in mind" />
      </div>

      <div className="form__submit">
        <button type="submit" className="btn">
          Send via WhatsApp <ArrowRight size={18} />
        </button>
        <p className="form__note" aria-live="polite">
          {sent ? "WhatsApp has opened with your message. Just press send." : "Your message goes straight to Anjali on WhatsApp."}
        </p>
      </div>
    </form>
  );
}
