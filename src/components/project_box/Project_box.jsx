

const Project_box = (props) => {
  return (
    <div className="h-[350px] w-[450px] bg-slate-500 rounded-xl">
      <img className="h-[100%] w-[100%] overflow-hidden object-cover  opacity-70 hover:opacity-100 " src={props.source} alt="" />
    </div>
  )
}

export default Project_box