import { objectToCSS } from "../utils/objectToCSSstring"
import Codeline from "./Codeline"

const Codebox = ({ style, numItems }) => {
  const cssString = objectToCSS(style)

  let openParentDiv = "<div"
  if (cssString.length > 1) openParentDiv += ` style="${cssString}" `
  openParentDiv += ' class="preview">\n'

  return (
    <code><pre>
      {openParentDiv}
      {
        [...Array(numItems)].map((el, i) => <Codeline key={i}>&nbsp;&nbsp;{`<div>item ${i + 1}</div>`}</Codeline>)
      }
      {'</div>'}
    </pre></code>
  )
}

export default Codebox