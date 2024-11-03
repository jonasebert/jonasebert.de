<script lang="ts">
	import { name, address, contact, uri } from "$lib/store";
</script>

<div class="container pb-12">
	<h1 class="text-5xl font-bold text-je-sand my-2 py-10">Datenschutz</h1>
	<div class="text-balance font-montserrat mb-4">
		Mit dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten (im Folgenden auch nur als "Daten" bezeichnet) aufklären. Personenbezogene Daten sind alle Daten, die einen persönlichen Bezug zu Ihnen aufweisen, z.B. Name, Adresse, E-Mail-Adresse oder Ihr Nutzerverhalten. Die Datenschutzerklärung gilt für alle von uns vorgenommene Daten-Verarbeitungsvorgänge sowohl im Rahmen unserer Kerntätigkeit als auch für die von uns vorgehaltenen Online-Medien.
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Wer bei uns für die Datenverarbeitung verantwortlich ist</h2>
		<div class="font-montserrat text-balance mb-4">
			Verantwortlich für die Datenverarbeitung ist:
		</div>
		<div class="font-montserrat text-balance mb-4">
			{name} <br /> {address.street} <br /> {address.zipcode} {address.city} <br /> {address.country} <br /> <a href="mailto:{contact.mail}"> {contact.mail} </a> <br /> <a href="/legal/imprint"> {$uri.url.protocol}//{$uri.url.host}/legal/imprint </a>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Ihre Rechte nach der DSGVO</h2>		
		<div class="text-balance font-montserrat mb-4">
			Nach der DSGVO stehen Ihnen die nachfolgend aufgeführten Rechte zu, die Sie jederzeit bei
			dem in Ziffer 1. dieser Datenschutzerklärung genannten Verantwortlichen geltend machen
			können:
		</div>
		<div class="text-balance font-montserrat mb-4">
			<ul class="list-disc">
				<li class="mb-2">
					<strong>Recht auf Auskunft:</strong> Sie haben das Recht, von uns Auskunft darüber zu verlangen,
					ob und welche Daten wir von Ihnen verarbeiten.
				</li>
				<li class="mb-2">
					<strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Berichtigung unrichtiger
					oder Vervollständigung unvollständiger Daten zu verlangen.
				</li>
				<li class="mb-2">
					<strong>Recht auf Löschung:</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.
				</li>
				<li class="mb-2">
					<strong>Recht auf Einschränkung:</strong> Sie haben in bestimmten Fällen das Recht zu verlangen,
					dass wir Ihre Daten nur noch eingeschränkt bearbeiten.
				</li>
				<li class="mb-2">
					<strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht zu verlangen, dass wir
					Ihnen oder einem anderen Verantwortlichen Ihre Daten in einem strukturierten, gängigen und
					maschinenlesebaren Format übermitteln.
				</li>
				<li class="mb-2">
					<strong>Beschwerderecht</strong>: Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
					beschweren. Zuständig ist die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes, Ihres
					Arbeitsplatzes oder unseres Firmensitzes.
				</li>
			</ul>
		</div>
		<h3 class="text-3xl font-semibold text-je-sand my-2 py-10">Widerrufsrecht</h3>
		<div class="text-balance font-montserrat mb-4">
			Sie haben das Recht, die von Ihnen erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.
		</div>
		<h3 class="text-3xl font-semibold text-je-sand my-2 py-10">Widerspruchsrecht</h3>
		<div class="text-balance font-montserrat mb-4">
			Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer Daten, die wir auf unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO stützen, Widerspruch einzulegen. Sofern Sie von Ihrem Widerspruchsrecht Gebrauch machen, bitten wir Sie um die Darlegung der Gründe. Wir werden Ihre personenbezogenen Daten dann nicht mehr verarbeiten, es sei denn, wir können Ihnen gegenüber nachweisen, dass zwingende schutzwürdige Gründe an der Datenverarbeitung Ihre Interessen und Rechte überwiegen.
		</div>
		<div class="text-balance font-montserrat mb-4 font-bold underline">
			Unabhängig vom vorstehend Gesagten, haben Sie das jederzeitige Recht, der Verarbeitung Ihrer personenbezogenen Daten für Zwecke der Werbung und Datenanalyse zu widersprechen.
		</div>
		<div class="text-balance font-montserrat mb-4">
			Ihren Widerspruch richten Sie bitte an die oben angegebene Kontaktadresse des Verantwortlichen.
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Wann löschen wir Ihre Daten?</h2>
		<div class="text-balance font-montserrat mb-4">
			Wir löschen Ihre Daten dann, wenn wir diese nicht mehr brauchen oder Sie uns dies vorgeben. Das bedeutet, dass - sofern sich aus den einzelnen Datenschutzhinweisen dieser Datenschutzerklärung nichts anderes ergibt - wir Ihre Daten löschen,
		</div>
		<div class="text-balance font-montserrat mb-4">
			<ul class="list-disc">
				<li class="mb-2">
					wenn der Zweck der Datenverarbeitung weggefallen ist und damit die jeweilige in den
					einzelnen Datenschutzhinweisen genannte Rechtsgrundlage nicht mehr besteht, also bspw.
					<ul class="list-disc">
						<li class="mb-2">
							nach Beendigung der zwischen uns bestehenden vertraglichen oder mitgliedschaftlichen
							Beziehungen (Art. 6 Abs. 1 lit. a DSGVO) oder
						</li>
						<li class="mb-2">
							nach Wegfall unseres berechtigten Interesses an der weiteren Verarbeitung oder
							Speicherung Ihrer Daten (Art. 6 Abs. 1 lit. f DSGVO),
						</li>
					</ul>
				</li>
				<li class="mb-2">
					wenn Sie von Ihrem Widerrufsrecht Gebrauch machen und keine anderweitige gesetzliche
					Rechtsgrundlage für die Verarbeitung im Sinne von Art. 6 Abs. 1 lit. b-f DSGVO eingreift,
				</li>
				<li class="mb-2">
					wenn Sie vom Ihrem Widerspruchsrecht Gebrauch machen und der Löschung keine zwingenden
					schutzwürdigen Gründe entgegenstehen.
				</li>
			</ul>
		</div>
		<div class="text-balance font-montserrat mb-4">
			Sofern wir (bestimmte Teile) Ihre(r) Daten jedoch noch für andere Zwecke vorhalten müssen, weil dies etwa steuerliche Aufbewahrungsfristen (in der Regel 6 Jahre für Geschäftskorrespondenz bzw. 10 Jahre für Buchungsbelege) oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen aus vertraglichen Beziehungen (bis zu vier Jahren) erforderlich machen oder die Daten zum Schutz der Rechte einer anderen natürlichen oder juristischen Person gebraucht werden, löschen wir (den Teil) Ihre(r) Daten erst nach Ablauf dieser Fristen. Bis zum Ablauf dieser Fristen beschränken wir die Verarbeitung dieser Daten jedoch auf diese Zwecke (Erfüllung der Aufbewahrungspflichten).
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Webhosting</h2>
		<div class="text-balance font-montserrat mb-4">
			Wir bedienen uns zum Vorhalten unserer Internetseiten eines Anbieters, auf dessen Server unsere Internetseiten gespeichert und für den Abruf im Internet verfügbar gemacht werden (Hosting). Hierbei können von dem Anbieter all diejenigen über den von Ihnen genutzten Browser übertragenen Daten verarbeitet werden, die bei der Nutzung unserer Internetseiten anfallen. Hierzu gehören insbesondere Ihre IP-Adresse, die der Anbieter benötigt, um unser Online-Angebot an den von Ihnen genutzten Browser ausliefern zu können sowie sämtliche von Ihnen über unsere Internetseite getätigten Eingaben. Daneben kann der von uns genutzte Anbieter
		</div>
		<div class="text-balance font-montserrat mb-4">
			<ul class="list-disc">
				<li class="mb-2">das Datum und die Uhrzeit des Zugriffs auf unsere Internetseite</li>
				<li class="mb-2">Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
				<li class="mb-2">Zugriffsstatus (HTTP-Status)</li>
				<li class="mb-2">die übertragene Datenmenge</li>
				<li class="mb-2">der Internet-Service-Provider des zugreifenden Systems</li>
				<li class="mb-2">der von Ihnen verwendete Browsertyp und dessen Version</li>
				<li class="mb-2">das von Ihnen verwendete Betriebssystem</li>
				<li class="mb-2">die Internetseite, von welcher Sie gegebenenfalls auf unsere Internetseite gelangt sind</li>
				<li class="mb-2">die Seiten bzw. Unterseiten, welche Sie auf unserer Internetseite besuchen.</li>
			</ul>
		</div>
		<div class="text-balance font-montserrat mb-4">
			erheben. Die vorgenannten Daten werden als Logfiles auf den Servern unseres Anbieters gespeichert. Dies ist erforderlich, um die Stabilität und Sicherheit des Betriebs unserer Internetseite zu gewährleisten.
		</div>
		<div class="text-balance font-montserrat mb-4 font-bold">
			Betroffene Daten:
		</div>
		<div class="text-balance font-montserrat mb-4">
			<ul class="list-disc">
				<li class="mb-2">Inhaltsdaten (bspw. Posts, Fotos, Videos)</li>
				<li class="mb-2">Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
				<li class="mb-2">Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse)</li>
			</ul>
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Betroffene Personen: </strong>Nutzer unserer Internetpräsenz
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Verarbeitungszweck: </strong>Ausspielen unserer Internetseiten, Gewährleistung des
				Betriebs unserer Internetseiten
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Rechtsgrundlage:</strong> Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Von uns beauftragte(r) Webhoster:</strong>
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Vercel Inc.</strong>
		</div>
		<div class="text-balance font-montserrat mb-4">
			Dienstanbieter: Vercel Inc., 340 S Lemon Ave 4133 Walnut, CA 91789, USA<br />
			<a href="https://vercel.com/" target="_blank" class="externalLink">Internetseite</a>
			<a href="https://vercel.com/legal/privacy-policy" target="_blank" class="externalLink">Datenschutzerklärung</a>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Content-Delivery-Network</h2>
		<div class="text-balance font-montserrat mb-4">
			Wir benutzen zum Ausspielen unserer Internetseiten ein Content-Delivery-Network (CDN). Ein CDN ist ein Netz regional verteilter und über das Internet verbundener Server. Über das CDN werden skalierende Speicher- und Auslieferungskapazitäten zur Verfügung gestellt. Hierdurch werden die Ladezeiten unserer Internetseiten optimiert und auch bei großen Lastspitzen ein optimaler Datendurchsatz gewährleistet. Nutzeranfragen auf unseren Internetseiten werden über Server des CDN geleitet. Aus diesen Datenströmen werden Statistiken erstellt. Dies dient zum einen dazu, potentielle Bedrohungen für unsere Internetseiten durch Schadsoftware frühzeitig zu erkennen und zum anderen unser Angebot stetig zu verbessern und unsere Internetseiten für Sie als Nutzer nutzerfreundlicher auszugestalten.
		</div>
		<div class="text-balance font-montserrat mb-4">
			Wir möchten Sie darauf hinweisen, dass je nach Sitzland des unten genannten Diensteanbieters die über den Dienst erfassten Daten außerhalb des Raumes der Europäischen Union übertragen und verarbeitet werden können. Es besteht in diesem Fall das Risiko, dass das von der DSGVO vorgeschriebene Datenschutzniveau nicht eingehalten und die Durchsetzung Ihrer Rechte nicht oder nur erschwert erfolgen kann.
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Betroffene Daten:</strong>
		</div>
		<div class="text-balance font-montserrat mb-4">
			<ul class="list-disc">
				<li class="mb-2">Inhaltsdaten (bspw. Posts, Fotos, Videos)</li>
				<li class="mb-2">Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
				<li class="mb-2">Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse)</li>
			</ul>
		<div class="text-balance font-montserrat mb-4">
			<strong>Verarbeitungszweck: </strong>Technische Optimierung der Internetpräsenz, Analyse von Fehlern und Nutzerverhalten
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Rechtsgrundlage:</strong> Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Eingesetze CDN-Dienstleister:</strong>
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Cloudflare</strong>
			<div>
				Diensteanbieter: Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA<br />
				<a href="https://www.cloudflare.com/" class="externalLink">Internetseite</a><br />
				<a href="https://www.cloudflare.com/privacypolicy/" class="externalLink">Datenschutzerklärung</a><br />
				<a href="https://blog.cloudflare.com/what-cloudflare-logs/" class="externalLink">Umfang der Datenerfassung</a>
			</div>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Kontaktaufnahme</h2>
		<div class="text-balance font-montserrat mb-4">
			Soweit Sie uns über E-Mail, Soziale Medien, Telefon, Fax, Post, unser Kontaktformular oder sonstwie ansprechen und uns hierbei personenbezogene Daten wie Ihren Namen, Ihre Telefonnummer oder Ihre E-Mail-Adresse zur Verfügung stellen oder weitere Angaben zur Ihrer Person oder Ihrem Anliegen machen, verarbeiten wir diese Daten zur Beantwortung Ihrer Anfrage im Rahmen des zwischen uns bestehenden vorvertraglichen oder vertraglichen Beziehungen.
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Betroffene Daten:</strong>
			<ul>
				<li>Bestandsdaten (bspw. Namen, Adressen)</li>
				<li>Kontakdaten (bspw. E-Mail-Adresse, Telefonnummer, Postanschrift)</li>
				<li>Inhaltsdaten (Texte, Fotos, Videos)</li>
				<li>Vertragsdaten (bspw. Vertragsgegenstand, Vertragsdauer)</li>
			</ul>
			<div class="text-balance font-montserrat mb-4">
				<strong>Betroffene Personen: </strong>Interessenten, Kunden, Geschäfts- und Vertragspartner
			</div>
			<div class="text-balance font-montserrat mb-4">
				<strong>Verarbeitungszweck: </strong>Kommunikation sowie Beantwortung von Kontaktanfragen,
				Büro und Organisationsverfahren
			</div>
			<div class="text-balance font-montserrat mb-4">
				<strong>Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche Anfragen, Art. 6 Abs.
				1 lit. b DSGVO, berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO
			</div>
			<div>
				<h3 class="text-3xl font-semibold text-je-sand my-2 py-10">Angaben zu dem von uns genutzten Drittanbieter:</h3>
				<div class="text-balance font-montserrat mb-4">
					Das Kontaktformular übermittelt Daten an Google Formulare (Google Forms). Die erhaltenen Nachrichten und Daten werden von unserer Seite umgehend nach der Bearbeitung gelöscht.
				</div>
				<a href="https://policies.google.com/privacy" class="externalLink">Zur Datenschutzerklärung von Google</a>
			</div>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Zahlungsdienstleister</h2>
		<div class="text-balance font-montserrat mb-4">
			Gemäß unserer gesetzlichen Pflichten beziehungsweise wegen unserer berechtigten Interessen an einer effizienten, sicheren und Kunden orientierten Zahlungsabwicklung können Personen, die mit uns einen Vertrag oder eine anderweitige Rechtsbeziehung geschlossen haben, zur Zahlung sowohl Banken und Kreditinstitute, als auch weitere Zahlungsdienstleister in Anspruch nehmen. Die von uns angebotenen Zahlungsdienstleister, verarbeiten in diesem Rahmen Bestandsdaten, dazu zählen Name, Adresse oder auch Bankdaten wie Konto-/Kreditkartennummer, Passwörter, TANs, Prüfnummern sowie Angaben zum abgeschlossenen Vertrag und Angaben zum Empfänger der Zahlung.
		</div>
		<div class="text-balance font-montserrat mb-4">
			Die in diesem Zusammenhang erhobenen Daten sind erforderlich, um die Zahlungsabwicklung durch den Zahlungsdienstleister vornehmen zu können. Ausschließlich der von uns beauftragte Zahlungsdienstleister erhebt und verarbeitet diese persönlichen Angaben. Wir erhalten zu keinem Zeitpunkt Informationen über Ihre Konto- oder Kreditkartenverbindung. Wir werden von unserem Zahlungsdienstleister darüber in Kenntnis gesetzt, ob die Zahlung unserer Kunden eingetroffen ist oder nicht. Es besteht die Möglichkeit, dass unsere Zahlungsdienstleister die Daten unserer Kunden an Wirtschaftsauskunftsdateien weiterleiten, um die Identität sowie Bonität des Zahlenden prüfen zu können. Insoweit verweisen wir auf die Datenschutzerklärung und Allgemeinen Geschäftsbedingungen (AGB) unserer Zahlungsdienstleister.
		</div>
		<div class="text-balance font-montserrat mb-4">
			Es gelten die AGB und Datenschutzbestimmung des jeweiligen Zahlungsdienstleister. Sie finden diese Hinweise auf der Webseite des betroffenen Dienstleister oder in der Transaktionsanwendung. Für weitergehende Informationen und für die Geltendmachung Ihrer Rechte bezüglich Widerruf und Auskunft verweisen wir insoweit auf die Bestimmungen des jeweiligen Dienstleisters.
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Betroffene Daten:</strong>
			<ul class="list-disc">
				<li class="mb-2">Bestandsdaten (bspw. Name, Adresse),</li>
				<li class="mb-2">Benutzungsdaten (bspw. besuchte Internetseiten, Interesse an bestimmten Themen, Zeiten der Zugriffe),</li>
				<li class="mb-2">Zahlungsdaten (bspw. Bankverbindung, Rechnungen. Zahlungshistorie),</li>
				<li class="mb-2">Geschäftsabschlussdaten (bspw. Laufzeit, Kundenkategorie, Vertragsgegenstand),</li>
				<li class="mb-2">Kommunikations- und Metadaten (bspw. IP-Adresse, Informationen zum Gerät oder Computersystem)</li>
			</ul>
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Verarbeitungszweck:</strong> Effektive, sichere sowie Kunden orientierte Zahlungsangebote (Service) sowie Abwicklung von Zahlungen gemäß vertraglicher Vereinbarung
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Rechtsgrundlage:</strong> Vertragserfüllung und Erfüllung vorvertraglichen Anfragen, Art. 6 Abs. 1 lit. b DSGVO, berechtigte Interessen, Art. 6 Abs. 1 lit. f DSGVO
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Widerrufsmöglichkeiten:</strong> Sie können Ihre Einwilligung zur Verwendung der personenbezogenen Daten jederzeit gegenüber dem jeweiligen Zahlungsdienstleister widerrufen. Trotz Widerruf bleibt der Zahlungsdienstleister gegebenenfalls weiterhin dazu berechtigt, die personenbezogenen Daten zu verarbeiten, zu nutzen und zu übermitteln, die zur vertragsmäßigen Zahlungsabwicklung zwingend notwendig sind. Bezüglich der Speicherung und fristgemäßen Löschung der personenbezogenen Daten verweisen wir auf die jeweiligen Datenschutzbestimmungen des Zahlungsdienstleisters.
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Wir nutzen folgende Zahlungsdienstleister:</strong>
		</div>
		<div class="text-balance font-montserrat mb-4">
			<strong>Stripe</strong>
			<div>
				Dienstanbieter: Stripe Inc., 510 Townsend Street, San Francisco, CA 94103, USA <br />
				<a href="https://stripe.com/de" class="externalLink">Internetseite</a><br />
				<a href="https://stripe.com/de/privacy" class="externalLink">Datenschutzerklärung</a>
			</div>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Unsere Onlinepräsenzen bei sozialen Netzwerken</h2>
		<div class="text-balance font-montserrat">
			<p>
				Wir betreiben Onlinepräsenzen innerhalb der nachfolgend aufgelisteten sozialen Netzwerke.
				Besuchen Sie eine dieser Präsenzen, werden durch den jeweiligen Anbieter die unten näher
				aufgeführten Daten erhoben und verarbeitet. In der Regel werden diese Daten zur Werbe- und
				Marktforschungszwecke erhoben und hiermit Nutzungsprofile angelegt. In den Nutzungsprofilen
				können Daten unabhängig des von Ihnen verwendeten Gerätes gespeichert werden. Dies ist
				insbesondere dann der Fall, wenn Sie Mitglied der jeweiligen Plattform und bei dieser
				eingeloggt sind. Die Nutzungsprofile können von den Anbietern dazu verwendet werden, um
				Ihnen interessenbezogene Werbung auszuspielen. Gegen die Erstellung von Nutzerprofilen steht
				Ihnen ein Widerrufsrecht zu. Um dieses auszuüben, müssen Sie sich an den jeweiligen Anbieter
				wenden.
			</p>
			<p>
				Wenn Sie einen Account bei einem der unten aufgeführten Anbieter besitzen und beim Besuch
				unserer Webseite dort eingeloggt sind, kann der jeweilige Anbieter Daten über Ihr
				Nutzungsverhalten auf unserer Webseite erheben. Um eine solche Verknüpfung Ihrer Daten zu
				verhindern, können Sie sich vor dem Besuch unserer Seite bei dem Dienst des Anbieters
				ausloggen.
			</p>
			<p>
				Zu welchem Zweck und in welchem Umfang Daten von dem Anbieter erhoben werden, können Sie den
				jeweiligen, im Folgenden mitgeteilten, Datenschutzerklärungen der Anbieter entnehmen.
			</p>
			<p>
				Wir möchten Sie darauf hinweisen, dass je nach Sitzland des unten genannten Anbieters die
				über dessen Plattform erfassten Daten außerhalb des Raumes der Europäischen Union übertragen
				und verarbeitet werden können. Es besteht in diesem Fall das Risiko, dass das von der DSGVO
				vorgeschriebene Datenschutzniveau nicht eingehalten und die Durchsetzung Ihrer Rechte nicht
				oder nur erschwert erfolgen kann.
			</p>
			<br />
			<p><strong>Betroffene Daten:</strong></p>
			<ul>
				<li>Bestands- und Kontaktdaten (bspw. Name, Adresse, Telefonnummer, E-Mail-Adresse)</li>
				<li>Inhaltsdaten (bspw. Posts, Fotos, Videos)</li>
				<li>Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
				<li>Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse).</li>
			</ul>
			<p>
				<strong>Verarbeitungszweck: </strong>Kommunikation und Marketing, Verfolgen und Anaylse von
				Nutzerverhalten
			</p>
			<p>
				<strong>Rechtsgrundlage:</strong> Einwilligung, Art. 6 Abs. 1 lit. a DSGVO, berechtigtes Interessen
				Art. 6 Abs. 1 lit. f DSGVO
			</p>
			<p>
				<strong>Widerspruchsmöglichkeiten: </strong>Zu den jeweiligen Widerspruchsmöglichkeiten
				(Opt-Out) verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.
			</p>
			<p><strong>Wir unterhalten Onlinepräsenzen auf folgenden sozialen Netzwerken:</strong></p>
			<p><strong>BlueSky</strong></p>
			<p>
				Dienstanbieter: Bluesky, PBLLC, Seattle, Washington, United States, USA <br />
				<a href="https://bsky.social/">Internetseite</a><br />
				<a href="https://bsky.social/about/support/privacy-policy">Datenschutzerklärung</a>
			</p>
			<p><strong>Facebook</strong></p>
			<p>
				Dienstanbieter: Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA <br />
				Sitz in der EU: Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland <br />
				<a href="https://www.facebook.com/">Internetseite</a><br />
				<a href="https://www.facebook.com/about/privacy/">Datenschutzerklärung</a><br />
				<a href="https://www.facebook.com/legal/terms/information_about_page_insights_data">Datenschutzerklärung für Facebook-Seiten</a>
			</p>
			<p><strong>Instagram</strong></p>
			<p>
				Dienstanbieter: Instagram Inc., 1601 Willow Road, Menlo Park CA 94025, USA <br />
				Mutterunternehmen: Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA <br />
				Sitz in der EU: Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland <br />
				<a href="https://www.instagram.com/">Internetseite</a><br />
				<a href="https://instagram.com/about/legal/privacy">Datenschutzerklärung</a>
			</p>
			<p><strong>Threads</strong></p>
			<p>
				Dienstanbieter: Instagram Inc., 1601 Willow Road, Menlo Park CA 94025, USA <br />
				Mutterunternehmen: Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA <br />
				Sitz in der EU: Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland <br />
				<a href="https://www.threads.net/">Internetseite</a><br />
				<a href="https://instagram.com/about/legal/privacy">Datenschutzerklärung</a>
			</p>
			<p><strong>X (Twitter)</strong></p>
			<p>
				Dienstanbieter: Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA <br />
				<a href="https://twitter.com/">Internetseite</a><br />
				<a href="https://twitter.com/de/privacy">Datenschutzerklärung</a>
			</p>
			<p><strong>YouTube</strong></p>
			<p>
				Dienstanbieter: YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA <br />
				Mutterunternehmen: Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA <br />
				Sitz in der EU: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland <br />
				<a href="https://www.youtube.com/">Internetseite</a><br />
				<a href="https://policies.google.com/privacy">Datenschutzerklärung</a>
			</p>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Content-Dienste</h2>
		<div class="text-balance font-montserrat">
			<p>
				Wir nutzen bestimmte Dienste, um über unsere Internetpräsenz bestimmte Inhalte oder Grafiken
				(Videos, Bilder, Musik, Schriftarten, Kartenmaterial) ausspielen zu können. Dabei
				verarbeiten die von uns eingesetzten Dienste die Ihnen zum Zeitpunkt Ihres Besuchs auf
				unseren Internetseiten zugeordnete IP-Adresse, da nur so der jeweilige Inhalt in dem von
				Ihnen verwendeten Browser dargestellt werden kann. Darüber hinaus können die Anbieter dieser
				Dienste weitere Cookies auf Ihr Endgerät setzen, über die Informationen über Ihr
				Nutzungsverhalten, Ihre Interessen, das von Ihnen verwendete Gerät und den verwendeten
				Browser sowie Zeitpunkt und Dauer Ihrer Sitzung erhoben werden. Diese Daten verwenden die
				Anbieter regelmäßig für Analyse-, Statistik- und Marketingzwecke. Zudem können diese
				Informationen können auch mit Informationen aus anderen Quellen verbunden werden. Dies gilt
				insbesondere dann, wenn Sie selbst einen Account bei dem Dienstanbieter unterhalten und zum
				Zeitpunkt der Sitzung dort eingeloggt sind.
			</p>
			<p>
				Wir weisen darauf hin, dass je nach Sitzland des nachstehend genannten Diensteanbieters die
				nachfolgend näher benannten Daten auf Server außerhalb des Raumes der Europäischen Union
				übertragen und verarbeitet werden können. Es besteht in diesem Fall das Risiko, dass das von
				der DSGVO vorgeschriebene Datenschutzniveau nicht eingehalten und die Durchsetzung Ihrer
				Rechte nicht oder nur erschwert erfolgen kann.
			</p>
			<br />
			<p><strong> Betroffene Daten: </strong></p>
			<ul>
				<li>Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
				<li>Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse)</li>
			</ul>
			<p><strong>Betroffene Personen: </strong>Nutzer unserer Internetpräsenz</p>
			<p>
				<strong>Verarbeitungszweck: </strong>Ausspielen unserer Internetseiten, Anbieten von
				Inhalten, Gewährleistung des Betriebs unserer Internetseiten
			</p>
			<p>
				<strong> Rechtsgrundlage: </strong> Einwilligung über Cookie-Consent-Banner, Art. 6 Abs. 1 lit.
				a DSGVO, berechtigte Interessen, Art. 6 Abs. 1 lit. f DSGVO
			</p>
			<p><strong> Wir nutzen folgende Content-Dienste: </strong></p>
			<p><strong> Google Maps </strong></p>
			<p>
				Wir nutzen auf unserer Internetpräsenz Google Maps. Hierbei wird durch Google die IP-Adresse
				des Besuchers erhoben und verarbeitet. Wenn Sie eine Internetseite besuchen, auf der Google
				Maps eingebunden ist, wird unabhängig davon, ob die Nutzung von Google Maps tatsächlich
				erfolgt oder Sie in Ihrem Google Account eingeloggt sind Ihre IP-Adresse sowie Ihre
				Standortdaten (letztere in der Regel nicht ohne Ihre Einwilligung) an Google übermittelt.
				Ihre IP-Adresse wird Ihrem Google Account zugeordnet, sofern Sie bei dem Besuch unserer
				Internetpräsenz dort eingeloggt sind.
			</p>
			<p>
				Dienstanbieter: Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA <br />
				Sitz in der EU: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland <br />
				<a href="https://www.google.de/maps">Internetseite</a><br />
				<a href="https://policies.google.com/privacy">Datenschutzerklärung</a><br />
				<a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener" class="flex font-bold">Opt-Out-Möglichkeit</a>
			</p>
			<p><strong> YouTube </strong></p>
			<p>
				Wir nutzen auf dieser Webseite Komponenten von YouTube, um hierüber Videos auf unseren
				Internetseiten einzubinden, so dass diese über Ihren Internetbrowser abgespielt werden
				können, wenn Sie unsere Internetseiten besuchen. Während Ihres Besuchs unseren
				Internetseiten werden sowohl YouTube als auch Google darüber informiert welche Seite bzw.
				Unterseite Sie aufgerufen haben, indem Ihre IP-Adresse an die externen Server von Google in
				den USA übermittelt wird. Diese Informationsübermittlung erfolgt unabhängig davon, ob die
				angezeigten Videos tatsächlich betrachtet oder angeklickt werden oder Sie in Ihrem YouTube
				oder Google Account eingeloggt sind. Diese Informationen werden gesammelt und Ihrem
				Google-Account zugeordnet, sofern Sie dort eingeloggt sind, wenn Sie unsere Internetseiten
				aufrufen.
			</p>
			<p>
				Dienstanbieter: YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA <br />
				<a href="https://www.youtube.com/">Internetseite</a><br />
				<a href="https://policies.google.com/privacy">Datenschutzerklärung</a><br />
				<a href="https://tools.google.com/dlpage/gaoptout?hl=de" class="font-bold">Opt-Out-Möglichkeit</a>
			</p>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold text-je-sand my-2 py-10">Sicherheits Maßnahmen</h2>
		<div class="text-balance font-montserrat">
			<p>
				Wir treffen im Übrigen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand
				der Technik, um die Vorschriften der Datenschutzgesetze einzuhalten und Ihre Daten gegen
				zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust,
				Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
			</p>
		</div>
	</div>
	<div>
		<h2 class="font-poppins">Aktualität und Änderung dieser Datenschutzerklärung</h2>
		<div class="text-justify font-montserrat">
			<p>
				Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2024. Aufgrund
				geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
				Datenschutzerklärung anzupassen.
			</p>
			<p class="font-bold">
				Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators von SOS Recht erstellt. SOS Recht ist ein Angebot der Mueller.legal Rechtsanwälte Partnerschaft mit Sitz in Berlin.
			</p>
		</div>
	</div>
</div>