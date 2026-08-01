"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import {
  addEvent,
  defaultEvents,
  deleteEvent,
  getEvents,
  resetEvents,
  updateEvent,
} from "@/lib/events";

const blankForm = {
  title: "",
  date: "",
  location: "",
  description: "",
  image: "",
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState(defaultEvents);
  const [form, setForm] = useState(blankForm);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title || !form.date || !form.description) {
      return;
    }

    if (editingId) {
      const nextEvents = updateEvent(editingId, form);
      setEvents(nextEvents);
      setEditingId(null);
    } else {
      const nextEvents = addEvent(form);
      setEvents(nextEvents);
    }

    setForm(blankForm);
  }

  function handleEdit(eventItem) {
    setEditingId(eventItem.id);
    setForm({
      title: eventItem.title,
      date: eventItem.date,
      location: eventItem.location || "",
      description: eventItem.description,
      image: eventItem.image || "",
    });
  }

  function handleDelete(id) {
    const nextEvents = deleteEvent(id);
    setEvents(nextEvents);

    if (editingId === id) {
      setEditingId(null);
      setForm(blankForm);
    }
  }

  function handleReset() {
    const cleared = resetEvents();
    setEvents(cleared);
    setEditingId(null);
    setForm(blankForm);
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.16),_transparent_45%)] text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Admin</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Manage club events
            </h1>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700"
          >
            Reset default data
          </button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                {editingId ? "Edit event" : "Add event"}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setForm(blankForm);
                  }}
                  className="text-sm font-semibold text-slate-500 hover:text-teal-700"
                >
                  Cancel
                </button>
              )}
            </div>

            <div className="space-y-4">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Event title"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none ring-0 focus:border-teal-500"
                required
              />

              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="Date or label"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none ring-0 focus:border-teal-500"
                required
              />

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none ring-0 focus:border-teal-500"
              />

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Event description"
                rows={5}
                className="w-full rounded-xl border border-slate-200 p-3 outline-none ring-0 focus:border-teal-500"
                required
              />

              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none ring-0 focus:border-teal-500"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                {editingId ? "Save changes" : "Add Event"}
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id || event.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="h-36 w-full overflow-hidden bg-slate-200">
                  <img src={event.image || defaultEvents[0].image} alt={event.title} className="h-full w-full object-cover" />
                </div>

                <div className="p-5">
                  <div className="mb-3 inline-flex rounded-full bg-teal-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-teal-700">
                    {event.date}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{event.title}</h2>
                  {event.location && <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{event.location}</p>}
                  <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>

                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleEdit(event)}
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(event.id)}
                      className="rounded-full border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
