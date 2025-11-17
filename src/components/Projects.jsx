export default function Projects() {
  const items = [
    {
      title: 'Studio Series',
      tag: 'Photography',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Optics Lab',
      tag: 'R&D',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Focus UI',
      tag: 'Product Design',
      image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">Selected work</h2>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Get in touch →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href="#" className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={p.image} alt="" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-0 p-4 flex items-center justify-between w-full">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-300">{p.tag}</p>
                  <h3 className="text-white text-lg font-medium">{p.title}</h3>
                </div>
                <span className="text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">View</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
