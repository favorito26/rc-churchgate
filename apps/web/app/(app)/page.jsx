const pillars = [
  {
    title: "Service Projects",
    description:
      "From community outreach to humanitarian initiatives, we create meaningful impact through action and collaboration.",
  },
  {
    title: "Leadership & Growth",
    description:
      "We help young leaders build confidence, responsibility, and professional skills through real opportunities.",
  },
  {
    title: "Friendship & Fellowship",
    description:
      "Our club brings together students and young professionals who share a passion for service, learning, and lasting bonds.",
  },
];

const highlights = [
  { value: "1989", label: "Chartered year" },
  { value: "Students & Young Professionals", label: "Who we are" },
  { value: "Service + Leadership", label: "What we focus on" },
  { value: "Rotary values", label: "Our foundation" },
];
import Navbar from "@/components/layout/Navbar";
const socials = [
  { name: "Facebook", href: "https://www.facebook.com/RotaractClubofChurchgate" },
  { name: "Instagram", href: "https://www.instagram.com/rcchurchgate" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/rc-churchgate" },
  { name: "X", href: "https://x.com/rc_churchgate89" },
  { name: "Pinterest", href: "https://in.pinterest.com/rc_churchgate/" },
  { name: "YouTube", href: "https://www.youtube.com/@RC_Churchgate/" },
];

const leadership = [
  {
    name: "Rtr. Prachiti Sawant",
    title: "President",
    email: "rcc.president26.27@gmail.com",
  },
  {
    name: "Rtr. Jamie Wadia",
    title: "Secretary",
    email: "rcc.secretary.37th@gmail.com",
  },
];

const stats = [
  "Youth-powered impact",
  "Rotary values in action",
  "Service above self",
  "Inclusive leadership",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.16),_transparent_45%)] text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8">
        <div className="grid items-center gap-10 pb-16 pt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Service Above Self
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Crafting journeys that move with the currents of change and innovation.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              The Rotaract Club of Churchgate is a dynamic youth platform chartered on September 29, 1989, under the sponsorship of the Rotary Club of Bombay North, creating meaningful change through service, leadership, and friendship.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Learn More
              </a>
              <a
                href="https://forms.gle/LyA6qQr2sYh4rtDD6"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
              >
                Join Now
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-600">
              {stats.map((item) => (
                <div key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-teal-100 bg-white p-6 shadow-[0_25px_80px_rgba(13,148,136,0.12)]">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-teal-600 via-cyan-600 to-emerald-500 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-teal-100">Our Mission</p>
                <h2 className="mt-4 text-3xl font-bold">Serve society, develop leadership, and build lifelong friendships.</h2>
                <div className="mt-8 space-y-4 text-sm text-teal-50">
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span>Community impact</span>
                    <span className="font-semibold">Ongoing</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span>Skill-building</span>
                    <span className="font-semibold">Driven</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span>Creative engagement</span>
                    <span className="font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">About us</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">A vibrant club for young changemakers and community builders.</h2>
          </div>
          <div className="space-y-5 text-lg text-slate-300">
            <p>
              The Rotaract Club of Churchgate is a platform where students and young professionals come together to serve society, develop leadership skills, and build lifelong friendships.
            </p>
            <p>
              Through service projects, skill-building initiatives, and creative events, the club gives members the opportunity to make an impact while also learning, growing, and connecting with peers who share the same passion for change.
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Our focus</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">What defines the club</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-teal-700 md:text-2xl">{item.value}</p>
              <p className="mt-3 text-base text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">What we do</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">The pillars of our journey</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-teal-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-xl text-teal-700">
                  ✦
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Leadership</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Meet the people guiding the club</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((person) => (
            <div key={person.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">
                {person.name.split(" ").slice(-1)[0][0]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{person.name}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">{person.title}</p>
              <a href={`mailto:${person.email}`} className="mt-5 inline-block text-base text-slate-600 hover:text-teal-700">
                {person.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="bg-gradient-to-r from-teal-700 to-cyan-700 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-center lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">Become a member</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Discover your potential, build lifelong connections, and lead the change.</h2>
          </div>
          <a
            href="https://forms.gle/LyA6qQr2sYh4rtDD6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            Join Now
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold text-slate-900">Rotaract Club of Churchgate</p>
              <p className="mt-2 text-sm text-slate-600">© 2026 RC Churchgate. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="hover:text-teal-700">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}