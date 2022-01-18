import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function MetaData({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Harry Potter Web App Challenge in React`}</title>
      </Helmet>
    </HelmetProvider>
  );
}