const crypto = require("crypto");

/**
 * @param {Object} params
 * @param {string} params.text
 * @param {string?} params.encryptionMethod
 * @param {string?} params.secretKey
 * @param {string?} params.iv
 * @returns {string}
 * */
const encrypt = ({text, encryptionMethod = process.env.ENCRYPTION_METHOD, secretKey = process.env.SECRET_KEY, iv = process.env.SECRET_KEY.slice(0, 16)}) => {
    const cipher = crypto.createCipheriv(encryptionMethod, secretKey, iv);
    return cipher.update(text, "utf8", "base64") + cipher.final("base64")
};

/**
 * @param {Object} params
 * @param {string} params.encryptedMessage
 * @param {string?} params.encryptionMethod
 * @param {string?} params.secretKey
 * @param {string?} params.iv
 * @returns {string}
 * */
const decrypt = ({encryptedMessage, encryptionMethod = process.env.ENCRYPTION_METHOD, secretKey = process.env.SECRET_KEY, iv = process.env.SECRET_KEY.slice(0, 16)}) => {
    const decipher = crypto.createDecipheriv(encryptionMethod, secretKey, iv);
    return decipher.update(encryptedMessage, "base64", "utf8") + decipher.final("utf8")
};

module.exports = {
    encrypt,
    decrypt,
};
