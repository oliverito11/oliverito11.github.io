import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import NotFoundPage from './pages/NotFoundPage';
import ItemList from "./pages/ItemList";
import { useState, useEffect } from "react";

function App() {
  const [projectList, setProjectList] = useState();
  const [tutorialList, setTutorialList] = useState();
  const [tutorialsIndex, setTutorialsIndex] = useState(0);
  const [projectsIndex, setProjectsIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/entries/tutorials/" + tutorialsIndex + "/10")
      .then((res) => res.json())
      .then((json) => setTutorialList(json))

    fetch("http://localhost:5000/entries/projects/" + projectsIndex + "/10")
      .then((res) => res.json())
      .then((json) => setProjectList(json))
  }, [tutorialsIndex, projectsIndex])

  function changePage(index, page) {
    console.log(index + " | " + page);
    if(page == "tutorials") {
      setTutorialsIndex(index * 10)
    }
    else if (page == "projects") {
      setProjectsIndex(index * 10)
    }
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='tutorials' element={<List list={tutorialList} page={"Tutorials"} changePage={(index, page) => changePage(index, page)} />} />
          <Route path='tutorials/:id' element={<ItemList list={tutorialList} />} />
          <Route path='projects' element={<List list={projectList} page={"Projects"} />} />
          <Route path='projects/:id' element={<ItemList list={projectList} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
