import LocalizedStrings from 'react-localization';

import strings_en from './strings_en';
import strings_ru from './strings_ru';

const strings = new LocalizedStrings({
  en: strings_en,
  ru: strings_ru,
});

export default strings;
