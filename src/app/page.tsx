import { permanentRedirect, RedirectType } from "next/navigation";

export default function RootPage() {
  return permanentRedirect('es', RedirectType.replace);
}