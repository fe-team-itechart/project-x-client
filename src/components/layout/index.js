import React from 'react';

import MainPage from '../../containers/mainPage';
import CoursesCarousel from '../../components/coursesCarousel';
import Help from '../help';

export const Layout = () => {
  return (
    <>
      <MainPage />
      <CoursesCarousel />
      <Help />
    </>
  );
};
