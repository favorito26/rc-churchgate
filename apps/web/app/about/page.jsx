import SiteHeader from "@/components/public/SiteHeader";

const values = [
  {
    title: "Our Story",
    description:
      "The Rotaract Club of Churchgate was officially chartered on September 29, 1989, under the sponsorship of the Rotary Club of Bombay North.",
  },
  {
    title: "Our Members",
    description:
      "We are made up of students and young professionals with a shared passion for service, innovation, and leadership.",
  },
  {
    title: "Our Vision",
    description:
      "We strive to create opportunities for impact by combining meaningful service with growth, learning, and fellowship.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.16),_transparent_45%)] text-slate-900">
      <SiteHeader current="about" />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">About us</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Serving society, growing leaders, building lifelong friendships.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          The Rotaract Club of Churchgate is a youth-driven platform where individuals come together to create change through community service, leadership development, and meaningful participation.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-3xl border border-teal-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-xl text-teal-700">
                ✦
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Our approach</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Impact is built through action, learning, and collaboration.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We believe that young people can make a real difference when given opportunities to serve, learn, and lead. Our projects and initiatives reflect that belief in both local and broader community contexts.
          </p>
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
