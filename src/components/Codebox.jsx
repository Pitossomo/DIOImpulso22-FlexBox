import { objectToCSS } from "../utils/objectToCSSstring"
import Codeline from "./Codeline"

const Codebox = ({ style, childrenStyle, numItems }) => {
  const containerInlineStyle = objectToCSS(style)
  const childrenInlineStyle = objectToCSS(childrenStyle)

  const itemDivString = (index, itemStyle) => {
    let itemDiv = `<div`
    if (childrenInlineStyle.length > 1) itemDiv += ` style="${itemStyle}"`
    itemDiv += `> item ${index + 1
      }</div> `
    return itemDiv
  }

  let openParentDiv = "<div"
  if (containerInlineStyle.length > 1) openParentDiv += ` style="${containerInlineStyle}" `
  openParentDiv += ' class="preview">\n'

  return (
    <code><pre>
      {openParentDiv}
      {
        [...Array(numItems)].map((el, i) => <Codeline key={i}>{itemDivString(i, childrenInlineStyle)}</Codeline>)
      }
      {'</div>'}
    </pre></code>
  )
}

export default Codebox