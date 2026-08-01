import SiteHeader from "@/components/public/SiteHeader";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.16),_transparent_45%)] text-slate-900">
      <SiteHeader current="contact" />

      <section className="mx-auto max-w-5xl flex-1 px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Contact</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Let’s connect and create impact together.
        </h1>

        <div className="mt-10 grid gap-8 rounded-3xl border border-teal-100 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Email</p>
            <a href="mailto:rcc.president26.27@gmail.com" className="mt-3 block text-lg text-slate-700 hover:text-teal-700">
              rcc.president26.27@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Membership</p>
            <a href="https://forms.gle/LyA6qQr2sYh4rtDD6" target="_blank" rel="noreferrer" className="mt-3 block text-lg text-slate-700 hover:text-teal-700">
              Join Now
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Rotaract Club of Churchgate</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/RotaractClubofChurchgate" target="_blank" rel="noreferrer" className="hover:text-teal-700">Facebook</a>
            <a href="https://www.instagram.com/rcchurchgate" target="_blank" rel="noreferrer" className="hover:text-teal-700">Instagram</a>
            <a href="https://www.linkedin.com/company/rc-churchgate" target="_blank" rel="noreferrer" className="hover:text-teal-700">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
