const Codeline = ({ endWithNewLine = true, children }) => {
  let text = Array.isArray(children) ? children.join('') : children
  if (endWithNewLine) text += "\n"
  return text
}

export default Codeline