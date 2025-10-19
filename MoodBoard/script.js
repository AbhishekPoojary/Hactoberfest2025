const quoteEl = document.getElementById('quote');

const moods = {
  happy: {
    colors: ['#f9d423', '#ff4e50'],
    quotes: [
      "Happiness is not by chance, but by choice.",
      "Smile! It’s the key that fits the lock of everyone’s heart.",
      "Choose joy today 🌻"
    ]
  },
  focused: {
    colors: ['#232526', '#414345'],
    quotes: [
      "Focus on being productive instead of busy.",
      "Discipline is the bridge between goals and accomplishment.",
      "Stay laser-focused 🎯"
    ]
  },
  calm: {
    colors: ['#2b5876', '#4e4376'],
    quotes: [
      "Peace comes from within.",
      "Breathe in calm, breathe out chaos.",
      "Tranquility is the real luxury 🌊"
    ]
  },
  energetic: {
    colors: ['#f12711', '#f5af19'],
    quotes: [
      "Energy and persistence conquer all things.",
      "Make today count!",
      "You’re unstoppable ⚡"
    ]
  }
};

function setMood(mood) {
  const { colors, quotes } = moods[mood];
  document.body.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  localStorage.setItem('lastMood', mood);
}

window.onload = () => {
  const lastMood = localStorage.getItem('lastMood');
  if (lastMood) setMood(lastMood);
};
