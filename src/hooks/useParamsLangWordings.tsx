import { dictionary } from "@/i18n";
import { LangProps } from "@/types/lang";
import { useParams } from "next/navigation";

export const useParamsLangWordings = () => {
  const { lang = 'es' } = useParams<LangProps>();
  const wordings = dictionary[lang];

  return { lang, wordings }
}