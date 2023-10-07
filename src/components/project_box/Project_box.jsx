

const Project_box = (props) => {
  return (
    <div className="h-[300px] w-[400px] bg-slate-500 ">
      <img className="h-[100%] w-[100%] overflow-hidden object-cover opacity-70 hover:opacity-100 " src={props.source} alt="" />
    </div>
  )
}

export default Project_box