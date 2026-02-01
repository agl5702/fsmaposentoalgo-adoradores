const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLATS = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#",
};

function normalize(note) {
  return FLATS[note] || note;
}

export function transposeChord(chord, steps) {
  // Slash chord (Ab/C)
  if (chord.includes("/")) {
    const [root, bass] = chord.split("/");
    return transposeChord(root, steps) + "/" + transposeChord(bass, steps);
  }

  // Extrae raíz + resto (Bm7, Bsus4, etc)
  const match = chord.match(/^([A-G][b#]?)(.*)$/);
  if (!match) return chord;

  const [, root, suffix] = match;
  const normalizedRoot = normalize(root);
  const index = NOTES.indexOf(normalizedRoot);
  if (index === -1) return chord;

  const newRoot = NOTES[(index + steps + NOTES.length) % NOTES.length];
  return newRoot + suffix;
}
