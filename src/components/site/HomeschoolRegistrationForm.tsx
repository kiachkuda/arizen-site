import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Check } from "lucide-react";

const AGE_TRACKS = ["Early Years (5–7)", "Primary (8–11)", "Middle School (12–14)", "High School (15–17)"] as const;
const SUBJECTS = ["Math", "English", "Science", "Coding & Robotics", "Languages", "Humanities", "Art & Design", "PE & Sports"] as const;
const SCHEDULES = ["Mornings (9am–12pm)", "Afternoons (1pm–4pm)", "Evenings (5pm–7pm)", "Weekends"] as const;

const schema = z.object({
  parentName: z.string().trim().min(2, "Enter parent name").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  childName: z.string().trim().min(2, "Enter child name").max(80),
  ageTrack: z.enum(AGE_TRACKS, { errorMap: () => ({ message: "Select an age track" }) }),
  subjects: z.array(z.enum(SUBJECTS)).min(1, "Pick at least one subject").max(SUBJECTS.length),
  schedule: z.enum(SCHEDULES, { errorMap: () => ({ message: "Pick a schedule" }) }),
  notes: z.string().trim().max(1000).optional(),
});

type FormState = {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  ageTrack: string;
  subjects: string[];
  schedule: string;
  notes: string;
};

const empty: FormState = {
  parentName: "", email: "", phone: "", childName: "",
  ageTrack: "", subjects: [], schedule: "", notes: "",
};

export function HomeschoolRegistrationForm() {
  const [data, setData] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleSubject = (s: string) => {
    setData((d) => ({
      ...d,
      subjects: d.subjects.includes(s) ? d.subjects.filter((x) => x !== s) : [...d.subjects, s],
    }));
    setErrors((e) => ({ ...e, subjects: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Registration received — our admissions team will be in touch within one business day.");
    setData(empty);
  };

  if (submitted) {
    return (
      <div className="p-10 rounded-3xl bg-card border border-border text-center">
        <div className="size-14 rounded-full bg-brand-emerald/10 text-brand-emerald grid place-items-center mx-auto mb-5">
          <Check className="size-6" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">Thank you!</h3>
        <p className="text-muted-foreground mb-6">Your home schooling registration is in. We'll reach out within one business day to schedule a planning call.</p>
        <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl border border-border font-semibold hover:bg-secondary transition">
          Register another child
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-8 md:p-10 rounded-3xl bg-card border border-border space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Parent name" error={errors.parentName}>
          <input value={data.parentName} onChange={(e) => update("parentName", e.target.value)} maxLength={80} className={inputCls(!!errors.parentName)} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} maxLength={255} className={inputCls(!!errors.email)} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input value={data.phone} onChange={(e) => update("phone", e.target.value)} maxLength={30} className={inputCls(!!errors.phone)} />
        </Field>
        <Field label="Child's name" error={errors.childName}>
          <input value={data.childName} onChange={(e) => update("childName", e.target.value)} maxLength={80} className={inputCls(!!errors.childName)} />
        </Field>
      </div>

      <Field label="Age track" error={errors.ageTrack}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AGE_TRACKS.map((t) => {
            const active = data.ageTrack === t;
            return (
              <button type="button" key={t} onClick={() => update("ageTrack", t)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold border transition text-left ${
                  active ? "bg-brand-navy text-white border-brand-navy" : "bg-background border-border hover:border-brand-blue"
                }`}>
                {t}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Subjects of interest" hint="Select all that apply" error={errors.subjects}>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => {
            const active = data.subjects.includes(s);
            return (
              <button type="button" key={s} onClick={() => toggleSubject(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  active ? "bg-brand-blue text-white border-brand-blue" : "bg-background border-border hover:border-brand-blue"
                }`}>
                {active && <Check className="size-3.5 inline -mt-0.5 mr-1" />}{s}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Preferred class schedule" error={errors.schedule}>
        <div className="grid sm:grid-cols-2 gap-3">
          {SCHEDULES.map((s) => {
            const active = data.schedule === s;
            return (
              <label key={s} className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition ${
                active ? "bg-brand-blue/5 border-brand-blue" : "bg-background border-border hover:border-brand-blue"
              }`}>
                <input type="radio" name="schedule" className="accent-brand-blue" checked={active} onChange={() => update("schedule", s)} />
                <span className="text-sm font-medium">{s}</span>
              </label>
            );
          })}
        </div>
      </Field>

      <Field label="Anything else?" hint="Optional · max 1000 characters" error={errors.notes}>
        <textarea value={data.notes} onChange={(e) => update("notes", e.target.value)} rows={4} maxLength={1000} className={inputCls(!!errors.notes)} />
      </Field>

      <button type="submit" className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-blue transition-colors">
        Submit Home Schooling Registration
      </button>
    </form>
  );
}

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-sm font-semibold">{label}</label>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue ${
    hasError ? "border-destructive" : "border-border"
  }`;
}
