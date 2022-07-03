const Preview = ({ style, numItems = 3 }) => {
  return (
    <div style={style} className="preview">
      {[...Array(numItems)].map((el, i) => <div key={i}>item {i + 1}</div>)}
    </div>
  )
}

export default Preview