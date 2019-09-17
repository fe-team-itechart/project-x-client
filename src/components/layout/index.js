import React from 'react';

import MainPage from '../../containers/mainPage';
import CoursesCarousel from '../../containers/couresCarousel/index';
import { Help } from '../help';

export const Layout = () => {
  return (
    <>
      <MainPage />
      <CoursesCarousel />
      <Help />
    </>
  );
};
