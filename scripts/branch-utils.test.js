import { isValidBranchName } from './branch-utils.js';

describe('isValidBranchName', () => {
  describe('should return true for valid branch names', () => {
    it('allows branch names with the "feature" prefix', () => {
      expect(isValidBranchName('feature/my-feature')).toBe(true);
    });

    it('allows branch names with the "bugfix" prefix', () => {
      expect(isValidBranchName('bugfix/my-bugfix')).toBe(true);
    });

    it('allows branch names with the "hotfix" prefix', () => {
      expect(isValidBranchName('hotfix/my-hotfix')).toBe(true);
    });

    it('allows branch names with numbers', () => {
      expect(isValidBranchName('feature/my-feature-1')).toBe(true);
    });
  });

  describe('should return false for invalid branch names', () => {
    it('disallows branch names without a prefix', () => {
      expect(isValidBranchName('my-feature')).toBe(false);
    });

    it('disallows branch names with uppercase letters', () => {
      expect(isValidBranchName('feature/myFeature')).toBe(false);
    });

    it('disallows branch names with a hyphen at the start of the name', () => {
      expect(isValidBranchName('feature/-my-feature')).toBe(false);
    });

    it('disallows branch names with a hyphen at the end of the name', () => {
      expect(isValidBranchName('feature/my-feature-')).toBe(false);
    });

    it('disallows empty branch names', () => {
      expect(isValidBranchName('feature/')).toBe(false);
    });

    it('disallows branch names with non-ASCII letters', () => {
      expect(isValidBranchName('feature/my-ä-feature')).toBe(false);
      expect(isValidBranchName('feature/my-ü-feature')).toBe(false);
      expect(isValidBranchName('feature/my-ß-feature')).toBe(false);
    });

    it('disallows branch names equal to disallowed names', () => {
      expect(isValidBranchName('feature/feature')).toBe(false);
      expect(isValidBranchName('feature/bugfix')).toBe(false);
      expect(isValidBranchName('feature/hotfix')).toBe(false);
      expect(isValidBranchName('feature/main')).toBe(false);
      expect(isValidBranchName('feature/undefined')).toBe(false);
      expect(isValidBranchName('feature/null')).toBe(false);
    });
  });
});
