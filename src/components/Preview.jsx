const Preview = ({ flex = true, style, numItems = 3 }) => {
  const previewStyle = flex ? { ...style, display: "flex" } : style
  console.log(previewStyle)
  return (
    <div style={previewStyle} className="preview">
      {[...Array(numItems)].map((el, i) => <div>item {i + 1}</div>)}
    </div>
  )
}

export default Preview