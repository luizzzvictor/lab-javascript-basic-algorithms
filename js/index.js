// Iteration 1: Names and Input
let hacker1 = "Luiz";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Bruno";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length}.`);
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops

let nomeMesmaLinha = "";

function logNomeInteiro() {
  for (i = 0; i < hacker1.length; i++) {
    nomeMesmaLinha = nomeMesmaLinha + hacker1[i].toUpperCase();
  }
  console.log(nomeMesmaLinha);
}

logNomeInteiro();

let nomeInvertido = "";

function logNomeInvertido() {
  for (i = hacker1.length - 1; i >= 0; i--) {
    nomeInvertido = nomeInvertido + hacker1[i];
  }
  console.log(nomeInvertido);
}

logNomeInvertido();

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
} else {
  console.log(`Yo, the navigator goes first definitely.`);
}

// Bonus 1

// Bonus 2 - CHECKING PALINDROMES

let phraseToCheck = "A man, a plan, a canal, Panama!";

function checarPalindromo() {
  let frenteTrás = "";
  let trasFrente = "";

  for (i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === ",") {
      continue;
    } else {
      frenteTrás = frenteTrás + phraseToCheck[i];
    }
  }
  for (i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === ",") {
      continue;
    } else {
      trasFrente = trasFrente + phraseToCheck[i];
    }
  }
  console.log(`'${frenteTrás}', cuja inversão é '${trasFrente}'`);
  if (frenteTrás.toUpperCase === trasFrente.toUpperCase) {
    console.log(`O termo '${phraseToCheck}' constitui um PAlÍNDROMO!`);
  } else {
    console.log(`O termo '${phraseToCheck}' NÃO constitui um PAlÍNDROMO!`);
  }
}

checarPalindromo();
