<script lang="ts">
    import { name } from "$lib/store";
    import Social from "$lib/components/blocks/Social.svelte";

    let response: any;
    let status: number = 999;
    let submitting = false;

    async function submitForm(data) {
        submitting = true;
        const formData = new FormData(data.currentTarget);
        const res = await fetch("/api/contact", {
            method: "POST",
            body: formData
        });
        response = await res.json();
        status = res.status;
        submitting = false;
    };
</script>

<svelte:head>
    <!-- <meta name="description" content=""> -->
</svelte:head>

<style lang="postcss">
    .custom-checkbox:checked::after {
        content: '⨉';
        @apply text-je-mystical-schwarzgruen-400 font-bold text-base;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
</style>

<div class="container pb-20">
    <h1 class="text-5xl font-bold text-je-sand my-2 py-10 font-poppins">{name} - Kontakt</h1>
    <div class="bg-[url('/contact/teaser.webp')] bg-fixed bg-no-repeat bg-center bg-cover rounded-xl pt-10">
        <div class="flex flex-col gap-3 bg-je-mystical-nachtblau-900 p-5 rounded-lg">
            {#if status != 200}
                <h2 class="text-4xl font-semibold text-je-sand my-2 font-poppins">Kontaktformular</h2>
                <form class="flex flex-col gap-3 font-montserrat" on:submit|preventDefault={submitForm}>
                    <input class="border-2 border-je-mystical-schwarzgruen-500 bg-transparent p-2 rounded-lg" type="text" name="name" placeholder="Name" required disabled={submitting}>
                    <input class="border-2 border-je-mystical-schwarzgruen-500 bg-transparent p-2 rounded-lg" type="email" name="email" placeholder="E-Mail" required disabled={submitting}>
                    <textarea class="border-2 border-je-mystical-schwarzgruen-500 bg-transparent p-2 rounded-lg" name="message" id="message" placeholder="Deine Nachricht" rows="4" maxlength="300" required disabled={submitting}></textarea>
                    <label for="message" class="text-xs">Maximal 300 Zeichen</label>
                    <div class="flex flex-row gap-4 items-center relative">
                        <input class="h-5 w-5 border-2 border-je-mystical-schwarzgruen-500 rounded-lg appearance-none custom-checkbox relative" type="checkbox" name="privacy" id="privacy" value="true" title="privacy" placeholder="false" required disabled={submitting}>
                        <label for="privacy" class="ml-2">
                            <a href="/legal/privacy" target="_blank">Datenschutzerklärung zustimmen</a>
                        </label>
                    </div>
                    {#if !submitting}
                        <button class="bg-je-mystical-schwarzgruen-500 hover:bg-je-mystical-schwarzgruen-700 text-white p-2 mt-3 hover:text-je-sand rounded-lg" type="submit">Senden</button>
                    {:else}
                        <button class="bg-je-mystical-schwarzgruen-900 text-je-magical-sonnenglanz p-2 mt-3 rounded-lg" type="submit" disabled>Nachricht gesendet</button>
                    {/if}
                </form>
            {/if}
        </div>
        <div class="grid grid-flow-col grid-rows-2 gap-8 pt-20 pb-10">
            <div class="bg-je-mystical-nachtblau-900 p-5 rounded-lg col-start-1 row-start-1 transform md:scale-110 -rotate-6">
                <h2 class="text-4xl font-semibold text-je-sand my-2 font-poppins">Soziale Medien</h2>
                <Social />
            </div>
            <div class="bg-je-mystical-nachtblau-900 p-5 rounded-lg col-start-1 row-start-2 md:col-start-2 md:row-start-1 transform rotate-3 md:rotate-3 md:translate-x-10 md:translate-y-4">
                <h2 class="text-4xl font-semibold text-je-sand my-2 font-poppins">E-Mail</h2>
                <a href="mailto:contact@jonasebert.de" class="font-montserrat">contact@jonasebert.de</a>
            </div>
            <div class="bg-je-mystical-nachtblau-900 p-5 rounded-lg col-start-1 row-start-3 md:row-start-2 transform -rotate-3 md:rotate-3 md:translate-y-16">
                <h2 class="text-4xl font-semibold text-je-sand my-2 font-poppins">Post</h2>
                <p class="font-montserrat">Jonas Ebert<br>Postfach 5835<br>38049 Braunschweig<br>Deutschland</p>
            </div>
            <div class="bg-je-mystical-nachtblau-900 p-5 rounded-lg col-start-1 row-start-4 md:col-start-2 md:row-start-2 transform rotate-6 md:-rotate-2 md:translate-y-8">
                <h2 class="text-4xl font-semibold text-je-sand my-2 font-poppins">Fax</h2>
                <a href="tel:+4932225002428" class="font-montserrat">+49 3222 5002 428</a>
            </div>
        </div>
    </div>
</div>