
export default function Home() {
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
        borderBottom: "1px solid #3b3020"
      }}>
        <h2 style={{color:"#D6AE58"}}>
          🚘 АВТОМИВКА
        </h2>
        <nav>
          <a href="#services" style={{color:"white", margin:12}}>Услуги</a>
          <a href="#booking" style={{color:"white", margin:12}}>Резервация</a>
          <a href="#partners" style={{color:"white", margin:12}}>Партньори</a>
        </nav>
      </header>

      <section style={{
        textAlign:"center",
        padding:"110px 20px"
      }}>
        <p style={{color:"#D6AE58", letterSpacing:4}}>
          ПРОФЕСИОНАЛНА ГРИЖА ЗА АВТОМОБИЛА
        </p>
        <h1 style={{fontSize:"clamp(38px, 7vw, 72px)"}}>
          ПЕРФЕКТНА ЧИСТОТА.
          <br/>
          <span style={{color:"#D6AE58"}}>
            ВСЕКИ ПЪТ.
          </span>
        </h1>
        <p style={{color:"#aaa", fontSize:18}}>
          Твоята кола заслужава най-доброто.
        </p>
        <a href="#booking" style={{
          display:"inline-block",
          background:"#D6AE58",
          color:"#111",
          padding:"16px 32px",
          borderRadius:8,
          textDecoration:"none",
          fontWeight:"bold",
          marginTop:25
        }}>
          ЗАПАЗИ ЧАС
        </a>
      </section>

      <section id="services" style={{
        padding:"50px 7%",
        textAlign:"center"
      }}>
        <h2 style={{color:"#D6AE58"}}>НАШИТЕ УСЛУГИ</h2>
        <p>Външно измиване</p>
        <p>Вътрешно почистване</p>
        <p>Пълно измиване</p>
        <p>Професионален детайлинг</p>
      </section>

      <section id="booking" style={{
        padding:50,
        textAlign:"center",
        background:"#1b1b1b"
      }}>
        <h2>Резервирай своя час</h2>
        <p>Бързо и лесно, без задължителна регистрация.</p>
      </section>

      <footer style={{
        padding:30,
        textAlign:"center",
        color:"#D6AE58"
      }}>
        Автомивка | ул. Неделчо Бончев 31, София
      </footer>
    </main>
  );
}
