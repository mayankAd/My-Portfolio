import { useContext } from "react";
import Project_box from "../project_box/Project_box";
import { ThemeContext } from "../../App";


const My_projects = () => {

  const data = useContext(ThemeContext);

  return (
    <div className="flex gap-10 flex-col items-center" style={{backgroundColor:data.theme==="dark"?"black":"white"}}>
      <h2 id="projects_section" className="text-4xl font-bold" style={{color:data.theme==="dark"?"white":"black"}}>My Projects</h2>
      <p className="text-xl" style={{color:data.theme==="dark"?"white":"black"}}>
        Here are a few projects I've worked on. Want to see more?{" "}
        <a className="text-blue-600" href="https://github.com/mayankAd" target="blank_" >
          Go to my GitHub
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-20 justify-center mt-20">
        <a href="https://mayankad.github.io/movie_search_engine/" target="blank_">
          <Project_box source={"images/movie_search_engine.png"}/>
        </a>

        <a href="https://mayankad.github.io/todo_context_local/" target="blank_">
          <Project_box source={"images/todo.png"}/>
        </a>
        <a href="#">
          <Project_box source={"images/netflix_clone.png"}/>
        </a>
        <a href="#">
          <Project_box source={"images/nike_brand_page.png"}/>
        </a>
        <a href="#">
          <Project_box source={"images/spotify_clone.png"}/>
        </a>
        
      </div>
    </div>
  );
};

export default My_projects;
