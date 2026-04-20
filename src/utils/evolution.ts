import type { Species } from "../schemas/types";

type EvolutionNode = {
  species: Species
  evolves_to: EvolutionNode[];
};

export function extractEvolutionChain(chain: EvolutionNode): Species[] {
  const result: Species[] = [];

  function traverse(node: EvolutionNode) {
    result.push({ name: node.species.name, url: node.species.url });

    if (node.evolves_to.length > 0) {
      node.evolves_to.forEach(traverse);
    }
  }

  traverse(chain);

  return result;
}