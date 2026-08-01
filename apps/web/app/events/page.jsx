"use client";

import { useEffect, useState } from "react";
import SiteHeader from "@/components/public/SiteHeader";
import { defaultEvents, getEvents } from "@/lib/events";

export default function EventsPage() {
    const [events, setEvents] = useState(defaultEvents);

    useEffect(() => {
        setEvents(getEvents());
    }, []);

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.16),_transparent_45%)] text-slate-900">
            <SiteHeader current="events" />

            <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Events</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                    Programs that bring people together for action and impact.
                </h1>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    {events.map((event) => (
                        <article key={event.id || event.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <div className="h-52 w-full overflow-hidden bg-slate-200">
                                <img
                                    src={event.image || defaultEvents[0].image}
                                    alt={event.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="p-8">
                                <div className="mb-6 inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">
                                    {event.date}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900">{event.title}</h2>
                                {event.location && (
                                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-slate-500">
                                        {event.location}
                                    </p>
                                )}
                                <p className="mt-4 text-base leading-7 text-slate-600">{event.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>© 2026 Rotaract Club of Churchgate</p>
                    <a href="https://forms.gle/LyA6qQr2sYh4rtDD6" target="_blank" rel="noreferrer" className="font-semibold text-teal-700 hover:text-teal-800">
                        Join the next initiative
                    </a>
                </div>
            </footer>
        </main>
    );
}
