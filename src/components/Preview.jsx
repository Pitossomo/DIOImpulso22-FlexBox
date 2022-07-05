const Preview = ({ style, childrenStyle, numItems }) => {
  console.log(childrenStyle)
  return (
    <div style={style} className="preview">
      {[...Array(numItems)].map((el, i) => <div style={childrenStyle} key={i}>item {i + 1}</div>)
      }
    </div >
  )
}

export default Preview