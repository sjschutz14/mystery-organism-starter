// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function with DNA mutations/comparisons
function pAequorFactor(number, array) {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      const base = array[Math.floor(Math.random() * 15)];
      let newBase = returnRandBase();
      while (newBase === base) {
        newBase = returnRandBase();
      }
      array.splice(base, 1, newBase);
      return array;
    },
    compareDNA(pAequor) {
      const dnaOne = array;
      const dnaTwo = pAequor.dna;
      let count = 0;
      for (let i = 0; i < dnaOne.length; i++) {
        let dnaOneP = dnaOne[i];
        let dnaTwoP = dnaTwo[i];
        if (dnaOneP === dnaTwoP) {
          count++;
        }
      }
      const total = count/15 * 100;
      console.log(`Specimen #1 and Specimen #2 have ${total}% DNA in common.`)
    },
    willLikelySurvive() {
      const dna = array;
      let count = 0;
      for (let i = 0; i < array.length; i++) {
        if (dna[i] === 'C' || dna[i] === 'G') {
          count++;
        }
      }
      const survival = count/15 * 100;
      if (survival >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      let cStrand = [];
      const dna = array;
      for (let i = 0; i < array.length; i++) {
        switch (dna[i]) {
          case "A":
            cStrand.push("T");
            break;
          case "C":
            cStrand.push("G");
            break;
          case "G":
            cStrand.push("C");
            break;
          case "T":
            cStrand.push("A");
        }
      }
      return cStrand;
    }
  }
};

//30 instances of pAequor with high survival rate
function liveStrong() {
  let strongOrg = [];
  for (let i = 0; i < 30;) {
    if (pAequorFactor(i, mockUpStrand()).willLikelySurvive() === true) {
      strongOrg.push(pAequorFactor(i, mockUpStrand()));
      i++;
    }
  }
  return strongOrg;
};