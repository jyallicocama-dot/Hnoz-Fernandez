import { InnerPage } from "@/components/InnerPage";

export default function DiversidadEInclusionPage() {
  return (
    <InnerPage
      section="Compromisos"
      title="Diversidad e Inclusión"
      heroTitle="Diversidad\ne Inclusión"
      heroImageSrc="/2imagen.jpg"
      lead="Respeto y trabajo en equipo como base de nuestro servicio."
      intro="Valoramos un ambiente de trabajo respetuoso y colaborativo, enfocado en atender mejor a nuestros clientes y comunidades."
      blocks={[
        {
          kind: "imageText",
          imageSrc: "/4imagen.jpg",
          heading: "Cultura de servicio",
          text: "Fomentamos el aprendizaje, la colaboración y el buen trato para ofrecer una atención de calidad.",
        },
      ]}
    />
  );
}
