const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const UK_PHONE_REGEX = /^(?:\+44|0)(?:\d{10}|\d{4} \d{6}|\d{5} \d{5})$/

module.exports = {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  UK_PHONE_REGEX
}
