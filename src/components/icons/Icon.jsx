

const Icon = (props) => {
  return (
    <div>
        <a href={props.link} className="hover:text-" target="blank_">
          <button className="border p-3 text-white text-2xl rounded-full hover:bg-white hover:text-violet-600">
            <props.icon />
          </button>
        </a>
    </div>
  )
}

export default Icon