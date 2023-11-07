import React from "react";

import { LANGUAGES } from "./languages";
import { T, Language } from "@magic-translate/react";

export const LanguageSelector: React.FC<{
  onLanguage(Language): void;
  language: Language;
}> = ({ language, onLanguage }) => (
  <label>
    <T>Language</T>:{" "}
    <select
      name="language"
      value={language}
      onChange={(val) => onLanguage(val.target.value as Language)}
    >
      {Object.entries(LANGUAGES).map(([lang, description]) => (
        <option value={lang}>
          <T lang={lang as Language}>{description}</T>
        </option>
      ))}
    </select>
  </label>
);
