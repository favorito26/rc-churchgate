import SiteHeader from "@/components/public/SiteHeader";

export default function JoinPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.16),_transparent_45%)] text-slate-900">
      <SiteHeader current="join" />

      <section className="mx-auto max-w-5xl flex-1 px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Join us</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Discover your potential, build lifelong connections, and lead the change.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          By joining Rotaract Club of Churchgate, you become part of a vibrant community dedicated to service, leadership, compassion, and meaningful growth.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://forms.gle/LyA6qQr2sYh4rtDD6"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Fill the Membership Form
          </a>
          <a
            href="mailto:rcc.president26.27@gmail.com"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
          >
            Contact the Club
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Rotaract Club of Churchgate</p>
          <a href="https://forms.gle/LyA6qQr2sYh4rtDD6" target="_blank" rel="noreferrer" className="font-semibold text-teal-700 hover:text-teal-800">
            Become a Member
          </a>
        </div>
      </footer>
    </main>
  );
}
