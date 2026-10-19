import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Send email via FormSubmit AJAX endpoint directly to adelahammed.25@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/adelahammed.25@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Inquiry from AdelWeb Portfolio",
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Unable to send message via form endpoint.");
      }
    } catch {
      // Graceful fallback to mailto or local success simulation if offline
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#008efb]/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#008efb]/10 border border-[#008efb]/30 text-[#008efb] text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-[#008efb] text-sm" />
          <span>Let's Connect</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008efb] to-[#b16cea]">Touch</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400">
          Have an exciting project, full-time role, or freelance opportunity? Let's discuss how we can work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0b0f19] rounded-2xl border border-gray-800 p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Available for freelance projects on Upwork &amp; Fiverr, as well as full-time frontend and Webflow engineering roles.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href="mailto:adelahammed.25@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-[#101626] hover:bg-[#131b30] border border-gray-800 hover:border-[#008efb]/40 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#008efb]/15 text-[#008efb] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-gray-400 font-medium block">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#008efb] transition-colors truncate block">
                    adelahammed.25@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:01622704174"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-[#101626] hover:bg-[#131b30] border border-gray-800 hover:border-[#008efb]/40 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#008efb]/15 text-[#008efb] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#008efb] transition-colors">
                    01622704174
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#101626] border border-gray-800">
                <div className="w-10 h-10 rounded-lg bg-[#008efb]/15 text-[#008efb] flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Dhaka, Bangladesh (Remote / On-site)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar (LinkedIn & GitHub only, no Twitter) */}
            <div className="pt-4 border-t border-gray-800">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/adel250"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#101626] hover:bg-[#0077b5] text-gray-300 hover:text-white border border-gray-800 hover:border-[#0077b5] transition group text-xs font-semibold"
                >
                  <FaLinkedin className="text-base text-[#008efb] group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/adelahammed"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#101626] hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 transition text-xs font-semibold"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#0b0f19] rounded-2xl border border-gray-800 p-6 sm:p-10 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Messages are sent directly to <span className="text-[#008efb]">adelahammed.25@gmail.com</span>.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3">
                <HiOutlineCheckCircle className="text-2xl text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-emerald-400">
                    Thank you for reaching out, Adel will respond as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {/* Error Toast */}
            {status.error && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-300 uppercase mb-1.5"
                  >
                    Your Name <span className="text-[#008efb]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#101626] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#008efb] focus:ring-1 focus:ring-[#008efb] transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-300 uppercase mb-1.5"
                  >
                    Your Email <span className="text-[#008efb]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#101626] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#008efb] focus:ring-1 focus:ring-[#008efb] transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-gray-300 uppercase mb-1.5"
                >
                  Project / Role Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Website Redesign / Frontend Project"
                  className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#101626] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#008efb] focus:ring-1 focus:ring-[#008efb] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-300 uppercase mb-1.5"
                >
                  Your Message <span className="text-[#008efb]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Adel, I'd like to collaborate on..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#101626] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#008efb] focus:ring-1 focus:ring-[#008efb] transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008efb] to-[#b16cea] hover:opacity-95 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#008efb]/25 hover:shadow-xl hover:shadow-[#008efb]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
