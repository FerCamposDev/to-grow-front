import BlogHeader from "@/app/components/blog/Layouts/BlogHeader";
import PostCard from "@/app/components/shared/PostCard";
import { getPosts } from "@/helpers/posts";
import { LangParams } from "@/types/lang";
import { use } from "react";

export default function Home({ params }: LangParams) {
  const { lang = 'es' } = params;
  const posts = use(getPosts(lang));

  return (
    <main className="">
      <BlogHeader>
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
          ¡Bienvenido al blog de ToGrow!
        </h1>

        <div className="text-center text-sm md:text-lg">
          <p>
            Aquí encontrará todo sobre desarrollo de software, donde exploramos las últimas tendencias en programación, compartimos consejos para optimizar el rendimiento de sus aplicaciones y lo mantendremos al día sobre las novedades en el mundo del desarrollo de software.
          </p>
          <p>
            Actualizamos nuestro blog con nuevas publicaciones cada semana, para que siempre esté al tanto de las mejores prácticas y de las últimas noticias en el mundo del software.
          </p>

          <br />
          <p>
            Tenemos una gran variedad de contenidos, como tutoriales paso a paso, guías prácticas y análisis de las últimas tecnologías en el mundo del software.
          </p>
        </div>
      </BlogHeader>

      <div className="py-10 container px-2 mx-auto">
        <div className="flex flex-col gap-4">

          <h2 className="text-center text-4xl font-semibold">
            Nuestros Posts
          </h2>
          <p className="text-center">
            ¡Descubra nuestras últimas publicaciones sobre desarrollo de software y manténgase informado sobre las últimas tecnologías y tendencias en el sector!
          </p>

          {/* 
            No te pierdas nuestros posts destacados: "10 consejos para mejorar el rendimiento de tu aplicación" y "Las tendencias más importantes en desarrollo de software para el próximo año
          */}

          {/* TODO: filter by category or search by text */}

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {posts.map((post) => (
              <PostCard key={post.slug} data={post} lang={lang} />
            ))}
          </div>

          {/* TODO: paginate posts */}

          {/* TODO: Subscribe to our newsletter */}

        </div>
      </div>
    </main>
  );
}
