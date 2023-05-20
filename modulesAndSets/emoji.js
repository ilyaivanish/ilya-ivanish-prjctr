export function addRandomEmoticonToInput(input) {
    const arrayEmotikon = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
    const randomIndex = Math.floor(Math.random() * arrayEmotikon.length);
    const randomEmoticon = arrayEmotikon[randomIndex];
    input.value = randomEmoticon;
    return randomEmoticon;
  }
  