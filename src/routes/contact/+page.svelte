<script>
    import { name } from "$lib/store";
    import SocialMediaIcons from '$lib/socialmediaicons.svelte';
    import Image from '$lib/components/image.svelte';
	import { Input } from "postcss";
	import { isRedirect } from "@sveltejs/kit";

    let response;
    let status;
    let submitting = false;

    async function submitForm(data) {
        submitting = true;
        const formData = new FormData(data.currentTarget);
        const res = await fetch("/api/contact", {
            method: "POST",
            body: formData
        });
        response = await response.json();
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
        @apply text-je-gray-100 font-bold text-base;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
</style>

<div class="container">
    <h1 class="text-5xl font-bold text-je-sand my-2 py-10">{name} - Kontakt</h1>
    <div class="flex flex-row justify-between gap-3">
        <div class="flex flex-1 flex-col gap-5">
            <div class="flex flex-col gap-3 bg-je-gray-700 p-5 rounded-lg">
                {#if status != 200}
                    <h2 class="text-4xl font-semibold text-je-sand my-2">Kontaktformular</h2>
                    <form class="flex flex-col gap-3" on:submit|preventDefault={submitForm}>
                        <input class="border-2 border-je-gray-300 bg-transparent p-2 rounded-lg" type="text" name="name" placeholder="Name" required disabled={submitting}>
                        <input class="border-2 border-je-gray-300 bg-transparent p-2 rounded-lg" type="email" name="email" placeholder="E-Mail" required disabled={submitting}>
                        <textarea class="border-2 border-je-gray-300 bg-transparent p-2 rounded-lg" name="message" id="message" placeholder="Deine Nachricht" rows="4" maxlength="300" required disabled={submitting}></textarea>
                        <label for="message" class="text-xs">Maximal 300 Zeichen</label>
                        <div class="flex flex-row gap-4 items-center relative">
                            <input class="h-5 w-5 border-2 border-je-gray-300 rounded-lg appearance-none custom-checkbox relative" type="checkbox" name="privacy" id="privacy" value="true" title="privacy" placeholder="false" required disabled={submitting}>
                            <label for="privacy" class="ml-2">
                                <a href="/legal/privacy" target="_blank">Datenschutzerklärung zustimmen</a>
                            </label>
                        </div>
                        {#if !submitting}
                            <button class="bg-je-green-500 text-white p-2 mt-3 hover:text-je-sand rounded-lg" type="submit">Senden</button>
                        {:else}
                            <button class="bg-je-green-500 text-white p-2 mt-3 rounded-lg" type="submit" disabled>Nachricht gesendet</button>
                        {/if}
                    </form>
                {/if}
            </div>
            <div>
                <div class="bg-je-gray-700 p-5 rounded-lg mb-4">
                    <h2 class="text-4xl font-semibold text-je-sand my-2">Soziale Medien</h2>
                    <SocialMediaIcons />
                </div>
                <div class="bg-je-gray-700 p-5 rounded-lg mb-4">
                    <h2 class="text-4xl font-semibold text-je-sand my-2">E-Mail</h2>
                    <a href="mailto:contact@jonasebert.de" class="hover:underline">contact@jonasebert.de</a>
                </div>
                <div class="bg-je-gray-700 p-5 rounded-lg">
                    <h2 class="text-4xl font-semibold text-je-sand my-2">Post</h2>
                    <p>Jonas Ebert<br>Postfach 5835<br>38049 Braunschweig<br>Deutschland</p>
                </div>
            </div>
        </div>
        <div class="flex-1 hidden sm:block">
            <Image src="/contact/teaser.webp" alt="Teaser" classNames="rounded-xl w-full h-full object-cover"/>
        </div>
    </div>
</div>