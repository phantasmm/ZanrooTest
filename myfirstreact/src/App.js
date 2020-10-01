import React from 'react';
import './App.css';
import Gre from './Compo/Greet'
import Wel from './Compo/Welcome'
import Message from './Compo/Message'
import Counter from './Compo/Counter'
import FunctionClick from './Compo/FunctionClick'
import ClassClick from './Compo/ClassClick'
import EventBind from './Compo/EventBind'
import ParentComponent from './Compo/ParentComponent'
import SanrooTest from './Compo/SanrooTest'
import NameList from './Compo/NameList'
function App() {
  return (
    <div className="App">
      {/* <Gre name='draft'>
        <p>
          this is child P
        </p>
      </Gre>
      <Gre name='JS'>
        <button>Summit</button>
      </Gre>
      <Gre name='NP'/>
      <Wel name='draft'></Wel>
      <Wel name='JS'></Wel>
      <Wel name='NP'></Wel> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      <SanrooTest/>
      {/* <NameList/> */}
    </div>
  );
}

export default App;
