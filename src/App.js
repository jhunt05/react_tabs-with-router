import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';
import NavLinks from './components/navLink/NavLinks';

const App = () => (
  <div className="App">
    <NavLinks />
    <Switch>
      <Route path="/tabs" component={TabsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
);

const HomePage = () => (
  <>
    <h1 className="heading">Home page</h1>
  </>
);

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const TabsPage = () => (
  <>
    <TabsHeading />
    <Tabs tabs={tabs} currentTabId="tab-1" />
  </>
);

const TabsHeading = () => <h1 className="heading">Tabs Page</h1>;

export default App;