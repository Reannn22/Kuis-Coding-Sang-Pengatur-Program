function categorizeNumber(input) {
  // 1. Jika input bukan number, bangkitkan (throw) error.
  if (typeof input !== 'number') {
    throw new Error('Input harus berupa bilangan bulat');
  }

  // 5. Jika input adalah nol, kembalikan dengan nilai "Nol".
  if (input === 0) {
    return 'Nol';
  }

  // 6. Jika input negatif, kembalikan dengan nilai "Negatif".
  if (input < 0) {
    return 'Negatif';
  }

  // 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
  if (isPrime(input)) {
    return 'Prima';
  }

  // 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
  if (input % 2 === 0) {
    return 'Genap';
  }

  // 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
  return 'Ganjil';
}

// Fungsi tambahan untuk memeriksa bilangan prima
function isPrime(num) {
  if (num < 2) return false; // Bilangan kurang dari 2 bukan bilangan prima
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
