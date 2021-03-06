import Codebox from "./Codebox"
import Preview from "./Preview"

const BASE_NUM_ITEMS = 3

const CodeExample = ({ style, childrenStyle, numItems }) => {
  return (
    <div className="example">
      <Codebox style={style} childrenStyle={childrenStyle} numItems={numItems || BASE_NUM_ITEMS} />
      <Preview style={style} childrenStyle={childrenStyle} numItems={numItems || BASE_NUM_ITEMS} />
    </div>
  )
}

export default CodeExample