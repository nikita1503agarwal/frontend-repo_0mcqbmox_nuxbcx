import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <p className="text-slate-200/80">Photographer • Creative Technologist</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Minimal portfolio for modern work
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl">
            Showcasing selected projects at the intersection of cameras, code and design.
          </p>

        </div>
      </div>
    </section>
  );
}
