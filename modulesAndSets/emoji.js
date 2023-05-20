export function addRandomEmoticonToInput() {
    const arrayEmotikon = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
    const randomIndex = Math.floor(Math.random() * arrayEmotikon.length);
    const randomEmoticon = arrayEmotikon[randomIndex];
    return randomEmoticon;
  }
  