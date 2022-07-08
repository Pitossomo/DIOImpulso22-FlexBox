const Preview = ({ style, childrenStyle, numItems }) => {
  return (
    <div style={style} className="preview">
      {[...Array(numItems)].map((el, i) => {
        let itemStyle = (childrenStyle && childrenStyle[i + 1]) || childrenStyle?.default
        return <div style={itemStyle} key={i}> item {i + 1}</div>
      })}
    </div>
  )
}

export default Preview