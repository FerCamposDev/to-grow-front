import { Lang } from "@/types/lang";

type Props = {
  params: {
    lang: Lang;
    id: string;
  }
}

export async function generateStaticParams() {
  const IDS = ['1', '2', '3']; // TODO: fetch all files
  
  return IDS.map(id => ({ id }));
}

export default function Post({ params }: Props) {
  const { lang = 'es', id } = params;

  return (
    <main>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      POST ID: {id}
    </main>
  );
}
