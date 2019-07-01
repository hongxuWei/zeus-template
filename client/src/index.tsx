import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './pages/Hello/Hello';
import './index.less';

ReactDOM.render(
  <Hello name="test"/>,
  document.getElementById('root')
);
