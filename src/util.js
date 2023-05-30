// Generates a pure random hash, useful for testing
// i.e. not deterministic!
export function getRandomHash() {
  let result = "0x";
  for (let i = 64; i > 0; --i)
    result += "0123456789abcdef"[~~(Math.random() * 16)];
  return result;
}

let hash, xs_state, originalState;
let pureMathRandom = Math.random;

export const getSeed = () => hash;

export const setSeed = (h) => {
  hash = h;
  console.log("Random Seed:", hash);
  xs_state = Uint32Array.from(
    [0, 0, 0, 0].map((_, i) => parseInt(hash.substr(i * 8 + 2, 8), 16))
  );
  originalState = xs_state.slice();
};

export const randomizeSeed = () => {
  setSeed(getRandomHash());
};

export const prng = () => {
  /* Algorithm "xor128" from p. 5 of Marsaglia, "Xorshift RNGs" */
  let s,
    t = xs_state[3];
  xs_state[3] = xs_state[2];
  xs_state[2] = xs_state[1];
  xs_state[1] = s = xs_state[0];
  t ^= t << 11;
  t ^= t >>> 8;
  xs_state[0] = t ^ s ^ (s >>> 19);
  return xs_state[0] / 0x100000000;
};

export function patchMath() {
  Math.random = () => prng();
}

export function unpatchMath() {
  Math.random = pureMathRandom;
}

export const reseed = () => {
  xs_state.set(originalState);
};

randomizeSeed();
