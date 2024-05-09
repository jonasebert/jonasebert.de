<script>
	import Image from "$lib/components/image.svelte";
	import Socialmediaicons from "$lib/socialmediaicons.svelte";
	import { name, pronouns } from "$lib/store";
</script>


<div class="container">
	<div>
		<h1 class="text-5xl font-bold text-je-sand">{name} ({pronouns})</h1>
		<div class="italic">Geboren 337 ppm</div>
		<div class="flex flex-col md:flex-row">
			<div class="mb-4 md:mr-4 flex-1">
				<h2 class="text-3xl font-semibold">Vordenker im Einklang von Technik und Natur</h2>
				<div class="mb-4">
					In einer Ära, in der digitale Innovationen das Zeitalter prägen, sehe ich mich als Verfechter einer Zukunft, in der technologischer Fortschritt und ökologische Nachhaltigkeit eine Symbiose eingehen. Mein Engagement für den Klimaschutz ist geprägt von der Überzeugung, dass wir alle eine Rolle in der Bewahrung unseres Planeten spielen.
				</div>
				<div class="mb-4">
					Als IT-Experte mit einem breiten Spektrum an Fähigkeiten habe ich mich in verschiedenen Sektoren bewährt. Die Möglichkeit, meine Kenntnisse für den Umweltschutz einzusetzen, ist ein spannendes Feld, das ich erkunden möchte, um die Schnittstelle zwischen IT und Nachhaltigkeit zu stärken.
				</div>
				<div class="mb-4">
					Meine politische Tätigkeit bei BÜNDNIS 90/DIE GRÜNEN in Braunschweig ist Ausdruck meines Bestrebens, auf lokaler Ebene positive Veränderungen zu bewirken. Ich trete für eine Politik ein, die den Herausforderungen des Klimawandels mit Weitsicht begegnet, für eine Wirtschaft, die Ressourcen schont, und für ein Miteinander, das den Schutz unserer natürlichen Lebensgrundlagen ernst nimmt.
				</div>
				<div class="mb-4">
					Ich bin fest davon überzeugt, dass jeder Einzelne die Kraft hat, die Welt zu verändern. Durch mein Engagement hoffe ich, andere zu inspirieren, sich ebenfalls für den Umweltschutz stark zu machen und gemeinsam einen Weg in eine nachhaltige Zukunft zu ebnen.
				</div>
				<div>
					<Socialmediaicons/>
				</div>
			</div>
			<div class="flex justify-center md:justify-start w-full md:max-w-xs lg:max-w-sm">
				<Image src="/portrait/lg_square.webp" alt="Portrait von {name}" classNames="rounded-full w-full h-full object-cover"/>
			</div>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-bold text-je-sand">Lebenslauf</h2>
		<h3 class="text-3xl font-bold text-je-sand">Berufserfahrung</h3>
		<div class="my-6 flex items-start">
			<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 bg-je-gingco transition-transform duration-500 hover:scale-110">
				<a href="https://gingco.systems/" target="_blank">
					<Image src="/about_logos/logo_gingco.webp" alt="Logo Gingco Systems" classNames="size-12"/>
				</a>
			</div>
			<div class="ml-10 flex flex-col justify-between">
				<h4 class="text-2xl text-je-sand">System Administrator</h4>
				<p class="text-2xl">Gingco Systems GmbH</p>
				<p class="text-md">seit November 2022</p>
				<div>
					<ul class="list-disc text-md">
						<li>Betreuung und Entwicklung von Docker-basierten Netzwerk- und Serverinfrastruktur</li>
						<li>Administrativer 2nd- und 3rd-Level Support (Remote)</li>
						<li>Performance- und Securitymanagement sowie Analyse und Beseitigung von Störungen</li>
						<li>Erstellung und Umsetzung von IT-Konzepten</li>
						<li>Kommunikation mit Kunden, externen Dienstleistern und Lieferanten</li>
					</ul>
				</div>
				<div class="flex flex-row flex-wrap gap-1 text-sm text-je-gray-500">
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">PHP</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Linux</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Docker</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">ISO 27001</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Microsoft Intune</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Datenbankverwaltung</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Kunden-Support</div>
				</div>
			</div>
		</div>
		<div class="my-6 flex items-start">
			<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 bg-white transition-transform duration-500 hover:scale-110">
				<a href="https://lba.de/" target="_blank">
					<Image src="/about_logos/logo_lba.webp" alt="Logo Luftfahrt-Bundesamt" classNames="size-12"/>
				</a>
			</div>
			<div class="ml-10 flex flex-col justify-between">
				<h4 class="text-2xl text-je-sand">Fachinformatiker Anwendungs Betreuung</h4>
				<p class="text-2xl">Luftfahrt-Bundesamt</p>
				<p class="text-md">Oktober 2021 - November 2022</p>
				<div>
					<ul class="list-disc text-md">
						<li>Administration des Telekommunikationssystem</li>
						<li>IT-Usersupport (Vor Ort und Remote)</li>
					</ul>
				</div>
				<div class="flex flex-row flex-wrap gap-1 text-sm text-je-gray-500">
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Telekommunikation</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Telekommunikationssysteme</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Linux</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Windows</div>
				</div>
			</div>
		</div>
		<div class="my-6 flex items-start">
			<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 bg-white transition-transform duration-500 hover:scale-110">
				<a href="https://steinel.de/" target="_blank">
					<Image src="/about_logos/logo_steinel.webp" alt="Logo STEINEL GmbH" classNames="size-12"/>
				</a>
			</div>
			<div class="ml-10 flex flex-col justify-between">
				<h4 class="text-2xl text-je-sand">Junior Data Manager PIM</h4>
				<p class="text-2xl">STEINEL GmbH</p>
				<p class="text-md">Oktober 2021 - November 2022</p>
				<div>
					<ul class="list-disc text-md">
						<li>Entwicklung von Automatisierung wie Vertriebsdatenblätter, Preislisten, Katalog, Printwerbemittel etc.</li>
						<li>Entwicklung von Schnittstellen, wie z. B. die automatische Aktualisierung der Steinel Homepage durch das PIM-System</li>
						<li>Dataquality weiter ausbauen</li>
						<li>Enge Kooperation mit internen Abteilungen sowie externen Dienstleistern</li>
						<li>Eruierung und Festlegung von Prozessen und Workflows</li>
						<li>Koordination und Kontrolle der externen Dienstleister</li>
						<li>Umsetzung neuer gesetzlicher Vorgaben und Verordnungen</li>
					</ul>
				</div>
				<div class="flex flex-row flex-wrap gap-1 text-sm text-je-gray-500">
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">PHP</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Scripting</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">HTML</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Datenmanagement</div>
				</div>
			</div>
		</div>

		<h3 class="text-3xl font-bold text-je-sand">Ausbildung</h3>
		<div class="my-6 flex items-start">
			<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 bg-white transition-transform duration-500 hover:scale-110">
				<a href="https://steinel.de/" target="_blank">
					<Image src="/about_logos/logo_steinel.webp" alt="Logo STEINEL GmbH" classNames="size-12"/>
				</a>
			</div>
			<div class="ml-10 flex flex-col justify-between">
				<h4 class="text-2xl text-je-sand">Fachinformatiker in der Fachrichtung Systemintegration</h4>
				<p class="text-2xl">STEINEL GmbH</p>
				<p class="text-md">August 2018 - Juni 2021</p>
				<div>
					<ul class="list-disc text-md">
						<li>IT-Usersupport (Vor Ort und Remote)</li>
						<li>Support der Druckerumgebung (inbes. EU-Label Drucker)</li>
						<li>Installation & Einrichtung von PCs/Mobilen Endgeräten</li>
						<li>Erstellen & Aktualisieren der Windows 10 Images für die Installation der Geräte</li>
						<li>Erstellen, koordinieren & halten von IT-Schulungen (Allgemeine IT Schulung & Informationssicherheitsschulung)</li>
						<li>Erstellen einer Dokumentation der WLAN Umgebung am Standort Herzebrock</li>
					</ul>
				</div>
				<div class="flex flex-row flex-wrap gap-1 text-sm text-je-gray-500">
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Windows</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Kunden-Support</div>
				</div>
			</div>
		</div>

		<h3 class="text-3xl font-bold text-je-sand">Ehrenamt</h3>
		<div class="my-6 flex items-start">
			<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 bg-je-gruene-tanne transition-transform duration-500 hover:scale-110">
				<a href="https://gruene-braunschweig.de/" target="_blank">
					<Image src="/about_logos/logo_gruene.svg" alt="Logo B'90/DIE GRÜNEN" classNames="size-12"/>
				</a>
			</div>
			<div class="ml-10 flex flex-col justify-between">
				<h4 class="text-2xl text-je-sand">Koordination AG Digitales</h4>
				<p class="text-2xl">BÜNDNIS 90/DIE GRÜNEN Braunschweig</p>
				<p class="text-md">seit November 2023</p>
			</div>
		</div>
		<div class="my-6 flex items-start">
			<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 bg-je-gruene-tanne transition-transform duration-500 hover:scale-110">
				<a href="https://gruene-braunschweig.de/" target="_blank">
					<Image src="/about_logos/logo_gruene.svg" alt="Logo B'90/DIE GRÜNEN" classNames="size-12"/>
				</a>
			</div>
			<div class="ml-10 flex flex-col justify-between">
				<h4 class="text-2xl text-je-sand">Koordination Aktionsgruppe</h4>
				<p class="text-2xl">BÜNDNIS 90/DIE GRÜNEN Braunschweig</p>
				<p class="text-md">seit November 2023</p>
			</div>
		</div>

		<h3 class="text-3xl font-bold text-je-sand">Kompetenzen</h3>
		<div>
			<div class="pt-3">
				<h4 class="text-2xl font-bold text-je-sand">Informationstechnik</h4>
				<div>
					<h5 class="text-2xl font-bold">Infrastruktur</h5>
					<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500">
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Windowsclient</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Windowsserver</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Linuxserver</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Microsoft Intune</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Docker</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Telekommunikation</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Telekommunikationssysteme</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">PostgreSQL</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">MS SQL</div>
					</div>
				</div>
				<div>
					<h5 class="text-2xl font-bold">Programmierung/Frameworks</h5>
					<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500">
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">PHP</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">CSS</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">HTML</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">TypeScript/JavaScript</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">SvelteKit</div>
					</div>
				</div>
				<div>
					<h5 class="text-2xl font-bold">Software</h5>
					<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500">
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Word</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Excel</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">PowerPoint</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Outlook</div>
						<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">VS Code</div>
					</div>
				</div>
			</div>
			<div class="pt-3">
				<h4 class="text-2xl font-bold text-je-sand">Sprachen</h4>
				<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500">
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Deutsch (Muttersprache)</div>
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">Englisch (B1)</div>
				</div>
			</div>
			<div class="pt-3">
				<h4 class="text-2xl font-bold text-je-sand">Mitgliedschaften</h4>
				<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500">
					<div class="rounded-lg bg-je-green-300 py-1 px-1 mr-2">BÜNDNIS 90/DIE GRÜNEN - seit 2022</div>
				</div>
			</div>
		</div>
	</div>
</div>
