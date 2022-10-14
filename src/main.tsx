import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './assets/fontStyle.css';
import './assets/global.css';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <input type="checkbox" id="side-menu" className="drawer-toggle" />
        <section className="drawer-content">
          <App />
        </section>
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>,
);
