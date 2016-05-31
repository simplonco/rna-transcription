//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dna) {
  dna = dna.split("");
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      dna[i] = "A";
    } else if (dna[i] == "A") {
      dna[i] = "T";
    } else if (dna[i] == "G") {
      dna[i] = "C";
    } else { // dna[i] == "C"
      dna[i] = "G";
    }
  }
  return dna.join("");
};

module.exports = DnaTranscriber;
