import { Lang } from "@/types/lang";
import { usePathname } from "next/navigation";

const LANGS: Lang[] = ['es', 'en'];

export const useClientLang = () => {
  const firstParam = usePathname()?.split('/')[1] as Lang;

  const lang: Lang = LANGS.includes(firstParam) ? firstParam : 'es';

  return {
    lang,
    homePath: `/${lang}`,
  }
}