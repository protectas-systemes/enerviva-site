export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f6f8f7",
        color: "#1f2937",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <section
        style={{
          background: "linear-gradient(135deg, #1f7a5c, #2f9e44)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>EnerViva</h1>

          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Energía inteligente para tu hogar
          </h2>

          <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 30px" }}>
            Soluciones de eficiencia energética para viviendas:
            aislamiento, ahorro y confort.
          </p>

          <a
            href="https://wa.me/34672759866"
            style={{
              display: "inline-block",
              padding: "14px 24px",
              backgroundColor: "white",
              color: "#1f7a5c",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
            ¿Qué hacemos?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3>Aislamiento</h3>
              <p>
                Mejoramos el confort térmico de la vivienda y ayudamos a reducir
                pérdidas de energía.
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3>Ahorro energético</h3>
              <p>
                Soluciones pensadas para bajar el consumo y optimizar el gasto.
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3>Asesoramiento</h3>
              <p>
                Estudiamos cada caso para orientar al cliente hacia la solución
                más adecuada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 20px 80px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            background: "white",
            padding: "40px 20px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
            Solicita información
          </h2>

          <p style={{ marginBottom: "25px" }}>
            Contáctanos por WhatsApp y estudiaremos tu proyecto.
          </p>

          <a
            href="https://wa.me/34672759866"
            style={{
              display: "inline-block",
              padding: "14px 24px",
              backgroundColor: "#1f7a5c",
              color: "white",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Enviar mensaje
          </a>
        </div>
      </section>
    </main>
  );
}