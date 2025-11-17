export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">Say hello</h2>
          <p className="mt-2 text-slate-300">Available for select collaborations and commissions.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:you@example.com" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Email</a>
            <a href="#" className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Instagram</a>
            <a href="#" className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
