import { objectToCSS } from "../utils/objectToCSSstring"
import Codeline from "./Codeline"

const Codebox = ({ style, childrenStyle, numItems }) => {
  const containerInlineStyle = objectToCSS(style)
  const defaultChildrenInlineStyle = objectToCSS(childrenStyle?.default)

  const itemDivString = (index, itemStyle) => {
    let itemDiv = `<div`
    if (defaultChildrenInlineStyle.length > 1) itemDiv += ` style="${itemStyle}"`
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
        [...Array(numItems)].map((el, i) => {
          let itemDivStyle = (childrenStyle && childrenStyle[i + 1]) ? objectToCSS(childrenStyle[i + 1]) : defaultChildrenInlineStyle
          return (
            <Codeline key={`c${i + 1}`}>
              {itemDivString(i, itemDivStyle)}
            </Codeline>
          )
        })
      }
      {'</div>'}
    </pre></code>
  )
}

export default Codebox