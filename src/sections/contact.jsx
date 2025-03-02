import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: 'Devise Engineering Tools', // Your company name
      };

      await emailjs.send(
        'service_xtzwcaf', // Replace with your EmailJS service ID
        'template_os94nqw', // Replace with your EmailJS template ID
        templateParams,
        'KtBwAgVO-m3JDTD9W' // Replace with your EmailJS public key
      );

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden py-12" id="contact">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/contact.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center pt-16 pb-20">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center">Contact Us</h1>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              {status.message && (
                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                  {status.message}
                </div>
              )}
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                name="name"
                required
                className="w-full bg-transparent border border-white/30 rounded-lg p-3 sm:p-4 text-lg text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                name="email"
                required
                className="w-full bg-transparent border border-white/30 rounded-lg p-3 sm:p-4 text-lg text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
              />
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                name="message"
                required
                rows="4"
                className="w-full bg-transparent border border-white/30 rounded-lg p-3 sm:p-4 text-lg text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-white rounded-lg p-3 sm:p-4 text-lg hover:bg-green-600 transition-colors disabled:bg-green-800 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
              <div className="flex items-center gap-4">
                <span className="text-xl sm:text-2xl">📞</span>
                <p className="text-lg sm:text-xl">9921296658 / 8208423741</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl sm:text-2xl">✉️</span>
                <p className="text-lg sm:text-xl">devise.eng.tools@gmail.com</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl sm:text-2xl mt-1">📍</span>
                <a
                  href="https://maps.app.goo.gl/smx8jWLfnNHMJvbq7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg hover:text-green-300 transition-colors"
                >
                  Gut No.34 Plot No. 37, 40, Ranjangaon SP Road, behind Savera Auto, MIDC, K-88, Waluj, Chhatrapati Sambhaji Nagar, Maharashtra 431136
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-white/70 text-base sm:text-lg">
        DEVISE ENGINEERING TOOLS
      </div>
    </section>
  );
}
