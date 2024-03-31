import './App.css'
import Header from './components/header';
import Main from './components/Main';
import InputForm from './components/Input-Form';
import Popup from './components/Popup';
import EditForm from './components/Edit-Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <aside>
        <InputForm />
      </aside>
      <aside>
        <Popup />
      </aside>
      <aside>
        <EditForm />
      </aside>
      <footer>
        <Footer />   
      </footer>
    </>
  )
}

export default App;