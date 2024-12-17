<script>
    export let words = ["Solidarisch.", "Gerecht.", "Sozial.", "Fair.", "Stark.", "Klar."];
  
    let currentWord = "";
    let nextWord = "";
    let isTransitioning = false;
    let i = 0;
  
    function updateWords() {
      isTransitioning = true;
      nextWord = words[i];
      setTimeout(() => {
        currentWord = nextWord;
        i++;
        if (i === words.length) {
          i = 0;
        }
        isTransitioning = false;
        setTimeout(updateWords, 1750); // Dauer, wie lange jedes Wort angezeigt wird
      }, 750); // Dauer der Übergangszeit
    }
  
    updateWords();
  </script>
  
  <style lang="postcss">
    .fade {
      transition: opacity 1s ease-in-out;
    }
    .fade-in {
      opacity: 1;
    }
    .fade-out {
      opacity: 0;
    }
  </style>
  
  <h2 class="text-2xl md:text-xl font-semibold text-je-luminous-nebellicht text-nowrap">
    Grün. Gemeinsam. <span class="fade" class:fade-in={!isTransitioning} class:fade-out={isTransitioning}>{currentWord}</span>
  </h2>
  