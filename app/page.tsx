import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_28%),linear-gradient(to_bottom,white,rgba(240,253,244,0.75))]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 lg:px-12">
          <header className="mb-16 flex items-center justify-between rounded-full border border-slate-200/70 bg-white/80 px-5 py-3 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-700 text-sm font-semibold text-white shadow-lg">
                E
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  EnerViva
                </p>
                <p className="text-sm text-slate-500">
                  Eficiencia energética en España
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/34672759866"
              className="rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 transition hover:border-green-300 hover:bg-green-50"
            >
              WhatsApp
            </a>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
                Soluciones modernas para reducir consumo, mejorar confort y valorizar el ahorro energético
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 md:text-7xl">
                Energía inteligente,
                <span className="block bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  ahorro real
                </span>
                para tu vivienda
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                En EnerViva ayudamos a propietarios a mejorar la eficiencia energética de su vivienda
                con soluciones como aislamiento, optimización del consumo y actuaciones que pueden
                generar ahorro energético valorizable dentro del sistema CAE.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white shadow-[0_14px_40px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5"
                >
                  Solicitar estudio gratuito
                </a>

                <a
                  href="#como-funciona"
                  className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Cómo funciona
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur">
                  <p className="text-sm text-slate-500">Confort</p>
                  <p className="mt-2 text-xl font-semibold">Más estabilidad térmica</p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur">
                  <p className="text-sm text-slate-500">Ahorro</p>
                  <p className="mt-2 text-xl font-semibold">Menor consumo energético</p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur">
                  <p className="text-sm text-slate-500">Gestión</p>
                  <p className="mt-2 text-xl font-semibold">Acompañamiento de principio a fin</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-green-200/40 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-emerald-300/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="rounded-[1.6rem] bg-gradient-to-br from-slate-950 via-green-950 to-emerald-800 p-8 text-white">
                  <p className="text-sm font-medium text-green-200">Sistema CAE</p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                    Convierte el ahorro energético en valor económico
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-green-50/90">
                    Si una actuación genera ahorro de energía final, ese ahorro puede formar parte de un
                    expediente CAE y recibir una contraprestación económica, según la elegibilidad de la
                    actuación, la documentación disponible y la validación del proceso.
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Estudio previo de la vivienda o actuación",
                      "Verificación de elegibilidad y documentación",
                      "Canalización del expediente con enfoque técnico y comercial",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
                      >
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-green-300" />
                        <p className="text-sm text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contacto"
                    className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-green-900 transition hover:bg-green-50"
                  >
                    Solicitar estudio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Aislamiento",
              text: "Mejora del comportamiento térmico de la vivienda para reducir pérdidas energéticas y aumentar el confort interior.",
            },
            {
              title: "Eficiencia energética",
              text: "Actuaciones orientadas a reducir el consumo y optimizar el uso de la energía en el hogar.",
            },
            {
              title: "Acompañamiento",
              text: "Orientación clara sobre viabilidad, documentación, proceso y posibilidades de valorización del ahorro.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-green-700">
                EnerViva
              </p>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {card.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
            Cómo funciona
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Un proceso claro, premium y pensado para convertir
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nuestra misión es simplificar al máximo un sistema técnico para que el propietario entienda
            qué puede hacer, qué ventajas puede obtener y qué documentación necesita para avanzar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {[
            ["01", "Primer contacto", "Recogemos la información básica del inmueble y de la actuación prevista."],
            ["02", "Análisis inicial", "Revisamos si la actuación encaja con una lógica de ahorro energético y qué vía puede ser la más adecuada."],
            ["03", "Viabilidad y expediente", "Se organiza la información necesaria para valorar elegibilidad, documentación y posible monetización del ahorro."],
            ["04", "Acompañamiento", "Seguimos el proceso con un enfoque comercial y técnico para dar claridad en cada etapa."],
          ].map(([num, title, text]) => (
            <div
              key={num}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm font-semibold text-green-700">{num}</p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
                Qué es el sistema CAE
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                Explicado de forma simple
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                El sistema CAE permite dar valor económico a ahorros de energía final obtenidos mediante
                actuaciones de eficiencia energética.
              </p>

              <p>
                En términos sencillos: si una actuación reduce de forma acreditable el consumo energético,
                ese ahorro puede integrarse en un proceso de certificación y generar una contraprestación,
                siempre que se cumplan las condiciones técnicas, documentales y regulatorias aplicables.
              </p>

              <p>
                Por eso no se trata solo de “hacer una obra”, sino de estructurar correctamente la
                actuación, la trazabilidad del ahorro y el expediente asociado.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Marco oficial",
                text: "Sistema regulado en España para certificar y canalizar ahorros de energía final.",
              },
              {
                title: "Valor económico",
                text: "El ahorro energético puede recibir una contraprestación si entra correctamente en el sistema.",
              },
              {
                title: "Documentación",
                text: "La calidad del expediente y de la trazabilidad del ahorro es clave en el proceso.",
              },
              {
                title: "Elegibilidad",
                text: "No todas las actuaciones aplican igual: depende del tipo de medida, datos y validación.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              Por qué EnerViva
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Una marca pensada para escalar en energía
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              No somos una simple página informativa. Queremos posicionar EnerViva como una marca clara,
              seria y premium dentro del sector de la eficiencia energética y de las soluciones para el hogar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Diseño de experiencia premium y enfoque de conversión.",
              "Comunicación clara para explicar un sistema complejo.",
              "Posicionamiento orientado a vivienda, ahorro y confianza.",
              "Base perfecta para añadir más servicios energéticos a futuro.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700" />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-green-950 to-emerald-900 p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-200">
                Preguntas frecuentes
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Lo esencial sobre CAE y eficiencia energética
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "¿El sistema CAE es una ayuda automática?",
                  a: "No. La posibilidad de recibir una contraprestación depende de la actuación, de la documentación, de la elegibilidad y del proceso de validación correspondiente.",
                },
                {
                  q: "¿Solo sirve para grandes empresas?",
                  a: "No necesariamente. El sistema contempla que quien realiza una actuación de eficiencia energética pueda ser propietario del ahorro y canalizarlo dentro del marco regulado.",
                },
                {
                  q: "¿El aislamiento puede generar ahorro energético valorizable?",
                  a: "Sí, la mejora del aislamiento térmico entra dentro de las actuaciones de eficiencia energética mencionadas oficialmente, siempre según el caso y el expediente.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/85">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
  <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
    <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
      <div className="p-8 md:p-12 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
          Aislamiento de buhardillas
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
          Una de las formas más inteligentes de reducir pérdidas de energía
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          En muchas viviendas, una parte importante de las pérdidas térmicas se
          produce por la cubierta o por espacios bajo cubierta mal aislados.
          Actuar sobre esta zona puede mejorar el confort interior, reducir la
          sensación de frío en invierno y ayudar a optimizar el consumo
          energético del hogar.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">
              Más confort térmico
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Menos variaciones de temperatura y una vivienda más agradable
              durante todo el año.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">
              Menor consumo
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Una vivienda mejor aislada necesita menos energía para mantener una
              temperatura confortable.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">
              Mejora del hogar
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              El aislamiento es una mejora útil, duradera y coherente con una
              vivienda más eficiente.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">
              Posible encaje CAE
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Según el caso, la actuación y la documentación, la mejora del
              aislamiento puede entrar dentro de una lógica de ahorro energético
              valorizable.
            </p>
          </div>
        </div>

        <a
          href="#contacto"
          className="mt-8 inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(22,163,74,0.35)] transition hover:-translate-y-0.5 hover:bg-green-700"
        >
          Quiero estudiar mi vivienda
        </a>
      </div>

      <div className="bg-gradient-to-br from-slate-950 via-green-950 to-emerald-900 p-8 text-white md:p-12 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-200">
          Cómo trabajamos
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
          Un enfoque claro, simple y profesional
        </h3>

        <div className="mt-8 space-y-4">
          {[
            "Analizamos la vivienda y el tipo de espacio a mejorar.",
            "Revisamos si la actuación tiene sentido desde el punto de vista energético.",
            "Valoramos la información disponible para estudiar su posible encaje en una lógica CAE.",
            "Te orientamos de forma clara sobre el siguiente paso.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4 backdrop-blur"
            >
              <p className="leading-7 text-white/90">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-medium text-green-200">
            Importante
          </p>
          <p className="mt-2 text-sm leading-7 text-white/85">
            No se trata de una ayuda automática ni universal. Cada caso depende
            del tipo de actuación, de la vivienda, de la documentación y del
            proceso de validación aplicable.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <ContactForm />
    </main>
  );
}
