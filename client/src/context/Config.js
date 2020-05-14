import { createContext } from 'react';

const initialConfig = {
  name: "No name",
  routes: {},
  components: {}
};

const ConfigContext = createContext(initialConfig);

export default ConfigContext;