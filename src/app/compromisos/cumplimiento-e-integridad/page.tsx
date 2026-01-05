import { InnerPage } from "@/components/InnerPage";

export default function CumplimientoEIntegridadPage() {
  return (
    <InnerPage
      section="Compromisos"
      title="Cumplimiento e Integridad"
      heroTitle="Cumplimiento\ne Integridad"
      heroImageSrc="/3imagen.jpg"
      lead="Transparencia y responsabilidad en cada atención."
      intro="Promovemos relaciones basadas en confianza, información clara y cumplimiento de lo acordado: productos, tiempos y atención."
      blocks={[
        {
          kind: "imageText",
          imageSrc: "/1imagen.jpg",
          heading: "Buenas prácticas",
          text: "Buscamos mejorar continuamente nuestros procesos para brindar una experiencia consistente y confiable.",
        },
      ]}
    />
  );
}
