import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
  import ACSErrorPage from "../components/ACSErrorPage";
  import ACSFetchNews from "../components/ACSFetchNews";
  import ACSFetchAlbum from "../components/ACSFetchAlbum";
  import ACSAbout from "../components/ACSAbout";
  import ACSHome from "../components/ACSHome";
  import { ACSPageLayout } from "../components/ACSPageLayout";

  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ACSPageLayout />} errorElement={<ACSErrorPage />}>
        <Route path="sobre" element={<ACSAbout />}></Route>
        <Route path="home" element={<ACSHome />}></Route>
        <Route path="albuns" element={<ACSFetchAlbum />}></Route>
        <Route path="noticia" element={<ACSFetchNews />}></Route>
      </Route>
    )
  );
  
  const Root = () => {
    return <RouterProvider router={route} />;
  };
  
  export default Root;
  