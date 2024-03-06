/**
 *
 * @see https://commitlint.js.org/reference/configuration.html
 */
import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {

  extends: ['@commitlint/config-conventional'],
  // parserPreset: 'conventional-changelog-conventionalcommits',
  // formatter: '@commitlint/format',
  // rules: {},
};

export default Configuration;