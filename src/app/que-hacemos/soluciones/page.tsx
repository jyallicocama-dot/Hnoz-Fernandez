import { InnerPage } from "@/components/InnerPage";

export default function SolucionesPage() {
  return (
    <InnerPage
      section="Qué Hacemos"
      title="Soluciones"
      heroTitle="Soluciones"
      heroImageSrc="/4imagen.jpg"
      lead="Soluciones prácticas para obra, mantenimiento y proyectos."
      intro="Más que vender productos, buscamos ayudarte a resolver necesidades: selección por aplicación, equivalencias, kits y soporte para compras recurrentes."
      blocks={[
        {
          kind: "imageText",
          imageSrc: "/2imagen.jpg",
          heading: "Enfoque en el proyecto",
          text: "Te apoyamos a estandarizar materiales, optimizar compras y coordinar entregas según cronograma.",
        },
      ]}
    />
  );
}
