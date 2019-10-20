//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dnaStr = '') {
    return dnaStr.replace(/[GCTA]/g, (match)=>{
        switch(match){
          case 'G':
            return 'C';
          case 'C':
              return 'G';
          case 'T':
              return 'A';
          case 'A':
              return 'U';
        }
      })
}

module.exports = DnaTranscriber;
