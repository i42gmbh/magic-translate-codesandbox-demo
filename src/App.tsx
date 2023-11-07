import "./styles.css";
import { useState } from "react";
import { MagicTranslateProvider, Language, T } from "@magic-translate/react";
import { LanguageSelector } from "./LanguageSelector";

/**
 * # Magic Translate Demo 🪄 #
 *
 * Please note that this demo application uses a demo API key.
 * Your text changes might not be translated as the demo API
 * key's quota is most likely depleted.
 *
 * To create your own, unused API key please visit
 * https://magictranslate.io
 *
 */

export default function App() {
  const [language, setLanguage] = useState(Language.EN);

  return (
    <MagicTranslateProvider
      language={language}
      apiKey="65958222-c859-4607-a780-85b8cd080ac1"
    >
      <div className="App">
        <LanguageSelector language={language} onLanguage={setLanguage} />
        <h1>
          <T>Magic Translate Demo</T>
        </h1>
        <h2>
          <T>
            Translating React apps has never been easier / faster / cheaper.
          </T>
        </h2>
        <p>
          <T>
            It has never been easier to translate your React application into
            any language. Go ahead and change the language to experience the
            magic!
          </T>
        </p>
      </div>
    </MagicTranslateProvider>
  );
}
