import { useState } from "react";
import { X, CalendarIcon, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { format } from "date-fns";
import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type BookingType = "parent" | "school";

const PROGRAMS = ["Soccer Academy", "Gymnastics", "Digital Skills", "Home Schooling"] as const;

const schema = z
  .object({
    bookingType: z.enum(["parent", "school"]),
    name: z.string().trim().min(2, "Required").max(120),
    contactPerson: z.string().trim().max(120).optional(),
    email: z.string().trim().email("Invalid email").max(255),
    phone: z.string().trim().min(6, "Enter a valid phone").max(30),
    detail: z.string().trim().min(1, "Required").max(60),
    program: z.enum(PROGRAMS),
    date: z.date({ required_error: "Pick a date" }),
  })
  .refine((d) => d.bookingType === "parent" || (d.contactPerson && d.contactPerson.length >= 2), {
    message: "Contact person required",
    path: ["contactPerson"],
  });

type FormState = {
  bookingType: BookingType;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  detail: string;
  program: (typeof PROGRAMS)[number];
  date: Date | undefined;
};

const empty: FormState = {
  bookingType: "parent",
  name: "",
  contactPerson: "",
  email: "",
  phone: "",
  detail: "",
  program: "Soccer Academy",
  date: undefined,
};

export function TrialModal({ trigger }: { trigger?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setDone(false);
      setData(empty);
      setErrors({});
    }, 250);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      for (const i of result.error.issues) {
        const key = i.path[0] as keyof FormState;
        if (!fe[key]) fe[key] = i.message;
      }
      setErrors(fe);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    toast.success("Trial booked — we'll confirm by email within one business day.");
    setDone(true);
  };

  const isSchool = data.bookingType === "school";
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <span onClick={() => setOpen(true)} className="contents">
        {trigger ?? (
          <button className="px-8 py-4 bg-white text-brand-navy border border-border rounded-2xl font-bold hover:bg-brand-slate transition-all">
            Book a Free Trial
          </button>
        )}
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-navy/70 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl my-8"
            >
              <button onClick={close} aria-label="Close" className="absolute top-4 right-4 size-9 grid place-items-center rounded-full hover:bg-secondary">
                <X className="size-4" />
              </button>

              {done ? (
                <div className="text-center py-6">
                  <div className="size-14 rounded-full bg-brand-emerald/10 text-brand-emerald grid place-items-center mx-auto mb-5">
                    <Check className="size-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Demonstration booked</h3>
                  <p className="text-muted-foreground mb-6">
                    We've reserved {data.date && format(data.date, "EEEE, d MMMM")}. A coach will confirm by email shortly.
                  </p>
                  <button onClick={close} className="px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold">Done</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-1">Book a Free Trial</h3>
                    <p className="text-muted-foreground text-sm">Choose a date and we'll set up a demonstration session.</p>
                  </div>

                  {/* Booking type toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-xl">
                    {(["parent", "school"] as const).map((t) => (
                      <button type="button" key={t} onClick={() => update("bookingType", t)}
                        className={cn(
                          "py-2 rounded-lg text-sm font-semibold transition-colors capitalize",
                          data.bookingType === t ? "bg-card shadow text-foreground" : "text-muted-foreground hover:text-foreground"
                        )}>
                        {t === "parent" ? "I'm a parent" : "I'm a school"}
                      </button>
                    ))}
                  </div>

                  <Field label={isSchool ? "School name" : "Parent name"} error={errors.name}>
                    <input value={data.name} onChange={(e) => update("name", e.target.value)} maxLength={120} className={inputCls(!!errors.name)} />
                  </Field>

                  {isSchool && (
                    <Field label="Contact person" error={errors.contactPerson}>
                      <input value={data.contactPerson} onChange={(e) => update("contactPerson", e.target.value)} maxLength={120} className={inputCls(!!errors.contactPerson)} />
                    </Field>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" error={errors.email}>
                      <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} maxLength={255} className={inputCls(!!errors.email)} />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input value={data.phone} onChange={(e) => update("phone", e.target.value)} maxLength={30} className={inputCls(!!errors.phone)} />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={isSchool ? "Number of students" : "Child's age"} error={errors.detail}>
                      <input value={data.detail} onChange={(e) => update("detail", e.target.value)} maxLength={60} className={inputCls(!!errors.detail)} />
                    </Field>
                    <Field label="Program" error={errors.program}>
                      <select value={data.program} onChange={(e) => update("program", e.target.value as FormState["program"])} className={inputCls(!!errors.program)}>
                        {PROGRAMS.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Preferred demonstration date" error={errors.date}>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button type="button"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl bg-background border text-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-blue",
                            errors.date ? "border-destructive" : "border-border",
                            !data.date && "text-muted-foreground"
                          )}>
                          {data.date ? format(data.date, "EEEE, d MMMM yyyy") : "Pick a date"}
                          <CalendarIcon className="size-4 opacity-60" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-[70]" align="start">
                        <Calendar
                          mode="single"
                          selected={data.date}
                          onSelect={(d) => update("date", d)}
                          disabled={(d) => d < today}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </Field>

                  <button type="submit" className="w-full py-3.5 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-blue transition-colors">
                    Reserve Demonstration
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-semibold mb-1.5 block">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue",
    hasError ? "border-destructive" : "border-border"
  );
}
