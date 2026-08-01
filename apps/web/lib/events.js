export const defaultEvents = [
  {
    id: "community-outreach",
    title: "Community Outreach Programs",
    date: "Ongoing",
    location: "Mumbai",
    description:
      "Focused service initiatives that address local community needs with empathy and coordination.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "leadership-workshop",
    title: "Leadership Workshops",
    date: "Seasonal",
    location: "Churchgate",
    description:
      "Sessions focused on confidence, responsibility, communication, and team-building for young leaders.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "networking-fellowship",
    title: "Fellowship & Networking Events",
    date: "Quarterly",
    location: "Mumbai",
    description:
      "Opportunities to connect, collaborate, and celebrate the spirit of service and friendship.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "humanitarian-drive",
    title: "Humanitarian Drives",
    date: "Annual",
    location: "Across Mumbai",
    description:
      "Meaningful action-driven campaigns for support, outreach, and community care.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  },
];

const STORAGE_KEY = "rc-churchgate-events";

export function getEvents() {
  if (typeof window === "undefined") {
    return defaultEvents;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultEvents;

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultEvents;
  } catch {
    return defaultEvents;
  }
}

export function saveEvents(events) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function addEvent(event) {
  const currentEvents = getEvents();
  const nextEvents = [
    {
      id: event.id || `event-${Date.now()}`,
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description,
      image: event.image || defaultEvents[0].image,
    },
    ...currentEvents,
  ];

  saveEvents(nextEvents);
  return nextEvents;
}

export function updateEvent(id, updatedEvent) {
  const currentEvents = getEvents();
  const nextEvents = currentEvents.map((event) =>
    event.id === id
      ? {
          ...event,
          ...updatedEvent,
          id,
          image: updatedEvent.image || event.image || defaultEvents[0].image,
        }
      : event,
  );

  saveEvents(nextEvents);
  return nextEvents;
}

export function deleteEvent(id) {
  const currentEvents = getEvents();
  const nextEvents = currentEvents.filter((event) => event.id !== id);
  saveEvents(nextEvents);
  return nextEvents;
}

export function resetEvents() {
  saveEvents(defaultEvents);
  return defaultEvents;
}
