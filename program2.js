function decodeTheRing(message, key) {
  const mLen = message.length;
  const kLen = key.length;

  const dp = Array(mLen + 1).fill(false).map(() => Array(kLen + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= kLen; j++) {
    if (key[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= mLen; i++) {
    for (let j = 1; j <= kLen; j++) {
      if (key[j - 1] === message[i - 1] || key[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (key[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[mLen][kLen];
}

// Test cases
// console.log(decodeTheRing("aa", "*"));      // true
// console.log(decodeTheRing("cb", "?a"));     // false

module.exports = decodeTheRing;