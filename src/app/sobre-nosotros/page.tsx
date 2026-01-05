import { InnerPage } from "@/components/InnerPage";

export default function SobreNosotrosPage() {
  return (
    <InnerPage
      section="Sobre Nosotros"
      title="Sobre Nosotros"
      heroTitle="Sobre\nNosotros"
      heroImageSrc="/2imagen.jpg"
      lead="Empresa familiar enfocada en ferretería eléctrica e industrial."
      intro={`Hnoz Fernandez es un distribuidor de materiales eléctricos, ferretería y suministros para obra y mantenimiento.

Trabajamos con un portafolio amplio para atender a técnicos, contratistas, industria y proyectos. Nuestro compromiso es brindar soluciones y un servicio al cliente enfocado en rapidez y confianza.

Con una atención cercana y asesoría práctica, buscamos ser tu aliado en cada compra y en cada etapa del proyecto.`}
      blocks={[
        {
          kind: "imageText",
          imageSrc: "/1imagen.jpg",
          heading: "Historia del Grupo",
          text: `Nacimos como un negocio familiar con foco en atención cercana y asesoría técnica.

Con el tiempo, ampliamos nuestro catálogo y cobertura para acompañar el crecimiento de nuestros clientes. Hoy seguimos evolucionando para ofrecer disponibilidad, alternativas y soporte oportuno.

Nuestra prioridad es mantener una experiencia simple: cotización clara, coordinación rápida y productos confiables.`,
        },
        {
          kind: "twoCol",
          leftTitle: "Bienvenido a\nHnoz Fernandez",
          rightText:
            `Nos enorgullece atender a clientes que confían en nosotros para sus proyectos y mantenimientos.

Contamos con una amplia gama de materiales eléctricos y ferretería industrial, con asesoría para elegir la opción adecuada según tu necesidad.

Nuestro objetivo es ayudarte a resolver con rapidez: confirmación de stock, alternativas equivalentes y coordinación de entrega o recojo.

Trabajamos para que tengas una experiencia simple y eficiente, con información clara y atención oportuna.`,
        },
        {
          kind: "imageText",
          imageSrc: "/3imagen.jpg",
          heading: "Cobertura Nacional",
          text: `Atendemos Lima y provincias.

Coordinamos pedidos, recojo y despachos según requerimiento, cuidando tiempos y comunicación.

Si necesitas una atención para proyecto, podemos ayudarte a organizar materiales y entregas por etapas.`,
        },
      ]}
      stats={{
        title: "Tangibilizando la Eficiencia",
        items: [
          { value: "+180", label: "Productos", className: "bg-[#D4A80F]" },
          { value: "12", label: "Categorías", className: "bg-[#5B3A7A]" },
          { value: "21%", label: "Crecimiento", className: "bg-emerald-700" },
          { value: "S/. 232 MM", label: "Atención", className: "bg-sky-600" },
          { value: "+11,000", label: "Clientes", className: "bg-rose-600" },
          { value: "+5,600 SKU", label: "En stock", className: "bg-[#1E2A7B]" },
        ],
      }}
    />
  );
}
