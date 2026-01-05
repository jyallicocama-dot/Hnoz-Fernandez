import { InnerPage } from "@/components/InnerPage";

export default function SostenibilidadPage() {
  return (
    <InnerPage
      section="Compromisos"
      title="Sostenibilidad"
      heroTitle="Sostenibilidad"
      heroImageSrc="/4imagen.jpg"
      lead="Mejorando procesos y promoviendo prácticas responsables."
      intro="Buscamos avanzar hacia operaciones más eficientes, reduciendo desperdicios y promoviendo buenas prácticas en el manejo de materiales y logística."
      blocks={[
        {
          kind: "imageText",
          imageSrc: "/3imagen.jpg",
          heading: "Mejora continua",
          text: "Priorizamos acciones que mejoren la eficiencia y la experiencia del cliente, manteniendo responsabilidad en nuestra operación.",
        },
      ]}
    />
  );
}
