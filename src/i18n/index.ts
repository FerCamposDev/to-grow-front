import { Lang } from '@/types/lang';

import es from './es.json';
import esPolicies from './es.policies.json';

import en from './en.json';
import enPolicies from './en.policies.json';

export const LANGS: Lang[] = ['es', 'en'];

export const dictionary = {
  es: {
    ...es,
    policies: { ...esPolicies },
  },
  en: {
    ...en,
    policies: { ...enPolicies },
  },
}