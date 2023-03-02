import type { NextPage } from "next";
import styles from "./index.module.scss";
import { DefaultLayout } from "../components/layouts/default-layout";
import { ProjectsSection } from "../components/sections/projects";
import { HeroSection } from "../components/sections/hero";
import Head from "next/head";

export const Privacy: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex" />
      </Head>
      <h1 data-aos="fade-left">
        D<span>4</span>tenschutzerklärung
      </h1>

      <h2>Kontaktinformationen</h2>
      <p>
        <span data-nosnippet>
          Inhaber <br></br>Leon Borlinghaus<br></br> Lindenstraße 75a <br></br>
          10969 Berlin <br></br>
          <br></br>E-Mail-Adresse: leon.borlinghaus@gmail.com
        </span>
      </p>

      <h2>Maßgebliche Rechtsgrundlagen</h2>
      <p>
        Für jede Datenverarbeitungen teilen wir Ihnen die Rechtsgrundlage
        basierend auf Art. 13 DSGVO mit. Sofern wir die Rechtsgrundlage für eine
        Verarbeitung nicht genauer spezifizieren gilt folgendes: Die
        Rechtsgrundlage für das Einholen einer Einwilligung erfolgt auf Basis
        von Art. 6 Abs. 1 lit. a und Art. 7 DSGVO. Die Rechtsgrundlage für die
        Erfüllung unseres Vertrages sowie die Erbringung unserer Leistungen ist
        Art. 6 Abs. 1 lit. b DSGVO. Die Rechtsgrundlage für die Erfüllung
        rechtlicher Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO. Die
        Rechtsgrundlage für die Wahrung unserer berechtigten Interessen ist Art.
        6 Abs. 1 lit. f DSGVO. Widerruf Sie haben das Recht, jegliche erteilte
        Einwilligungen in die Datenverarbeitung für die Zukunft zu widerrufen.
        Grundlage hierfür ist Art. 7 Abs. 3 DSGVO. Ihre Rechte Sie haben
        gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
        personenbezogenen Daten: Das Recht auf Auskunft, Das Recht auf
        Berichtigung oder Löschung (&quot;Recht auf Vergessenwerden&quot;), Das
        Recht auf Einschränkung der Verarbeitung, Das Recht auf Widerspruch
        gegen die Verarbeitung, Das Recht auf Datenübertragbarkeit, Das Recht,
        nicht einer ausschließlich auf einer automatisierten Verarbeitung –
        einschließlich Profiling – beruhenden Entscheidung unterworfen zu
        werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in
        ähnlicher Weise erheblich beeinträchtigt. Sie haben zudem das Recht,
        sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
        personenbezogenen Daten durch uns zu beschweren. Sie können Ihre Rechte
        wahrnehmen über unserere E-Mail an: E-Mail:
        <span data-nosnippet>leon.borlinghaus@gmail.com</span>
      </p>

      <h2>Datenschutzbeauftragter</h2>
      <p>
        Es besteht nach Art. 37 Abs. 1 DS-GVO, § 38 BDSG keine Pflicht zur
        Benennung eines Datenschutzbeauftragten. Wir haben derzeit auch keinen
        Datenschutzbeauftragten freiwillig benannt. Für Fragen rund um den
        Datenschutz wenden Sie sich bitte direkt an uns als verantwortliche
        Stelle.
      </p>

      <h2>Cookies / Local Storage</h2>
      <p>
        Wir setzen teilweise auf Cookies bzw. speichern Daten im &quot;Local
        Storage&quot; Ihres Browsers. Wir setzen die Technologie ein um Sie beim
        nächsten Besuch unserer Webseite wiederzuerkennen. Die Rechtsgrundlage
        für diese Verarbeitung bildet Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes
        Interesse). Sie können das Speichern von Cookies und das Speichern im
        &quot;Local Storage&quot; verhindern, indem Sie die entsprechenden
        Einstellungen in Ihrem Browser vornehmen.
      </p>

      <h2>Protokolldaten</h2>
      <p>
        Wir setzen auf automatische Protokolldaten beim Abruf unserer Webseiten.
        Wir setzen die Technologie zur technischen Administration und zur
        Absicherung unserer Dienste ein. Die Rechtsgrundlage für diese
        Verarbeitung bildet Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse).
        Wir verarbeiten folgende mit dieser Technologie folgende Daten: Name der
        abgerufenen Webseite, Datum und Uhrzeit des Abrufs, Status Code der
        Antwort, Browsertyp und Version, Referrer URL (die zuvor besuchte
        Seite), Anonymisierte-IP-Adresse.
      </p>
    </DefaultLayout>
  );
};

export default Privacy;
