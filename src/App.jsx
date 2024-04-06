import React, { useState } from 'react';
import './App.css'
import Header from './components/header';
import Main from './components/Main';
import { InputForm } from './components/Input-Form';
import Popup from './components/Popup';
import EditForm from './components/Edit-Form';
import Footer from './components/Footer';
import { data } from '/src/components/data.js';

function App() {
  const [itemsData, setItemsData] = useState(data);

  const addFormData = (formData) => {
    setItemsData([...itemsData, formData]);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <aside>
        <InputForm addFormData={addFormData} />
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
