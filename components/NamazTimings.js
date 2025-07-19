import React, { useState, useEffect } from "react";

const PRAYERS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const PRAYER_LABELS = {
  Fajr: 'Fajr',
  Sunrise: 'Sunrise',
  Dhuhr: 'Zohar',
  Asr: 'Asr',
  Maghrib: 'Maghrib',
  Isha: 'Isha',
};

function formatTime(time24) {
  if (!time24) return "-";
  const match = time24.match(/^(\d{1,2}):(\d{2})/);
  if (!match) return time24;
  let [_, hour, minute] = match;
  hour = parseInt(hour, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

async function fetchLocation() {
  // 1. Try browser geolocation
  if (typeof window !== "undefined" && navigator.geolocation) {
    try {
      const pos = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 })
      );
      return {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        city: "Your Location",
        country_name: "",
      };
    } catch (e) {
      // User denied or error, fallback to IP
    }
  }
  // 2. Fallback to IP-based
  try {
    let res = await fetch("https://ipapi.co/json/");
    if (res.ok) return await res.json();
    res = await fetch("https://ipinfo.io/json?token=YOUR_TOKEN_IF_NEEDED");
    if (res.ok) {
      const data = await res.json();
      const [latitude, longitude] = data.loc.split(",");
      return {
        latitude,
        longitude,
        city: data.city,
        country_name: data.country,
      };
    }
    throw new Error("All location APIs failed");
  } catch {
    // 3. Fallback: use a default location (e.g., Mecca)
    return {
      latitude: 21.3891,
      longitude: 39.8579,
      city: "Mecca",
      country_name: "Saudi Arabia",
    };
  }
}

function getNextPrayer(timings) {
  if (!timings) return null;
  const now = new Date();
  const prayerTimes = PRAYERS.map((prayer) => {
    let t = timings[prayer];
    if (!t) return null;
    const match = t.match(/^(\d{1,2}):(\d{2})/);
    if (!match) return null;
    let [_, hour, minute] = match;
    hour = parseInt(hour, 10);
    minute = parseInt(minute, 10);
    const prayerDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute,
      0
    );
    return { name: prayer, time: prayerDate };
  }).filter(Boolean);
  for (let i = 0; i < prayerTimes.length; i++) {
    if (prayerTimes[i].time > now) {
      return prayerTimes[i];
    }
  }
  if (prayerTimes.length > 0) {
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    const firstPrayer = prayerTimes[0];
    const nextTime = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      firstPrayer.time.getHours(),
      firstPrayer.time.getMinutes(),
      0
    );
    return { name: firstPrayer.name, time: nextTime };
  }
  return null;
}

function getCurrentPrayer(timings) {
  if (!timings) return null;
  const now = new Date();
  const prayerTimes = PRAYERS.map((prayer) => {
    let t = timings[prayer];
    if (!t) return null;
    const match = t.match(/^(\d{1,2}):(\d{2})/);
    if (!match) return null;
    let [_, hour, minute] = match;
    hour = parseInt(hour, 10);
    minute = parseInt(minute, 10);
    const prayerDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute,
      0
    );
    return { name: prayer, time: prayerDate };
  }).filter(Boolean);
  let current = null;
  for (let i = 0; i < prayerTimes.length; i++) {
    if (prayerTimes[i].time > now) {
      break;
    }
    current = prayerTimes[i];
  }
  return current ? current.name : null;
}

function getTimeDiffString(targetDate) {
  const now = new Date();
  let diff = Math.floor((targetDate - now) / 1000);
  if (diff < 0) diff = 0;
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;
  if (h > 0) {
    return `${h}h ${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  } else {
    return `${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  }
}

const NamazTimings = () => {
  const [location, setLocation] = useState(null);
  const [timings, setTimings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [countdown, setCountdown] = useState("");
  const [currentPrayer, setCurrentPrayer] = useState(null);

  useEffect(() => {
    async function fetchLocationAndTimings() {
      setLoading(true);
      setError(null);
      try {
        const locData = await fetchLocation();
        console.log('locData',locData);
        const { latitude, longitude, city, country_name } = locData;
        setLocation({ latitude, longitude, city, country_name });
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const timingsRes = await fetch(
          `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${latitude}&longitude=${longitude}&method=2`
        );
        if (!timingsRes.ok) throw new Error("Failed to get prayer timings");
        const timingsData = await timingsRes.json();
        setTimings(timingsData.data.timings);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchLocationAndTimings();
  }, []);

  useEffect(() => {
    if (!timings) return;
    function updateNext() {
      const np = getNextPrayer(timings);
      setNextPrayer(np);
      setCountdown(np ? getTimeDiffString(np.time) : "");
      setCurrentPrayer(getCurrentPrayer(timings));
    }
    updateNext();
    const interval = setInterval(updateNext, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  return (
    <section>
      <div className="gap white-layer opc7">
        <div
          className="fixed-bg"
          style={{ backgroundImage: "url(/assets/images/namaz.jpg)" }}
        ></div>
        <div className="container">
          <div className="sec-tl">
            <h2 itemProp="headline">
              Namaz Timings of {location?.city}, {location?.country_name}
            </h2>
            <img src="/assets/images/pshape.png" alt="" />
          </div>
          <div className="prayer-timing-wrp">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                {nextPrayer && (
                  <div
                    style={{
                      textAlign: "center",
                      color: "#00796b",
                      fontWeight: 500,
                      marginBottom: 8,
                    }}
                  >
                    <h3 style={{ color: "#ff9822" }}>
                      Time Left: {nextPrayer.name} in {countdown}
                    </h3>
                  </div>
                )}
              </div>

              <div className="col-md-5 col-sm-12 col-lg-5">
                <div className="timing-mockp">
                  <img
                    src="/assets/images/namaz-time.png"
                    alt="prayer-time-mockp.png"
                    itemProp="image"
                  />
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-lg-7">
                <div className="timing-data">
                  {/* {nextPrayer && (
                    <div
                      style={{
                        textAlign: "center",
                        color: "#00796b",
                        fontWeight: 500,
                        marginBottom: 8,
                      }}
                    >
                      Time Left: {nextPrayer.name} in {countdown}
                    </div>
                  )} */}
                  {loading ? (
                    <div style={{ textAlign: "center", color: "#888" }}>
                      Loading...
                    </div>
                  ) : error ? (
                    <div style={{ color: "#c00", textAlign: "center" }}>
                      {error}
                    </div>
                  ) : timings ? (
                    <div className="prayer-timings text-center">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <span>Name of Salat</span>
                              <img src="/assets/images/pshape.png" alt="" />
                            </th>
                            <th>
                              <span>Time</span>
                              <img src="/assets/images/pshape.png" alt="" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {PRAYERS.map((prayer) => (
                            <tr
                              key={prayer}
                              className={
                                currentPrayer === prayer ? "current-prayer-row" : ""
                              }
                              style={
                                currentPrayer === prayer
                                  ? { background: "#fffbe6", fontWeight: 600 }
                                  : {}
                              }
                            >
                              <td>
                                <span>{PRAYER_LABELS[prayer] || prayer}</span>
                              </td>
                              <td>{formatTime(timings[prayer])}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NamazTimings;
