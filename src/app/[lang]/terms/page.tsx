export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-3 my-10 mb-32">
      <div className="flex justify-center">
        <div className="w-full lg:w-10/12">
          <h1 className="font-bold text-2xl text-black mb-7">Términos y condiciones</h1>
          <div className="flex flex-col items-start justify-start col-span-12">
            <div className="text-sm text-gray-700 flex flex-col gap-4">
              <p><strong>Uso del Sitio:</strong> Usted está autorizado a utilizar el sitio web de ToGrow para acceder a la información, recursos y servicios proporcionados con fines legítimos y de acuerdo con estos términos y condiciones.</p>
              <p><strong>Propiedad Intelectual:</strong> Todos los contenidos y materiales presentes en el sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, videos, sonidos y software, son propiedad de ToGrow y están protegidos por leyes de propiedad intelectual.</p>
              <p><strong>Privacidad:</strong> Nuestra política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal. Al utilizar nuestro sitio, acepta las prácticas descritas en nuestra política de privacidad.</p>
              <p><strong>Enlaces a Terceros:</strong> El sitio web de ToGrow puede contener enlaces a sitios web de terceros. ToGrow no se hace responsable del contenido o las prácticas de privacidad de dichos sitios. La inclusión de enlaces no implica necesariamente una aprobación de los mismos.</p>
              <p><strong>Limitación de Responsabilidad:</strong> ToGrow no se hace responsable de cualquier pérdida, daño o perjuicio derivado del uso de este sitio web. El uso del sitio es bajo su propio riesgo.</p>
              <p><strong>Modificaciones:</strong> Nos reservamos el derecho de modificar, actualizar o cambiar estos términos y condiciones en cualquier momento sin previo aviso. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.</p>
              <p><strong>Ley Aplicable:</strong> Estos términos y condiciones se rigen por las leyes de Argentina y cualquier disputa relacionada con estos términos se resolverá en los tribunales competentes de La ciudad de La Plata.</p>
              <p>Al utilizar nuestro sitio web, acepta estos términos y condiciones. Si tienes alguna pregunta o inquietud, por favor, ponte en contacto con nosotros a través de <a href="mailto:info@togrow.com.ar">info@togrow.com.ar</a>.</p>
              <p>¡Gracias por elegir ToGrow!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
