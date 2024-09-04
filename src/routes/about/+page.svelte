<script>
	import Social from "$lib/components/blocks/Social.svelte";
	import Image from "$lib/components/image.svelte";
	import { name, pronouns } from "$lib/store";
	import { FormatDate } from "$lib/util/date";
	export let data;

	// Get current month + year
	const now = new Date();
    const nowFormatted = now.getFullYear() + "-" + (now.getMonth()).toString().padStart(2, '0');

	// Generate date
	/**
	 * @param {string} start
	 * @param {string} end
	 */
	function genDate(start, end) {
		let date = 'date not found';

		if (start && end) {
			date = FormatDate(start,'month') + ' ' + FormatDate(start,'year') + ' - ' + FormatDate(end,'month') + ' ' + FormatDate(end,'year');
		} else if (start && !end) {
			if (start <= nowFormatted) {
				date = 'seit ';
			} else if (start > nowFormatted) {
				date = 'ab ';
			}
			date = date + FormatDate(start,'month') + ' ' + FormatDate(start,'year');
		}

		return date;
	}
</script>

<div class="flex flex-col items-center justify-center pt-5 pb-20">
	<div class="container mx-auto">
		<div class="bg-je-gray-700 rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-lg relative">
			<div class="p-8 font-poppins flex-1 justify-center flex flex-col text-left lg:text-center relative z-10">
				<h1 class="text-5xl font-bold text-je-sand mt-2 mb-2">{ name } ({ pronouns })</h1>
				<div class="italic font-montserrat">Geboren 337 ppm</div>
				<div class="mb-4 md:mr-4 flex-1 flex flex-col justify-evenly text-balance">
					<h2 class="text-3xl font-semibold mb-4">Vordenker im Einklang von Technik und Natur</h2>
					<div class="mb-4 font-montserrat">
						In einer Ära, in der digitale Innovationen das Zeitalter prägen, sehe ich mich als Verfechter einer Zukunft, in der technologischer Fortschritt und ökologische Nachhaltigkeit eine Symbiose eingehen. Mein Engagement für den Klimaschutz ist geprägt von der Überzeugung, dass wir alle eine Rolle in der Bewahrung unseres Planeten spielen.
					</div>
					<div class="mb-4 font-montserrat">
						Als IT-Experte mit einem breiten Spektrum an Fähigkeiten habe ich mich in verschiedenen Sektoren bewährt. Die Möglichkeit, meine Kenntnisse für den Umweltschutz einzusetzen, ist ein spannendes Feld, das ich erkunden möchte, um die Schnittstelle zwischen IT und Nachhaltigkeit zu stärken.
					</div>
					<div class="mb-4 font-montserrat">
						Meine politische Tätigkeit bei BÜNDNIS 90/DIE GRÜNEN in Braunschweig ist Ausdruck meines Bestrebens, auf lokaler Ebene positive Veränderungen zu bewirken. Ich trete für eine Politik ein, die den Herausforderungen des Klimawandels mit Weitsicht begegnet, für eine Wirtschaft, die Ressourcen schont, und für ein Miteinander, das den Schutz unserer natürlichen Lebensgrundlagen ernst nimmt.
					</div>
					<div class="mb-4 font-montserrat">
						Ich bin fest davon überzeugt, dass jeder Einzelne die Kraft hat, die Welt zu verändern. Durch mein Engagement hoffe ich, andere zu inspirieren, sich ebenfalls für den Umweltschutz stark zu machen und gemeinsam einen Weg in eine nachhaltige Zukunft zu ebnen.
					</div>
				</div>
				<div class="pb-8">
					<Social hoverBGColor="je-green-700" />
				</div>
			</div>
			<div class="flex-1 relative flex items-end justify-center">
				<div class="absolute inset-0 bg-je-green-900 transform -skew-y-12 rounded-3xl"></div>
				<Image src="/portrait/portrait_6_clean.webp" alt="Portrait von {name}" classNames="relative w-[70vh] rounded-lg"/>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div>
		<h2 class="text-4xl font-bold text-je-sand font-poppins">Lebenslauf</h2>
		<h3 class="text-3xl font-bold text-je-sand font-poppins">Berufserfahrung</h3>
		{#each data.jobs as job}
			<div class="my-6 flex items-start">
				<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 {job.bgcolor} transition-transform duration-500 hover:scale-110">
					<a href={job.link} target="_blank">
						<Image src="/about_logos/{job.image}" alt="Logo {job.company}" classNames="size-12" />
					</a>
				</div>
				<div class="ml-10 flex flex-col justify-between">
					<h4 class="text-2xl text-je-sand font-poppins">{job.titel}</h4>
					<p class="text-2xl font-montserrat">{job.company}</p>
					<p class="text-md font-montserrat">{genDate(job.start, job.end)}</p>
					<div class="font-montserrat">
						<ul class="list-disc text-md">
							{#each job.description as item }
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-row flex-wrap gap-1 text-sm text-je-gray-500 font-montserrat">
						{#each job.skills as skill }
							<div class="text-sm rounded-lg bg-green-500 text-je-gray-500 py-1 px-2 mr-2">{skill}</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}

		<h3 class="text-3xl font-bold text-je-sand font-poppins">Ausbildung</h3>
		{#each data.education as edu}
			<div class="my-6 flex items-start">
				<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 {edu.bgcolor} transition-transform duration-500 hover:scale-110">
					<a href={edu.link} target="_blank">
						<Image src="/about_logos/{edu.image}" alt="Logo {edu.company}" classNames="size-12" />
					</a>
				</div>
				<div class="ml-10 flex flex-col justify-between">
					<h4 class="text-2xl text-je-sand font-poppins">{edu.titel}</h4>
					<p class="text-2xl font-montserrat">{edu.company}</p>
					<p class="text-md font-montserrat">{genDate(edu.start, edu.end)}</p>
					<div class="font-montserrat">
						<ul class="list-disc text-md">
							{#each edu.description as item }
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-row flex-wrap gap-1 text-sm text-je-gray-500 font-montserrat">
						{#each edu.skills as skill }
							<div class="text-sm rounded-lg bg-green-500 text-je-gray-500 py-1 px-2 mr-2">{skill}</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}

		<h3 class="text-3xl font-bold text-je-sand font-poppins">Ehrenamt</h3>
		{#each data.volunteer as vol}
			<div class="my-6 flex items-start">
				<div class="flex justify-center items-center rounded-xl min-w-16 min-h-16 {vol.bgcolor} transition-transform duration-500 hover:scale-110">
					<a href={vol.link} target="_blank">
						<Image src="/about_logos/{vol.image}" alt="Logo {vol.company}" classNames="size-12" />
					</a>
				</div>
				<div class="ml-10 flex flex-col justify-between">
					<h4 class="text-2xl text-je-sand font-poppins">{vol.titel}</h4>
					<p class="text-2xl font-montserrat">{vol.company}</p>
					<p class="text-md font-montserrat">{genDate(vol.start, vol.end)}</p>
					<div class="font-montserrat">
						<ul class="list-disc text-md">
							{#each vol.description as item }
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-row flex-wrap gap-1 text-sm text-je-gray-500 font-montserrat">
						{#each vol.skills as skill }
							<div class="text-sm rounded-lg bg-green-500 text-je-gray-500 py-1 px-2 mr-2">{skill}</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}

		<h3 class="text-3xl font-bold text-je-sand font-poppins">Kompetenzen</h3>
		<div>
			<div class="pt-3">
				<h4 class="text-2xl font-bold text-je-sand font-poppins">Informationstechnik</h4>
				<div>
					<h5 class="text-2xl font-bold font-poppins">Infrastruktur</h5>
					<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500 font-montserrat">
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Windowsclient</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Windowsserver</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Linuxserver</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Microsoft Intune</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Docker</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Telekommunikation</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Telekommunikationssysteme</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">PostgreSQL</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">MS SQL</div>
					</div>
				</div>
				<div>
					<h5 class="text-2xl font-bold font-poppins">Programmierung/Frameworks</h5>
					<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500 font-montserrat">
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">PHP</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">CSS</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">HTML</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">TypeScript/JavaScript</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">SvelteKit</div>
					</div>
				</div>
				<div>
					<h5 class="text-2xl font-bold font-poppins">Software</h5>
					<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500 font-montserrat">
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Word</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Excel</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">PowerPoint</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Outlook</div>
						<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">VS Code</div>
					</div>
				</div>
			</div>
			<div class="pt-3">
				<h4 class="text-2xl font-bold text-je-sand font-poppins">Sprachen</h4>
				<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500 font-montserrat">
					<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Deutsch (Muttersprache)</div>
					<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Englisch (B1)</div>
				</div>
			</div>
			<div class="pt-3">
				<h4 class="text-2xl font-bold text-je-sand font-poppins">Mitgliedschaften</h4>
				<div class="flex flex-wrap flex-row gap-1 text-sm text-je-gray-500 font-montserrat">
					<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">BÜNDNIS 90/DIE GRÜNEN - seit 2022</div>
					<div class="rounded-lg bg-green-500 py-1 px-2 mr-2">Grüne Jugend - seit 2022</div>
				</div>
			</div>
		</div>
	</div>
</div>
