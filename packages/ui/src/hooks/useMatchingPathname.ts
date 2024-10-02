type UsePathnameType = () => string;

export const createUseMatchingPathname = (usePathname: UsePathnameType) => {
  return (links: string[]) => {
    const pathname = usePathname();
    const pathnameSegments = pathname.split("/");

    let maxMatchCount = 0;
    let bestMatch = "";

    links.forEach((link) => {
      const linkSegments = link.split("/");
      let matchCount = 0;

      linkSegments.forEach((segment, index) => {
        if (segment === pathnameSegments[index]) {
          matchCount++;
        }
      });

      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        bestMatch = link;
      }
    });

    return bestMatch;
  };
};
// si besoin utilisation d'un useMatchingPathnameWrapper.ts dans l'app dans src/hooks export const useMatchingPathname = createUseMatchingPathname(usePathname);
// et exemple d'utilisation const bestMatch = useMatchingPathname(['/', '/about', '/contact']);