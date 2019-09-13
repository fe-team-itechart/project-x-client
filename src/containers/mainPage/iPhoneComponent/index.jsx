import React from 'react';

import Header from './header';
import { ProfilePhoto } from './profilePhoto';
import { ProfileInputs } from './profileInputs';
import { Footer } from './footer';

export const ProfileIphone = () => {
  return (
    <>
      <Header />
      <ProfilePhoto />
      <ProfileInputs/>
      <Footer />
    </>
  );
};
