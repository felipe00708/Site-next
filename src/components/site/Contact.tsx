import { AlertCircle, ArrowUpRight, CheckCheck, Send } from "lucide-react";
import { useId, useState, type FormEvent, type ReactNode } from "react";

import logo from "@/assets/brand/next-sites-logo.webp";
import { buildQuoteMessage, SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { useReveal } from "./hooks";
import { buttonClass, ButtonShine, delay, Eyebrow } from "./ui";

const SERVICE_OPTIONS = [
  "Site institucional",
  "Página digital",
  "Cardápio digital",
  "Landing page",
  "Projeto personalizado",
  "Outro",
] as const;

type Fields = {
  name: string;
  company: string;
  service: string;
  description: string;
  phone: string;
};
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", company: "", service: "", description: "", phone: "" };

/** Máscara simples para telefone brasileiro: (11) 91234-5678 */
function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Informe seu nome.";
  if (f.company.trim().length < 2) e.company = "Informe o nome da empresa.";
  if (!f.service) e.service = "Escolha o serviço desejado.";
  if (f.description.trim().length < 10)
    e.description = "Conte um pouco mais sobre o projeto (mínimo 10 caracteres).";
  const digits = f.phone.replace(/\D/g, "");
  if (digits && (digits.length < 10 || digits.length > 11))
    e.phone = "Confira o número (DDD + telefone).";
  return e;
}

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);
  const uid = useId();

  const set = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: key === "phone" ? formatPhone(value) : value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstError = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstError) {
      const el = ev.currentTarget.querySelector<HTMLElement>(`[data-field="${firstError}"]`);
      el?.focus();
      return;
    }
    const link = whatsappLink(buildQuoteMessage(fields));
    setSentLink(link);
    // Sem "noopener" na string de features: com ele o retorno é sempre null e não daria para detectar bloqueio.
    const win = window.open(link, "_blank");
    if (win) win.opener = null;
    else window.location.href = link;
  };

  const previewName = fields.name.trim() || "Seu nome";
  const previewCompany = fields.company.trim() || "Sua empresa";

  return (
    <section
      ref={ref}
      id="contato"
      aria-labelledby="contato-title"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow-blue absolute -left-40 top-20 size-[36rem] opacity-50" />
        <div className="glow-blue absolute -right-40 bottom-0 size-[30rem] opacity-40" />
      </div>

      <div className="container-site relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Texto + canais */}
        <div className="flex flex-col">
          <div className="reveal">
            <Eyebrow>Orçamento</Eyebrow>
          </div>
          <h2
            id="contato-title"
            className="reveal mt-5 font-display text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] text-balance text-white sm:text-5xl lg:text-[3.6rem]"
            style={delay(80)}
          >
            Vamos tirar sua ideia <span className="text-gradient">do papel?</span>
          </h2>
          <p
            className="reveal mt-5 max-w-md text-base leading-relaxed text-text-2 sm:text-lg"
            style={delay(160)}
          >
            Preencha o formulário e sua solicitação chega organizada no WhatsApp da Next Sites.
            Simples, rápido e sem compromisso.
          </p>

          <div className="reveal mt-9 grid gap-3 sm:grid-cols-2" style={delay(240)}>
            <ChannelCard
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              icon={<WhatsAppIcon className="size-5" />}
              label="WhatsApp"
              value={SITE.whatsappDisplay}
            />
            <ChannelCard
              href={SITE.instagramUrl}
              icon={<InstagramIcon className="size-5" />}
              label="Instagram"
              value={SITE.instagramHandle}
            />
          </div>

          {/* Prévia da mensagem */}
          <div className="reveal mt-10 hidden lg:mt-auto lg:block" style={delay(320)}>
            <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-text-3">
              Prévia da sua mensagem
            </p>
            <div className="rounded-3xl border border-line bg-surface/70 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-line pb-4">
                <span className="grid size-10 place-items-center rounded-full bg-ink ring-1 ring-electric/40">
                  <img src={logo} alt="" width={436} height={290} loading="lazy" className="w-6" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-white">Next Sites</p>
                  <p className="text-xs text-text-3">{SITE.whatsappDisplay}</p>
                </div>
              </div>
              <div className="ml-auto mt-4 w-[92%] rounded-2xl rounded-tr-sm bg-[linear-gradient(135deg,oklch(0.485_0.249_263.6/0.55),oklch(0.605_0.216_257.5/0.35))] p-4 text-[0.82rem] leading-relaxed text-white/95">
                <p>Olá! Vim pelo site da Next Sites e gostaria de solicitar um orçamento.</p>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5">
                  <PreviewRow label="Nome" value={previewName} placeholder={!fields.name.trim()} />
                  <PreviewRow
                    label="Empresa"
                    value={previewCompany}
                    placeholder={!fields.company.trim()}
                  />
                  <PreviewRow
                    label="Serviço desejado"
                    value={fields.service || "—"}
                    placeholder={!fields.service}
                  />
                  <PreviewRow
                    label="Descrição do projeto"
                    value={fields.description.trim() || "—"}
                    placeholder={!fields.description.trim()}
                    clamp
                  />
                  <PreviewRow
                    label="Contato"
                    value={fields.phone || "Não informado"}
                    placeholder={!fields.phone}
                  />
                </dl>
                <p className="mt-2 flex items-center justify-end gap-1 text-[0.65rem] text-white/60">
                  agora <CheckCheck className="size-3.5 text-sky" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="reveal reveal-scale" style={delay(150)}>
          <form
            noValidate
            onSubmit={onSubmit}
            aria-describedby={`${uid}-hint`}
            className="border-glow relative rounded-[2rem] bg-[linear-gradient(180deg,oklch(0.17_0.012_268/0.92),oklch(0.12_0.006_268/0.96))] p-6 shadow-[0_40px_120px_-40px_oklch(0.485_0.249_263.6/0.5)] backdrop-blur-xl sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-white">
                  Solicite seu orçamento
                </h3>
                <p id={`${uid}-hint`} className="mt-1.5 text-sm text-text-3">
                  Campos com * são obrigatórios.
                </p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-sky">
                <WhatsAppIcon className="size-5" />
              </span>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id={`${uid}-name`} label="Nome *" error={errors.name}>
                <input
                  id={`${uid}-name`}
                  data-field="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={(e) => set("name")(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  maxLength={80}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                  className={inputClass(!!errors.name)}
                />
              </Field>
              <Field id={`${uid}-company`} label="Nome da empresa *" error={errors.company}>
                <input
                  id={`${uid}-company`}
                  data-field="company"
                  type="text"
                  autoComplete="organization"
                  value={fields.company}
                  onChange={(e) => set("company")(e.target.value)}
                  placeholder="Nome do seu negócio"
                  maxLength={100}
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? `${uid}-company-err` : undefined}
                  className={inputClass(!!errors.company)}
                />
              </Field>
            </div>

            <fieldset
              className="mt-6"
              aria-describedby={errors.service ? `${uid}-service-err` : undefined}
            >
              <legend className="mb-3 text-sm font-medium text-white/90">
                Qual serviço deseja contratar? *
              </legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {SERVICE_OPTIONS.map((opt, i) => {
                  const checked = fields.service === opt;
                  return (
                    <label
                      key={opt}
                      className={cn(
                        "relative flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-3 py-2.5 text-center text-[0.83rem] leading-tight transition-all duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-electric",
                        checked
                          ? "border-electric bg-electric/15 text-white shadow-[0_0_24px_-8px_var(--electric)]"
                          : errors.service
                            ? "border-destructive/50 text-text-2 hover:border-white/30"
                            : "border-line-strong bg-white/[0.02] text-text-2 hover:border-white/30 hover:text-white",
                      )}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={opt}
                        data-field={i === 0 ? "service" : undefined}
                        checked={checked}
                        onChange={() => set("service")(opt)}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
              {errors.service && <ErrorText id={`${uid}-service-err`}>{errors.service}</ErrorText>}
            </fieldset>

            <div className="mt-6">
              <Field
                id={`${uid}-desc`}
                label="Conte um pouco sobre o projeto *"
                error={errors.description}
              >
                <textarea
                  id={`${uid}-desc`}
                  data-field="description"
                  rows={4}
                  value={fields.description}
                  onChange={(e) => set("description")(e.target.value)}
                  placeholder="Qual é o seu negócio, o que você espera do site e se já tem alguma referência…"
                  maxLength={1000}
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? `${uid}-desc-err` : undefined}
                  className={cn(
                    inputClass(!!errors.description),
                    "h-auto min-h-[120px] resize-y py-3.5",
                  )}
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field id={`${uid}-phone`} label="Número de contato (opcional)" error={errors.phone}>
                <input
                  id={`${uid}-phone`}
                  data-field="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  value={fields.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                  placeholder="(11) 91234-5678"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
                  className={inputClass(!!errors.phone)}
                />
              </Field>
            </div>

            <button type="submit" className={cn(buttonClass("primary", "lg"), "mt-8 w-full")}>
              <ButtonShine />
              <WhatsAppIcon className="size-5" />
              Solicitar orçamento pelo WhatsApp
              <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <div aria-live="polite" className="mt-4 min-h-5 text-center text-sm">
              {sentLink ? (
                <p className="text-text-2">
                  Abrimos o WhatsApp com sua mensagem.{" "}
                  <a
                    href={sentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sky underline-offset-4 hover:underline"
                  >
                    Não abriu? Clique aqui.
                  </a>
                </p>
              ) : (
                <p className="text-text-3">Você revisa a mensagem no WhatsApp antes de enviar.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "block h-12 w-full rounded-xl border bg-ink/60 px-4 text-[0.95rem] text-white placeholder:text-text-3/80 transition-[border-color,box-shadow,background-color] duration-300 focus:bg-ink focus:outline-none",
    invalid
      ? "border-destructive/60 focus:border-destructive focus:shadow-[0_0_0_4px_oklch(0.704_0.191_22.216/0.15)]"
      : "border-line-strong hover:border-white/25 focus:border-electric focus:shadow-[0_0_0_4px_oklch(0.605_0.216_257.5/0.18)]",
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white/90">
        {label}
      </label>
      {children}
      {error && <ErrorText id={`${id}-err`}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-[0.8rem] text-destructive">
      <AlertCircle className="size-3.5 shrink-0" />
      {children}
    </p>
  );
}

function ChannelCard({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-line bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/40 hover:bg-electric/[0.07]"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--electric),var(--royal))] text-white shadow-[0_8px_24px_-8px_var(--electric)]">
        {icon}
      </span>
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block text-xs text-text-3">{label}</span>
        <span className="mt-1 block truncate text-[0.95rem] font-medium text-white">{value}</span>
      </span>
      <ArrowUpRight className="size-4 shrink-0 text-text-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky" />
    </a>
  );
}

function PreviewRow({
  label,
  value,
  placeholder,
  clamp,
}: {
  label: string;
  value: string;
  placeholder: boolean;
  clamp?: boolean;
}) {
  return (
    <>
      <dt className="font-semibold">{label}:</dt>
      <dd
        className={cn(
          "min-w-0 break-words",
          placeholder && "text-white/45",
          clamp && "line-clamp-2",
        )}
      >
        {value}
      </dd>
    </>
  );
}
