<script>
    import { onMount } from 'svelte';
    import InfoMessage from '$lib/components/blocks/InfoMessage.svelte';

    let countdown = 5; // Countdown in Sekunden

    onMount(() => {
        const interval = setInterval(() => {
            countdown -= 1;
            if (countdown < 0) {
                clearInterval(interval);
                history.back();
            }
        }, 1000); // Jede Sekunde aktualisieren
    });
</script>

<main>
    <div class="flex flex-col items-center justify-center min-h-screen container text-pretty">
        <InfoMessage message={`Diese Seite existiert nicht. Du wirst automatisch in <strong>${countdown} Sekunden</strong> weitergeleitet...`} />
    </div>
</main>