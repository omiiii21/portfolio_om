import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import AnimatedHeading from '../components/motion/AnimatedHeading'
import Magnetic from '../components/motion/Magnetic'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactInputs = z.infer<typeof schema>

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<ContactInputs>({ resolver: zodResolver(schema) })

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
    <section id="contact" className="mt-20 mb-24" aria-labelledby="contact-heading">
      <AnimatedHeading kicker="05 — Let's talk" id="contact-heading">
        Say hello
      </AnimatedHeading>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }, hidden: {} }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="md:col-span-2 space-y-1"
        >
          <label className="sr-only" htmlFor="email">Your email</label>
          <input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email || undefined} {...register('email')} className="w-full p-4 rounded-xl border h-12 bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all dark:bg-white/5 dark:text-white dark:placeholder:text-white/60 dark:border-white/6" placeholder="Your email" />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-red-500 pt-1"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="md:col-span-2 space-y-1"
        >
          <label className="sr-only" htmlFor="message">Your message</label>
          <textarea id="message" aria-invalid={!!errors.message || undefined} {...register('message')} className="w-full p-4 rounded-xl border h-36 bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all dark:bg-white/5 dark:text-white dark:placeholder:text-white/60 dark:border-white/6" placeholder="What’s up?" />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-red-500 pt-1"
              >
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="flex items-center gap-3"
        >
          <Magnetic>
            <button type="submit" disabled={isSubmitting} className="shine inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-60 shadow-lg shadow-indigo-500/25 dark:focus-visible:ring-offset-[#05060b]">
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  Sending…
                </>
              ) : (
                'Send'
              )}
            </button>
          </Magnetic>
          <div className="text-sm text-gray-600 dark:text-white/60">Or email directly at <a className="underline hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="mailto:omengshetti@gmail.com">omengshetti@gmail.com</a></div>
        </motion.div>

        <AnimatePresence>
          {isSubmitSuccessful && (
            <motion.div
              className="md:col-span-3 flex items-center gap-2 text-sm text-green-500"
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <motion.path
                  d="M20 6L9 17l-5-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </motion.svg>
              Thanks! Your message was sent.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  )
}

export default Contact
