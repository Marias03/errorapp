import React, { useState } from "react";
import { Code, Filter, ChevronDown, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function Sidebar({
  selectedLanguage,
  setSelectedLanguage,
  selectedErrorType,
  setSelectedErrorType,
  menuOpen,
  setMenuOpen,
}) {
  const { t } = useTranslation();
  const [isTypeExpanded, setIsTypeExpanded] = useState(true);
  const [isLanguageExpanded, setIsLanguageExpanded] = useState(true);

  const languages = [
    "todos",
    "JavaScript",
    "Python",
    "PHP",
    "Java",
    "Ruby",
    "C#",
    "Go",
    "Nginx",
  ];

  const errorTypes = [
    { id: "todos", label: t("all_errors") },
    { id: "cliente", label: t("client_errors") },
    { id: "servidor", label: t("server_errors") },
  ];

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    if (window.innerWidth < 1024) {
      setMenuOpen(false);
    }
  };

  const handleTypeClick = (type) => {
    setSelectedErrorType(type);
    if (window.innerWidth < 1024) {
      setMenuOpen(false);
    }
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-72
        lg:relative lg:translate-x-0
        transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
        bg-gray-900 dark:bg-gray-950
        z-30 lg:z-0
        flex flex-col
        pt-16 lg:pt-0
      `}
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {/* Filtro por Tipo de Error */}
          <div>
            <button
              onClick={() => setIsTypeExpanded(!isTypeExpanded)}
              className="w-full flex items-center justify-between p-2 text-gray-100 hover:bg-gray-800 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>{t("filter_type")}</span>
              </div>
              {isTypeExpanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>

            {isTypeExpanded && (
              <div className="mt-2 space-y-1">
                {errorTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeClick(type.id)}
                    className={`
                      w-full px-4 py-2 rounded-lg text-left
                      ${
                        selectedErrorType === type.id
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }
                    `}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filtro por Lenguaje */}
          <div>
            <button
              onClick={() => setIsLanguageExpanded(!isLanguageExpanded)}
              className="w-full flex items-center justify-between p-2 text-gray-100 hover:bg-gray-800 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>{t("languages")}</span>
              </div>
              {isLanguageExpanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>

            {isLanguageExpanded && (
              <div className="mt-2 space-y-1">
                {languages.map((language) => (
                  <button
                    key={language}
                    onClick={() => handleLanguageClick(language)}
                    className={`
                      w-full px-4 py-2 rounded-lg text-left
                      ${
                        selectedLanguage === language
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }
                    `}
                  >
                    {language === "todos" ? t("all") : language}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ¿Sabías que? */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">
              {t("did_you_know")}
            </h3>
            <p className="text-sm text-gray-300">{t("did_you_know_text")}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
