const passwordInput = document.getElementById('password-input');
const strengthBar = document.getElementById('strength-bar');
const entropyScore = document.getElementById('entropy-score');
const crackTime = document.getElementById('crack-time');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    
    if (password.length === 0) {
        strengthBar.style.width = '0%';
        entropyScore.innerText = '0';
        crackTime.innerText = 'Instant';
        return;
    }

    let poolSize = 0;

    // Evaluate character set pool size (R)
    if (/[a-z]/.test(password)) poolSize += 26;        // Lowercase
    if (/[A-Z]/.test(password)) poolSize += 26;        // Uppercase
    if (/[0-9]/.test(password)) poolSize += 10;        // Numbers
    if (/[^a-zA-Z0-9]/.test(password)) poolSize += 32; // Special characters

    // Information Entropy formula: E = L * log2(R)
    const entropy = Math.floor(password.length * Math.log2(poolSize));
    entropyScore.innerText = entropy;

    // Total combinations calculation (R^L)
    const totalCombinations = Math.pow(poolSize, password.length);
    
    // Assume a high-performance offline crack system handles 100 Billion guesses/second
    const guessesPerSecond = 100000000000;
    const secondsToCrack = totalCombinations / guessesPerSecond;

    // Visual tracking configurations based on entropy standards
    let visualWidth = Math.min((entropy / 60) * 100, 100);
    strengthBar.style.width = `${visualWidth}%`;

    // Dynamic UI states map based on bit stability
    if (entropy < 28) {
        strengthBar.style.backgroundColor = '#ea4335'; // Red (Very Weak)
        crackTime.innerText = 'LessThan 1 Second';
    } else if (entropy < 40) {
        strengthBar.style.backgroundColor = '#fbbc05'; // Yellow (Weak)
        crackTime.innerText = secondsToCrack < 60 ? `${Math.round(secondsToCrack)} Seconds` : `${Math.round(secondsToCrack / 60)} Minutes`;
    } else if (entropy < 60) {
        strengthBar.style.backgroundColor = '#4285F4'; // Blue (Medium Strength)
        crackTime.innerText = `${Math.round(secondsToCrack / 86400)} Days`;
    } else {
        strengthBar.style.backgroundColor = '#34a853'; // Green (Highly Secure)
        crackTime.innerText = 'Centuries / Infinite';
    }
});