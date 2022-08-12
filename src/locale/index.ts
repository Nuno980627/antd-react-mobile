import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import cn from './cn'
import en from './en'
const resources = {
  cn: {
    translation: cn
  },
  en: {
    translation: en
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: 'cn', // if you're using a language detector, do not define the lng option
    fallbackLng: 'cn',
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export const changeLang = () => {
  i18n.changeLanguage(i18n.language === 'cn' ? 'en' : 'cn')
}
export default i18n
