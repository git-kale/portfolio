'use client';

import { Card } from '@/components/shared/Card';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isStaticExport, setIsStaticExport] = useState(false);

  useEffect(() => {
    // Check if we're in static export mode (no server routes available)
    setIsStaticExport(process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. I will get back to you soon.');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 min-h-screen bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black gradient-text">Let's Connect</h1>
          <p className="text-lg text-slate-400">
            Interested in collaborating or want to chat about backend systems? Reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Send me a Message</h2>

            {isStaticExport ? (
              <div className="space-y-4 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                <p className="text-slate-300">Contact form submissions are available on the live site. For now, please use the contact methods below.</p>
                <div className="space-y-2 pt-2">
                  <p className="text-sm text-slate-400">
                    <i className="fas fa-envelope text-cyan-400 mr-2"></i>
                    <a href="mailto:mahesh@example.com" className="text-cyan-400 hover:text-cyan-300">
                      mahesh@example.com
                    </a>
                  </p>
                  <p className="text-sm text-slate-400">
                    <i className="fas fa-github text-cyan-400 mr-2"></i>
                    <a href="https://github.com/git-kale" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                      github.com/git-kale
                    </a>
                  </p>
                  <p className="text-sm text-slate-400">
                    <i className="fas fa-linkedin text-cyan-400 mr-2"></i>
                    <a href="https://linkedin.com/in/mahesh-kale" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                      linkedin.com/in/mahesh-kale
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 font-semibold">{submitMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 font-semibold">{submitMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-glow py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-slate-500 text-center">I'll get back to you within 24 hours.</p>
            </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-cyan-400"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <a
                    href="mailto:kalemaheshj@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    kalemaheshj@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* GitHub */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-github text-indigo-400"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">GitHub</h3>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition"
                  >
                    github.com/mahesh
                  </a>
                </div>
              </div>
            </Card>

            {/* LinkedIn */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-linkedin text-pink-400"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">LinkedIn</h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition"
                  >
                    linkedin.com/in/mahesh
                  </a>
                </div>
              </div>
            </Card>

            {/* Twitter */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-twitter text-purple-400"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Twitter / X</h3>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition"
                  >
                    @mahesh_dev
                  </a>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="border-l-4 border-cyan-400">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <i className="fas fa-calendar text-cyan-400"></i>
                Availability
              </h3>
              <p className="text-slate-300 text-sm">
                Available for consulting, contract work, and permanent opportunities. Currently open to discussion about backend architecture and DevOps projects.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
