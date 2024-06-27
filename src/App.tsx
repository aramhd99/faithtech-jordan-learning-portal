import Layout from "./components/layout/layout.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/home.tsx";
import About from "./components/About/About.tsx";
import CoursesList from "./components/Courses/CoursesList.tsx";
function App() {
  return (
    <>
      <Layout>
          <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
                <Route path={"/courses"} element={<CoursesList />} />
              <Route path={"*"} element={<div>Not Found</div>} />
          </Routes>
      </Layout>
    </>
  )
}

export default App
