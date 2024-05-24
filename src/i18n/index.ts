import { Lang } from '@/types/lang';

import es from './es.json';
import esPolicies from './es.policies.json';
import esTerms from './es.terms.json';

import en from './en.json';
import enPolicies from './en.policies.json';
import enTerms from './en.terms.json';

export const LANGS: Lang[] = ['es', 'en'];

export const dictionary = {
  es: {
    ...es,
    policies: esPolicies,
    termsAndConditions: esTerms,
  },
  en: {
    ...en,
    policies: enPolicies,
    termsAndConditions: enTerms,
  },
}