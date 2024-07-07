<script>
    export let message = '';
</script>

<div class="flex justify-center items-center">
    <div class="flex my-5 border-2 p-4 rounded-lg border-blue-400 bg-blue-600 bg-opacity-20 text-white font-semibold shadow-lg flex-col items-center">
        <p class="w-full text-center">
            {@html message}
        </p>
    </div>
</div>