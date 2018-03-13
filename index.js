const app = "I don't do much."

function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(kitten) {
  return [...kittens, kitten]
}

function prependKitten(kitten) {
  return [kitten, ...kittens]
}