import minimatch from "minimatch";

export function pathMatches(target: string, patterns: string[]) {
  return patterns.some((pattern) => minimatch(target, pattern));
}
