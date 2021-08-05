// Node.js
const crypto = require("crypto");

function decrypt(encryptedData, sessionKey, iv) {
  const decipher = crypto.createDecipheriv(
    "aes-128-cbc",
    Buffer.from(sessionKey, "base64"),
    Buffer.from(iv, "base64")
  );
  let ret = decipher.update(encryptedData, "base64");
  ret += decipher.final();
  return ret;
}