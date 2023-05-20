export function addRandomEmoticonToInput(input) {
    const arrayEmotikon = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
    const randomIndex = Math.floor(Math.random() * arrayEmotikon.length);
    input.value = arrayEmotikon[randomIndex];
  }
  