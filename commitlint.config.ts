/**
 *
 * @see https://commitlint.js.org/reference/configuration.html
 */
import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional']
};

export default Configuration;
