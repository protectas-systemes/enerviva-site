"use client";

import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola, me gustaría recibir información.

Nombre: ${nombre}
Teléfono: ${telefono}
Ciudad: ${ciudad}
Mensaje: ${mensaje}`;

    const url = `https://wa.me/34623619672?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 pb-36 md:px-10 lg:px-12">
      <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              Contacto
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Solicita tu estudio energético
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Déjanos tus datos y te redirigiremos directamente a WhatsApp con tu solicitud ya preparada.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Respuesta</p>
                <p className="mt-1 font-semibold text-slate-900">Rápida</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Proceso</p>
                <p className="mt-1 font-semibold text-slate-900">Simple</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Atención</p>
                <p className="mt-1 font-semibold text-slate-900">Personalizada</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Nombre
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Teléfono
              </label>
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                placeholder="Tu teléfono"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Ciudad
              </label>
              <input
                type="text"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                placeholder="Tu ciudad"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Mensaje
              </label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={5}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                placeholder="Cuéntanos tu proyecto"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-green-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(22,163,74,0.35)] transition hover:-translate-y-0.5 hover:bg-green-700"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
