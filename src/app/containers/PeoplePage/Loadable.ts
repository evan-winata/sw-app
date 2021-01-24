/**
 *
 * Asynchronously loads the component for PeoplePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PeoplePage = lazyLoad(
  () => import('./index'),
  module => module.PeoplePage,
);
