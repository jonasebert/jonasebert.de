<script lang="ts">
    import { name, address, contact, uri } from "$lib/store";
</script>

<style class="postcss">
    /* Ihr CSS-Stil für die Tabelle */
    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: auto;
    }
    td {
        overflow: hidden;
        white-space: nowrap;
        padding: 4px;
        text-align: left;
    }
</style>

<div class="container">
    <div class="font-montserrat">
        <h1 class="text-5xl font-bold text-je-sand my-2 pt-10 font-poppins">Impressum</h1>
        <h2 class="font-poppins">Angaben gemäß §5 Telemediengesetz</h2>
        <p>{name}</p>
        <p>{address.street}</p>
        <p>{address.zipcode} {address.city}</p>
        <p>{address.country}</p>
    </div>
    <div class="font-montserrat">
        <h2 class="font-poppins">Kontakt</h2>
        <table>
            <tr>
              <td>Telefon</td>
              <td><a href="tel:{contact.tel}"> {contact.tel} </a></td>
            </tr>
            <tr>
              <td>Telefax</td>
              <td>{contact.fax}</td>
            </tr>
            <tr>
              <td>Web</td>
              <td><a href={contact.web}> {$uri.url.protocol}//{$uri.url.host}{contact.web} </a></td>
            </tr>
            <tr>
              <td>Mail</td>
              <td><a href="mailto:{contact.mail}"> {contact.mail} </a></td>
            </tr>
          </table>
    </div>
    <div class="font-montserrat">
        <h2 class="font-poppins">Verantwortlich für den Inhalt nach §55 Abs. 2 RStV</h2>
        <p>{name}</p>
        <p>{address.street}</p>
        <p>{address.zipcode} {address.city}</p>
        <p>{address.country}</p>
    </div>
    <div class="text-justify font-montserrat">
        <h2 class="font-poppins">Haftungsausschluss</h2>
        <h3 class="font-poppins">Haftung für Inhalte</h3>
        <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
    </div>
    <div class="text-justify font-montserrat">
        <h3 class="font-poppins">Haftung für Links</h3>
        <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
    </div>
    <div class="font-montserrat">
        <h2 class="font-poppins">Social Media</h2>
        <p>Dieses Impressum gilt ebenfalls für folgende Social Media Präsenzen:</p>
        <table>
            <tr>
                <td>BlueSky</td>
                <td>@jonasebert.bsky.social</td>
            </tr>
            <tr>
                <td>Instagram</td>
                <td>@jonas_ebert</td>
            </tr>
            <tr>
                <td>Threads</td>
                <td>@jonas_ebert</td>
            </tr>
            <tr>
                <td>X (Twitter)</td>
                <td>@jonas_ebert</td>
            </tr>
            <tr>
                <td>YouTube</td>
                <td>@jonas_ebert</td>
            </tr>
        </table>
    </div>
</div>