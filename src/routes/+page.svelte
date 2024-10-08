<script lang="ts">
  	import Image from "$lib/components/image.svelte";
	import { name } from "$lib/store";
	import BlogTiles from "$lib/components/tiles/Blog.svelte";
	import CalendarTiles from "$lib/components/tiles/Calendar.svelte";
	import Social from "$lib/components/blocks/Social.svelte";
	import InfoMessage from "$lib/components/blocks/InfoMessage.svelte";
	import Chevron from "$lib/components/blocks/Chevron.svelte";
	
	// Blog data
	export let data;
    const { posts, events } = data;
</script>

<div class="flex flex-col items-center justify-center p-5 min-h-[95vh]">
	<div class="container mx-auto">
		<div class="bg-je-gray-700 rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-lg relative">
			<div class="p-8 font-poppins flex-1 justify-center flex flex-col text-left lg:text-center relative z-10">
				<h2 class="text-2xl font-semibold text-je-gray-100">The future is now!</h2>
				<h1 class="text-5xl font-bold text-je-sand mt-2 mb-2">{ name }</h1>
				<div class="pb-8">
					<Social hoverBGColor="je-green-700" />
				</div>
			</div>
			<div class="flex-1 relative flex items-end justify-center">
				<div class="absolute inset-0 bg-je-green-900 transform -skew-y-12 rounded-3xl"></div>
				<a href="/about">
					<Image src="/portrait/portrait_6_clean.webp" alt="Portrait von {name}" classNames="relative w-[70vh] rounded-lg duration-500 ease-in-out transition-transform transform hover:scale-105"/>
				</a>
			</div>
		</div>
	</div>
	<div class="hidden lg:block">
		<Chevron count={3} />
	</div>
</div>

<div class="container relative bg-[url('/home/teaser.webp')] bg-fixed bg-no-repeat bg-center bg-cover">
	<div class="absolute inset-0 bg-black opacity-55"></div>
	<div class="relative py-7 text-center">
		<h2 class="text-4xl font-bold pb-7 uppercase text-je-sand font-poppins">Politik für eine lebenswerte Welt</h2>
		<div class="mb-4 text-je-sand text-lg font-montserrat">
			Unser Klima verändert sich rasant und mit jedem Kilogramm CO₂ mehr wird dieser Planet zu einem lebensfeindlichen Ort. Wir steuern bereits auf eine Klimakatastrophe zu, die bald unvermeidlich sein wird. Wir stellen fest, dass unsere Sommer immer wärmer und unsere Winter immer milder werden. Wir feiern jedes Jahr einen neuen Temperaturrekord. Ein Umdenken in der Politik und Wirtschaft geht nur sehr langsam voran.
		</div>
		<div class="mb-4 text-je-sand text-lg font-montserrat">
			Das Klima wird von vielen Menschen ignoriert, geleugnet und nicht geglaubt. Eine so große Ignoranz gegenüber der Klimakatastrophe können und dürfen wir uns nicht leisten. Diese Krise wird unsere Lebensgrundlagen zerstören. Wir als Menschheit und wir als Individuen müssen alle gemeinsam gegen diese lebenszerstörende Krise arbeiten und nicht gegeneinander.
		</div>
		<div class="mb-4 text-je-sand text-lg font-montserrat">
			Es muss schnellstmöglich ein Umdenken in der Politik stattfinden und es müssen wirksame Lösungen in Richtung einer klimagerechten Welt erarbeitet werden, die alle Menschen einbezieht und die Lebensgrundlagen bewahrt. Eine Ausbeutung unseres Planeten darf nicht fortgesetzt werden!
		</div>
		<div class="mb-4 text-je-sand text-lg font-montserrat">
			Mit diesen Worten stehe ich für eine besser und klimagerechte Welt!
		</div>
	</div>
</div>

<div class="container mx-auto px-4 py-12">
	<div class="text-center font-poppins">
    	<h2 class="text-5xl font-semibold text-je-sand my-2">Termine</h2>
    	<h3 class="text-4xl font-semibold text-je-sand my-2 pb-10">Hier kannst du mich treffen!</h3>
	</div>
    {#if events[0]}
        <CalendarTiles items={events}></CalendarTiles>
    {:else}
        <div class="text-center py-8 font-montserrat">
            <InfoMessage message="Es konnten aktuell keine Veranstaltungen gefunden werden!"></InfoMessage>
        </div>
    {/if}
</div>

<div class="container relative bg-[url('/home/brunswiek.webp')] bg-fixed bg-no-repeat bg-center bg-cover">
	<div class="absolute inset-0 bg-black opacity-55"></div>
	<div class="relative py-7 text-center">
		<h2 class="text-4xl font-bold pb-7 uppercase text-je-sand font-poppins">Politik in Braunschweig</h2>
		<div class="mb-4 text-je-sand text-lg font-montserrat">
			Im Jahr 2021 zog ich in einer schwierigen Zeit nach Braunschweig. Ich war sehr aufgeregt, denn ich hatte gehört, dass diese Stadt eine ganz besondere Atmosphäre hat. Doch das schöne Braunschweig mit seinen historischen Sehenswürdigkeiten wie dem beeindruckenden Braunschweiger Dom und dem malerischen Magniviertel hat mich von den ersten Tagen an mit offenen Armen empfangen und begeistert.
		</div>
		<div class="mb-4 text-je-sand text-lg font-montserrat">
			Im Jahr 2022 war ich sehr glücklich, Teil der Grünen Partei zu werden und meine politischen Interessen zu vertiefen und mich für meine Überzeugungen zu engagieren. Die Arbeit mit den Grünen hat mir die wunderbare Möglichkeit gegeben, aktiv an der Gestaltung unserer Stadt mitzuwirken und mich für Projekte einzusetzen, die mir sehr am Herzen liegen. Im April 2023 habe ich dann die Letzte Generation kennengelernt und durfte dort eine Weile mitwirken. Das hat mir ganz neue Perspektiven eröffnet, auch was den Klimaschutz und den zivilen Ungehorsam betrifft.
		</div>
		<div class="mb-4 text-je-sand text-lg font-montserrat">
			Diese Erfahrungen haben mich dazu inspiriert, mich noch intensiver für Braunschweig einzusetzen. Es ist mir eine große Freude, derzeit die AG Digitales zu koordinieren und mich so leidenschaftlich für unser schönes Braunschweig einzusetzen. Mein Ziel ist es, ein buntes, offenes und lebendiges Braunschweig zu fördern und zu unterstützen. Die Vielfalt und Geschichte dieser Stadt, von den mittelalterlichen Weichbilden bis hin zur modernen Architektur des Happy RIZZI House, inspiriert mich täglich.
		</div>
	</div>
</div>

<div class="container mx-auto px-4 py-12">
    <div class="text-center font-poppins">
		  <h2 class="text-5xl font-semibold text-je-sand my-2 pb-7">Aktuelles</h2>
	</div>
	{#if posts[0]}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
			{#each posts as post}
				<BlogTiles item={post} />
			{/each}
		</div>
	{:else}
		<div class="text-center py-8 font-montserrat">
            <InfoMessage message="Es konnten aktuell keine Beiträge gefunden werden!"></InfoMessage>
        </div>
	{/if}
</div>