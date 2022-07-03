const isLetter = char => {
  return char.toUpperCase() !== char.toLowerCase()
}

// Function camelToKebab
// Turn strings from camelCase to kebab-case
// camelCase is used to pass css style to React elements
// kebab-case is used to pass css inline style to HTML tags
const camelToKebab = str => {
  return str.split('').map((char, i) => {
    return (isLetter(char) && char.toUpperCase() === char) 
    ? `${i !== 0 ? '-' : ''}${char.toLowerCase()}`
    : char;
  }).join('');
}

// Function objectToString
// Transform an object to a string, with keys in kebab case
const objectToString = (obj = {}) => { 
  const cssRulesArr = Object.keys(obj).map(key => `${camelToKebab(key)}: ${obj[key]}`)
  return cssRulesArr.join('; ')
}

export const objectToCSS = obj => obj ? objectToString(obj) : ''