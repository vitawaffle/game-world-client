import { useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';

import AvailableLanguages from './AvailableLanguages';
import strings from './strings';

const useLocalization = (section?: string) => {
  const [lang, setLang] = useState<AvailableLanguages>('en');
  const [cookies, setCookie] = useCookies(['lang']);

  const setLanguage = useCallback((lang: AvailableLanguages) => {
    setLang(lang);
    strings.setLanguage(lang);
    setCookie('lang', lang);
  }, [setCookie]);

  useEffect(() => {
    setLanguage(cookies.lang ?? 'en');
  }, [cookies.lang, setLanguage]);

  return {
    strings,
    lang,
    setLanguage,
  };
};

export default useLocalization;
