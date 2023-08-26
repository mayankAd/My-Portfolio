import Project_box from "../project_box/Project_box";

const My_projects = () => {
  return (
    <div className="flex gap-10 flex-col items-center">
      <h2 id="projects_section" className="text-4xl font-bold">My Projects</h2>
      <p className="text-xl">
        Here are a few projects I've worked on. Want to see more?{" "}
        <a className="text-blue-600" href="https://github.com/mayankAd" target="blank_" >
          Go to my GitHub
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-20 justify-center mt-20">
        <a href="#">
          <Project_box source={"/images/projects_images/netflix_clone.png"}/>
        </a>

        <a href="#">
          <Project_box source={"/images/projects_images/nike_brand_page.png"}/>
        </a>
        <a href="#">
          <Project_box source={"/images/projects_images/spotify_clone.png"}/>
        </a>
        <a href="#">
          <Project_box source={"/images/projects_images/nike_brand_page.png"}/>
        </a>
        <a href="#">
          <Project_box source={"/images/projects_images/spotify_clone.png"}/>
        </a>
        <a href="#">
          <Project_box source={"/images/projects_images/netflix_clone.png"}/>
        </a>
      </div>
    </div>
  );
};

export default My_projects;
