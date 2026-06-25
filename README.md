# 🔐 **Password Entropy Analyzer**
> A high-performance, client-side security utility engineered to audit authentication credential strength using information entropy models and combinatorial mathematics.

---

## 🚀 **Live Visual Demo**
<img width="449" height="328" alt="Password Anlyzer" src="https://github.com/user-attachments/assets/a14d936a-c621-475f-b50f-97fb4b2b16e0" />

---

## 🧠 **Architectural Overview & Core Logic**
Unlike rudimentary password checkers that rely on static, outdated check-box constraints (e.g., simply checking for a single capital letter), this application utilizes **Shannon Entropy principles** to mathematically determine the true algorithmic randomness of a string buffer.

### 1️⃣ Dynamic Character Pool Evaluation (R)
The system processes the input string at runtime using optimized Regular Expressions ('RegEx') to calculate the size of the total symbol space pool ($R$):

* **Lowercase letters `[a-z]`** ➔ Adds 26 to the pool
* **Uppercase letters `[A-Z]`** ➔ Adds 26 to the pool
* **Numeric digits `[0-9]`** ➔ Adds 10 to the pool
* **Special characters/symbols `[^a-zA-Z0-9]`** ➔ Adds 32 to the pool

### 2️⃣ Information Entropy Calculation
The security score is calculated in bits using the classical logarithmic information density formula:

E = L \times \log_2(R)
*Where **L** represents the exact length of the password string, and **R** represents the calculated pool size.*

### 3️⃣ Brute-Force Time Complexity Estimation

To map the password against standard modern compute vulnerabilities, the tool determines total search space combinations (R^L) and divides it against a baseline automated brute-force cluster processing at *100 Billion guesses per second*:

> {Time to Crack} = frac{R^L}{100,000,000,000}.
---

## 🛠️ **Tech Stack & Implementation Details**

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5 | Semantic structural architecture |
| **Styling** | CSS3 | Dynamic UI states & fluid transitions |
| **Engine** | Vanilla JavaScript (ES6+) | Real-time algorithmic processing & DOM injection |
| **Privacy** | Zero Dependencies | Sandboxed client-side execution; 100% network isolation |

---

## ⚡ **Key Engineering Features**

* **Asynchronous Input Streaming:** Listens to data changes at execution runtime, performing instantly without interface thread lags or rendering blocks.

* **Cryptographic Bit Categorization:** Maps password security metrics accurately using standard cryptographic industry baselines:

   * `Entropy < 28 bits` ➔ **Very Weak** (Immediate offline cracking risk)
  * `Entropy 28 - 39 bits` ➔ **Weak**
  * `Entropy 40 - 59 bits` ➔ **Medium Strength**
  * `Entropy ≥ 60 bits` ➔ **High Security** (Cryptographically stable)

* **Secure Sandbox Execution:** Zero backend network calls. The data payload never leaves the browser client layer, completely eliminating man-in-the-middle interception vulnerabilities.

---

## 📦 **Local Installation & Quickstart**

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/password-entropy-analyzer.git]

2. **Navigat into the project directory**:
   ```bash
   cd password-entropy-analyzer

3. **Launch the App**:
   Open `index.html` in your favorite browser or run via the VS Code **Live Server** extension.
