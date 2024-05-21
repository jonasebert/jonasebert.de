<script>
	import Socialmediaicons from "$lib/socialmediaicons.svelte";
  	import Image from "$lib/components/image.svelte";
	import { name } from "$lib/store";
	import BlogTiles from "$lib/components/blog_tiles.svelte";
	export let data;
</script>

<div class="flex flex-row items-center justify-center p-5">
	<div class="container mx-auto">
		<div class="bg-je-gray-700 rounded-lg overflow-hidden">
			<div class="p-8 font-poppins">
				<h2 class="text-2xl font-semibold text-je-gray-100">The future is now!</h2>
				<h1 class="text-5xl font-bold text-je-sand mt-2 mb-2">{ name }</h1>
			</div>
			<div class="pl-8 pb-8">
				<Socialmediaicons />
			</div>
		</div>
	</div>
	<div class="hidden lg:block">
    <Image src="/portrait/lg_square.webp" alt="Portrait von {name}" classNames="rounded-full w-80 object-cover object-top"/>
	</div>
</div>

<div class="container relative bg-[url('/home/teaser.webp')] bg-fixed bg-no-repeat bg-center bg-cover">
	<div class="absolute inset-0 bg-black opacity-50"></div>
	<div class="relative pt-5 pb-5 text-center">
		<h2 class="text-4xl font-bold uppercase text-je-sand font-poppins">Politik für eine lebenswerte Welt</h2>
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

<div class="container mx-auto px-4">
    <div class="text-center font-poppins">
		  <h2 class="text-5xl text-je-sand">Aktuelles</h2>
	  </div>
    <BlogTiles items={data}></BlogTiles>
</div>
  