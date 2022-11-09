import useLocalization from '../../localization/useLocalization';
import AvailableLanguages from '../../localization/AvailableLanguages';

const LanguageSwitcher = () => {
  const { strings, setLanguage } = useLocalization();

  const languages: { code: AvailableLanguages, text: string }[] = [
    { code: 'en', text: 'English' },
    { code: 'ru', text: 'Русский' },
  ];

  const setLanguageByCode = (code: AvailableLanguages) => (event: any) => {
    event.preventDefault();
    setLanguage(code);
  };

  return (
    <div className="dropdown me-2 align-self-center">
      <a
        href="/"
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {strings.components.header.language}
      </a>
      <ul className="dropdown-menu">
        {languages.map(({ code, text }) => (
          <li key={code}>
            <a
              className="dropdown-item"
              href="/"
              onClick={setLanguageByCode(code)}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
