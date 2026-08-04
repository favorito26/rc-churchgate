import Navbar from "@/components/layout/Navbar";

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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.16),_transparent_45%)] text-slate-900">
      <section className="h-screen relative isolate overflow-hidden bg-slate-950 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/churchgaterc-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.88)_8%,rgba(2,6,23,0.72)_42%,rgba(8,47,73,0.45)_70%,rgba(15,23,42,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.2),transparent_28%),radial-gradient(circle_at_left,rgba(6,182,212,0.16),transparent_34%)]" />

        <div className="relative z-10">
          <Navbar />

          <div className="mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-7xl items-center px-6 pb-16 pt-10 lg:px-8 lg:pb-20">
            <div className="w-full">
              <div className="max-w-3xl">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-teal-100 backdrop-blur-md">
                  Service Above Self
                </span>
                <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4.5rem] xl:leading-[1.02]">
                  A youth-led community creating impact in Churchgate through service and fellowship.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                  Chartered in 1989, we bring students and young professionals together to lead, serve, and grow.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(20,184,166,0.35)] transition hover:bg-teal-400"
                  >
                    Learn More
                  </a>
                  <a
                    href="https://forms.gle/LyA6qQr2sYh4rtDD6"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-teal-300/60 hover:bg-white/15"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">About us</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">A vibrant club for young changemakers and community builders.</h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Our mission</p>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Serve society, develop leadership, and build lifelong friendships.
              </h3>
              <div className="mt-5 space-y-4 text-lg leading-8 text-slate-300">
                <p>
                  The Rotaract Club of Churchgate is a platform where students and young professionals come together to serve society, develop leadership skills, and build lasting bonds.
                </p>
                <p>
                  Through service projects, skill-building initiatives, and creative events, members get the chance to make an impact while learning, growing, and connecting with others who care deeply about change.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
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
