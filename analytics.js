// analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-7CNE6BFXDV'); // Replace with your Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
