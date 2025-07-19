import React, { useRef } from "react";

const sampleEvents = [
  {
    id: 1,
    title: "Eid Celebration",
    date: "2025-07-19",
    image: "https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Ramadan Iftar",
    date: "2025-04-10",
    image: "https://via.placeholder.com/300x200?text=Ramadan+Iftar",
  },
  {
    id: 3,
    title: "Charity Drive",
    date: "2025-05-15",
    image: "https://via.placeholder.com/300x200?text=Charity+Drive",
  },
  {
    id: 4,
    title: "Youth Seminar",
    date: "2025-08-22",
    image: "https://via.placeholder.com/300x200?text=Youth+Seminar",
  },
  {
    id: 5,
    title: "Quran Recitation",
    date: "2025-09-05",
    image: "https://via.placeholder.com/300x200?text=Quran+Recitation",
  },
  {
    id: 6,
    title: "Family Picnic",
    date: "2025-06-12",
    image: "https://via.placeholder.com/300x200?text=Family+Picnic",
  },
  {
    id: 7,
    title: "Health Workshop",
    date: "2025-10-03",
    image: "https://via.placeholder.com/300x200?text=Health+Workshop",
  },
  {
    id: 8,
    title: "Sisters' Gathering",
    date: "2025-11-14",
    image: "https://via.placeholder.com/300x200?text=Sisters+Gathering",
  },
  {
    id: 9,
    title: "Brothers' Night",
    date: "2025-12-01",
    image: "https://via.placeholder.com/300x200?text=Brothers+Night",
  },
  {
    id: 10,
    title: "Islamic Art Workshop",
    date: "2025-03-18",
    image: "https://via.placeholder.com/300x200?text=Islamic+Art+Workshop",
  },
];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const EventSlider = ({ events = sampleEvents }) => {
  const scrollRef = useRef(null);

  const scrollByCard = (dir = 1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(".event-card");
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    container.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section style={{ background: '#ffe4b2', border: '4px solid #ff9800', minHeight: 300 }}>
      <div className="gap white-layer opc7">
        <div
          className="fixed-bg"
          style={{ backgroundImage: "url(/assets/images/namaz.jpg)" }}
        ></div>
        <div className="container">
          <div className="sec-tl">
            <h2 itemProp="headline">Upcoming Events</h2>
            <img src="/assets/images/pshape.png" alt="" />
          </div>
          <div style={{ position: 'relative', margin: '0 auto', maxWidth: 1200 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
              <button
                aria-label="Scroll Left"
                style={{ padding: 8, borderRadius: '50%', background: '#e5e7eb', border: 'none', boxShadow: '0 1px 4px #0001', marginRight: 8 }}
                onClick={() => scrollByCard(-1)}
                type="button"
              >
                &#8592;
              </button>
              <button
                aria-label="Scroll Right"
                style={{ padding: 8, borderRadius: '50%', background: '#e5e7eb', border: 'none', boxShadow: '0 1px 4px #0001' }}
                onClick={() => scrollByCard(1)}
                type="button"
              >
                &#8594;
              </button>
            </div>
            <div
              ref={scrollRef}
              style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                padding: '8px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 24,
                  minWidth: 1200,
                  width: 'max-content',
                }}
              >
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="event-card"
                    style={{
                      flex: '0 0 auto',
                      width: 288,
                      background: '#fff',
                      borderRadius: 16,
                      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      style={{
                        width: '100%',
                        height: 180,
                        objectFit: 'cover',
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }}
                    />
                    <div style={{ padding: 16, width: '100%' }}>
                      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center' }}>
                        {event.title}
                      </h3>
                      <div style={{ fontSize: 14, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                        <span role="img" aria-label="date">📅</span>
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSlider; 