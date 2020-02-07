import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import NewItem from './pages/NewItem';
import Teste from './pages/Teste'
import Momentum from './pages/Momentum'
import AccordionnMomentum from './pages/AccordionMomentum'
import Autocomplete from './pages/AutocompleteMomentum'
import Table from './pages/Table'
import MapLeaflet from './pages/MapLeaflet'
import Charts from './pages/Charts'
import Motion from './pages/Motion'
import Nimbus from './pages/Nimbus'
import Menu from './components/Menu'
import MenuIonic from './components/MenuIonic'
import User from './pages/User'
import ChatRoom from './pages/ChatRoom'
import { ThemeProvider } from 'styled-components';
import { Theme } from '@somarmeteorologia/momentum'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  const menuEl = React.createRef();

  function closeMenu() {
    console.log(menuEl)
    menuEl.current.close()
  }

  return (
    <IonApp>
      <ThemeProvider theme={Theme.light}>
        <IonReactRouter>
          {/* <IonSplitPane contentId='main'> */}
          <MenuIonic ref={menuEl}>
            <Menu closeMenu={closeMenu} />
          </MenuIonic>
          <IonRouterOutlet id='main'>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/new" component={NewItem} />
            <Route exact path='/momentum/Accordion' component={AccordionnMomentum} />
            <Route exact path='/momentum/Autocomplete' component={Autocomplete} />
            <Route exact path="/momentum" component={Momentum} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/map" component={MapLeaflet} />
            <Route exact path="/charts" component={Charts} />
            <Route path="/motion" component={Motion} />
            <Route path="/nimbus" component={Nimbus} />
            <Route path='/chat' component={User} />
            <Route path='/chatroom' component={ChatRoom} />
            <Route path="/teste" component={Teste} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          {/* </IonSplitPane> */}
        </IonReactRouter>
        {/* </Menu> */}
      </ThemeProvider>
    </IonApp>
  )
};

export default App;
