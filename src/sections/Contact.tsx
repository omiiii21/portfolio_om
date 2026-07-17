import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { Mail, MapPin, Github, Linkedin, Download, Check, Send } from '../components/icons'
import { profile } from '../data/profile'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactInputs = z.infer<typeof schema>

const inputClasses =
  'w-full rounded-lg border border-line bg-panel px-4 py-3 text-ink placeholder:text-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25'

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactInputs>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: ContactInputs) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS env vars missing')
      await new Promise((r) => setTimeout(r, 300))
      reset()
      return
    }

    emailjs.init(publicKey)
    await emailjs.send(serviceId, templateId, {
      from_email: data.email,
      message: data.message,
    })
    reset()
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-20 md:py-28" aria-labelledby="contact-heading">
      <SectionHeading
        index="07"
        kicker="Contact"
        title="Have a problem worth solving?"
        description="Execution analytics, market data at scale, LLM systems that actually ship — if you're building in any of these, I'd like to hear about it. I reply fast."
        id="contact-heading"
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs tracking-wider text-muted uppercase">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email || undefined}
                  {...register('email')}
                  className={inputClasses}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      role="alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-1.5 text-sm text-down"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs tracking-wider text-muted uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="What are you building? What's breaking?"
                  aria-invalid={!!errors.message || undefined}
                  {...register('message')}
                  className={inputClasses}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      role="alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-1.5 text-sm text-down"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-on-accent/30 border-t-on-accent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send message
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isSubmitSuccessful && (
                    <motion.p
                      role="status"
                      aria-live="polite"
                      className="flex items-center gap-2 text-sm font-medium text-up"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <Check size={16} />
                      Thanks — your message is on its way.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="rounded-xl border border-line bg-panel/60 p-6">
            <h3 className="font-mono text-xs tracking-[0.16em] text-muted uppercase">Direct lines</h3>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink transition-colors hover:bg-panel-2"
                >
                  <Mail size={17} className="shrink-0 text-accent" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink transition-colors hover:bg-panel-2"
                >
                  <Linkedin size={17} className="shrink-0 text-accent" />
                  LinkedIn — usually the fastest
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink transition-colors hover:bg-panel-2"
                >
                  <Github size={17} className="shrink-0 text-accent" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeDownload}
                  className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink transition-colors hover:bg-panel-2"
                >
                  <Download size={17} className="shrink-0 text-accent" />
                  Download résumé (PDF)
                </a>
              </li>
              <li className="flex min-h-11 items-center gap-3 px-2 py-2 text-sm text-muted">
                <MapPin size={17} className="shrink-0 text-accent" />
                {profile.location} · remote-friendly
              </li>
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
