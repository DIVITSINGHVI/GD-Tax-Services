"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "./Icon";
import { btn } from "./ui";
import { useLang } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { form as f, services, waMessages, type L } from "@/lib/content";

type Field = "name" | "phone" | "service" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, L>>;

/** Accepts 10-digit Indian mobile numbers, with optional +91 / 91 / 0 prefix, spaces or dashes. */
function normalisePhone(raw: string) {
  const digits = raw.replace(/[\s\-()+]/g, "");
  return digits.replace(/^(?:91|0)(?=\d{10}$)/, "");
}

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = f.errName;
  if (!/^[6-9]\d{9}$/.test(normalisePhone(v.phone))) errors.phone = f.errPhone;
  if (!v.service) errors.service = f.errService;
  if (v.message.length > 500) errors.message = f.errMessage;
  return errors;
}

const inputCls =
  "w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/40";

export default function EnquiryForm() {
  const { t, lang } = useLang();
  const params = useSearchParams();
  const preselected = params.get("service");
  const initialService = services.some((s) => s.slug === preselected) ? (preselected as string) : "";

  const [values, setValues] = useState<Values>({ name: "", phone: "", service: initialService, message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function update(field: Field, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    // Re-validate live once the user has attempted to submit
    if (submitted) setErrors(validate(next));
  }

  function onBlur(field: Field) {
    const all = validate(values);
    setErrors((prev) => ({ ...prev, [field]: all[field] }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    setErrors(found);

    const firstInvalid = (["name", "phone", "service", "message"] as Field[]).find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const selected = services.find((s) => s.slug === values.service);
    const serviceName = selected ? selected.title[lang] : f.other[lang];
    const lines = [
      waMessages.form[lang],
      "",
      `${waMessages.labelName[lang]}: ${values.name.trim()}`,
      `${waMessages.labelPhone[lang]}: ${normalisePhone(values.phone)}`,
      `${waMessages.labelService[lang]}: ${serviceName}`,
    ];
    if (values.message.trim()) lines.push(`${waMessages.labelMessage[lang]}: ${values.message.trim()}`);

    const url = whatsappLink(lines.join("\n"));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setValues({ name: "", phone: "", service: "", message: "" });
    setErrors({});
    setSubmitted(false);
    setWaUrl(null);
  }

  if (waUrl) {
    return (
      <div role="status" className="rounded-2xl border border-gold-400/60 bg-gold-100 p-7 text-center sm:p-9">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-forest-900 text-gold-300">
          <Icon name="check" className="size-7" />
        </span>
        <h3 className="mt-5 text-2xl text-forest-900">{t(f.successTitle)}</h3>
        <p className="mx-auto mt-3 max-w-md text-forest-900/75">{t(f.successText)}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className={btn("whatsapp")}>
            <Icon name="whatsapp" className="size-5" />
            {t(f.openWhatsApp)}
          </a>
          <button type="button" onClick={reset} className={btn("outlineDark")}>
            {t(f.another)}
          </button>
        </div>
      </div>
    );
  }

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-sm font-medium text-red-700">
        {t(errors[field] as L)}
      </p>
    ) : null;

  const borderFor = (field: Field) => (errors[field] ? "border-red-500" : "border-forest-900/20");

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-forest-900">
          {t(f.name)} <span className="text-gold-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          onBlur={() => onBlur("name")}
          placeholder={t(f.namePh)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputCls} ${borderFor("name")}`}
        />
        {fieldError("name")}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-forest-900">
          {t(f.phone)} <span className="text-gold-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          onBlur={() => onBlur("phone")}
          placeholder={t(f.phonePh)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`${inputCls} ${borderFor("phone")}`}
        />
        {fieldError("phone")}
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-forest-900">
          {t(f.service)} <span className="text-gold-600">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          onBlur={() => onBlur("service")}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={`${inputCls} ${borderFor("service")}`}
        >
          <option value="">{t(f.servicePh)}</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {t(s.title)}
            </option>
          ))}
          <option value="other">{t(f.other)}</option>
        </select>
        {fieldError("service")}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-forest-900">
          {t(f.message)}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => onBlur("message")}
          placeholder={t(f.messagePh)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputCls} resize-y ${borderFor("message")}`}
        />
        {fieldError("message")}
      </div>

      <button type="submit" className={`${btn("forest", "lg")} w-full sm:w-auto`}>
        <Icon name="whatsapp" className="size-5 text-gold-300" />
        {t(f.submit)}
      </button>
    </form>
  );
}
