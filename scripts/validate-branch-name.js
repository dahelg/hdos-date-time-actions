import { execSync } from 'child_process';
import { prefixes, isValidBranchName, getBranchName } from './branch-utils.js';

const branchName = getBranchName();

if (!isValidBranchName(branchName)) {
  console.error(`Invalid branch name: ${branchName}`);
  console.error(
    `Branch names should start with one of the following prefixes: "${prefixes.join(
      '", "'
    )}", followed by a "/" and lowercase letters. Hyphens are allowed between letters.`
  );
  process.exit(1);
}
