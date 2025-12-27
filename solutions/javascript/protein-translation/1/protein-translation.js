//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna = "") => {
  const codonMap = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
  };

  const result = [];

  for(let i = 0; i < rna.length; i += 3){
    const codon = rna.slice(i, i + 3);

    if(codon.length < 3){
      throw new Error("Invalid codon")
    }

    const amino = codonMap[codon];

    if(!amino){
      throw new Error("Invalid codon");
    }

    if(amino === "STOP") break;

    result.push(amino);
  } 
  return result;
};
