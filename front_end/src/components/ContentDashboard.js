import React from 'react';
import { PrivateRouter } from '../Routes';

const ContentDashboard = ({ children, ...props }) => {
  const { path } = props;
  return <PrivateRouter path={path} render={() => children} />;
};

export default ContentDashboard;
