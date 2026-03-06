export default function Home() {
  return (
    <main style={{fontFamily:"Arial",background:"#f5f7f6"}}>

      {/* HERO */}
      <section style={{
        background:"linear-gradient(135deg,#1f7a5c,#2f9e44)",
        color:"white",
        padding:"100px 20px",
        textAlign:"center"
      }}>
        <h1 style={{fontSize:"48px"}}>EnerViva</h1>

        <h2 style={{fontSize:"28px",marginTop:"10px"}}>
          Energía inteligente para tu hogar
        </h2>

        <p style={{maxWidth:"700px",margin:"20px auto"}}>
          Ayudamos a los propietarios a mejorar la eficiencia energética de
          su vivienda con soluciones modernas y rentables.
        </p>

        <a
          href="https://wa.me/34672759866"
          style={{
            background:"white",
            color:"#1f7a5c",
            padding:"15px 25px",
            borderRadius:"8px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Solicitar información
        </a>
      </section>


      {/* PROBLEMA */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <h2>¿Tu casa pierde energía?</h2>

        <p style={{maxWidth:"700px",margin:"20px auto"}}>
          Muchas viviendas pierden calor en invierno y frescor en verano.
          Esto provoca facturas energéticas más altas y menos confort.
        </p>
      </section>


      {/* SOLUCIONES */}
      <section style={{padding:"80px 20px",background:"white"}}>
        <h2 style={{textAlign:"center"}}>Soluciones EnerViva</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          maxWidth:"1000px",
          margin:"40px auto"
        }}>

          <div style={{background:"#f3f4f6",padding:"25px",borderRadius:"10px"}}>
            <h3>Aislamiento</h3>
            <p>
              Mejora el confort térmico y reduce pérdidas energéticas.
            </p>
          </div>

          <div style={{background:"#f3f4f6",padding:"25px",borderRadius:"10px"}}>
            <h3>Energía solar</h3>
            <p>
              Produce tu propia electricidad y reduce tu dependencia energética.
            </p>
          </div>

          <div style={{background:"#f3f4f6",padding:"25px",borderRadius:"10px"}}>
            <h3>Eficiencia energética</h3>
            <p>
              Soluciones modernas para reducir el consumo de energía.
            </p>
          </div>

        </div>
      </section>


      {/* PROCESO */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <h2>Cómo funciona</h2>

        <p>1️⃣ Solicitas información</p>
        <p>2️⃣ Estudiamos tu vivienda</p>
        <p>3️⃣ Te proponemos la mejor solución</p>
      </section>


      {/* CONTACTO */}
      <section style={{
        background:"#1f7a5c",
        color:"white",
        padding:"80px 20px",
        textAlign:"center"
      }}>
        <h2>Solicita tu estudio energético</h2>

        <p style={{marginBottom:"20px"}}>
          Nuestro equipo analiza tu vivienda y te orienta sobre la mejor solución.
        </p>

        <a
          href="https://wa.me/34672759866"
          style={{
            background:"white",
            color:"#1f7a5c",
            padding:"15px 25px",
            borderRadius:"8px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Contactar por WhatsApp
        </a>
      </section>

    </main>
  );
}
