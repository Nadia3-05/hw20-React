import { SideBar } from './Components/SideBar';
import { Main } from './Components/Main';
import { Post } from './Components/Post';
import { Photo } from './Components/Photo';
import { Contacts } from './Components/Contacts';
import {BrowserRouter , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div ><>
      <SideBar />
      
        <Routes>
          {/* <Route path='*' element={<SignIn />} /> */}
          <Route path="*" element={<Main />} />
          <Route path="/post" element={<Post />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
     
      </>
    </div>
    </BrowserRouter>
  );
}

export default App;