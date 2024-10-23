/* @refresh reload */
import { render } from 'solid-js/web';
import { App } from './app/app.component';

render(() => {
  return <App />;
}, document.getElementById('root') as HTMLElement);
