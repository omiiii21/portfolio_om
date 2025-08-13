import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

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
    <section id="contact" className="mt-16 mb-24" aria-labelledby="contact-heading">
      <motion.h2 id="contact-heading" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-2xl font-semibold">
        Say hello
      </motion.h2>
      <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <label className="sr-only" htmlFor="email">Your email</label>
        <div className="md:col-span-2 space-y-1">
          <input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email || undefined} {...register('email')} className="w-full p-4 rounded-xl border h-12 bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 dark:bg-white/5 dark:text-white dark:placeholder:text-white/60 dark:border-white/6" placeholder="Your email" />
          {errors.email && <p role="alert" className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <label className="sr-only" htmlFor="message">Your message</label>
        <div className="md:col-span-2 space-y-1">
          <textarea id="message" aria-invalid={!!errors.message || undefined} {...register('message')} className="w-full p-4 rounded-xl border h-36 bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 dark:bg-white/5 dark:text-white dark:placeholder:text-white/60 dark:border-white/6" placeholder="What’s up?" />
          {errors.message && <p role="alert" className="text-xs text-red-500">{errors.message.message}</p>}
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={isSubmitting} className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-60 dark:focus-visible:ring-offset-[#05060b]">{isSubmitting ? 'Sending…' : 'Send'}</button>
          <div className="text-sm text-gray-600 dark:text-white/60">Or email directly at <a className="underline" href="mailto:omengshetti@gmail.com">omengshetti@gmail.com</a></div>
        </div>
        {isSubmitSuccessful && (
          <div className="md:col-span-3 text-sm text-green-500" role="status" aria-live="polite">Thanks! Your message was sent.</div>
        )}
      </motion.form>
    </section>
  )
}

export default Contact


