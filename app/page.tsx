
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Пълно измиване");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("reservations").insert({
      customer_name: name,
      phone,
      service,
      reservation_date: date,
      reservation_time: time,
    });

    setLoading(false);

    if (error) {
      setMessage("Грешка при резервацията. Моля, опитай отново.");
      return;
    }

    setMessage("Успешно изпрати заявката си за резервация!");
    setName("");
    setPhone("");
    setDate("");
  }

  const gold = "#D6AE58";

  return (
    <main style={{
      minHeight: "100vh",
      background: "#101010",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{
        padding: "25px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        borderBottom: "1px solid #3b3020"
      }}>
        <h2 style={{ color: gold }}>🚘 АВТОМИВКА</h2>
        <nav>
          <a href="#services" style={{ color: "white", margin: 12 }}>Услуги</a>
          <a href="#booking" style={{ color: "white", margin: 12 }}>Резервация</a>
          <a href="#partners" style={{ color: "white", margin: 12 }}>Партньори</a>
        </nav>
      </header>

      <section style={{ textAlign: "center", padding: "110px 20px" }}>
        <p style={{ color: gold, letterSpacing: 4 }}>
          ПРОФЕСИОНАЛНА ГРИЖА ЗА АВТОМОБИЛА
        </p>
        <h1 style={{ fontSize: "clamp(38px, 7vw, 72px)" }}>
          ПЕРФЕКТНА ЧИСТОТА.
          <br />
          <span style={{ color: gold }}>ВСЕКИ ПЪТ.</span>
        </h1>
        <p style={{ color: "#aaa", fontSize: 18 }}>
          Твоята кола заслужава най-доброто.
        </p>
        <a href="#booking" style={{
          display: "inline-block",
          background: gold,
          color: "#111",
          padding: "16px 32px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: "bold",
          marginTop: 25
        }}>
          ЗАПАЗИ ЧАС
        </a>
      </section>

      <section id="services" style={{
        padding: "50px 7%",
        textAlign: "center"
      }}>
        <h2 style={{ color: gold }}>НАШИТЕ УСЛУГИ</h2>
        <p>Външно измиване</p>
        <p>Вътрешно почистване</p>
        <p>Пълно измиване</p>
        <p>Професионален детайлинг</p>
      </section>

      <section id="booking" style={{
        padding: "50px 20px",
        textAlign: "center",
        background: "#1b1b1b"
      }}>
        <h2 style={{ color: gold }}>РЕЗЕРВИРАЙ СВОЯ ЧАС</h2>
        <p style={{ color: "#aaa" }}>
          Попълни формата и изпрати заявка за резервация.
        </p>

        <form onSubmit={handleBooking} style={{
          maxWidth: 480,
          margin: "30px auto",
          display: "grid",
          gap: 15,
          textAlign: "left"
        }}>
          <label>Име и фамилия
            <input required value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Твоето име"
              style={inputStyle} />
          </label>

          <label>Телефон
            <input required type="tel" value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Телефон за връзка"
              style={inputStyle} />
          </label>

          <label>Услуга
            <select value={service}
              onChange={e => setService(e.target.value)}
              style={inputStyle}>
              <option>Външно измиване</option>
              <option>Вътрешно почистване</option>
              <option>Пълно измиване</option>
              <option>Професионален детайлинг</option>
            </select>
          </label>

          <label>Дата
            <input required type="date" min={new Date().toLocaleDateString("en-CA")}
              value={date}
              onChange={e => setDate(e.target.value)}
              style={inputStyle} />
          </label>

          <label>Час
            <select value={time}
              onChange={e => setTime(e.target.value)}
              style={inputStyle}>
              {["09:00", "10:00", "11:00", "12:00",
                "13:00", "14:00", "15:00", "16:00", "17:00"]
                .map(t => <option key={t}>{t}</option>)}
            </select>
          </label>

          <button disabled={loading} type="submit" style={{
            background: gold,
            color: "#111",
            border: 0,
            padding: 16,
            borderRadius: 8,
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            {loading ? "ИЗПРАЩАНЕ..." : "ПОТВЪРДИ РЕЗЕРВАЦИЯТА"}
          </button>

          {message && <p role="status" style={{ color: gold }}>{message}</p>}
        </form>
      </section>

      <footer style={{
        padding: 30,
        textAlign: "center",
        color: gold
      }}>
        Автомивка | ул. Неделчо Бончев 31, София
      </footer>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: 13,
  marginTop: 7,
  borderRadius: 6,
  border: "1px solid #555",
  background: "#101010",
  color: "white",
  fontSize: 16
};
