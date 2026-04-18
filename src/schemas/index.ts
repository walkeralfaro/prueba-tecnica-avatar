import { z } from "zod";

export const ResultSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const PokemonsSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(ResultSchema),
});

export type Pokemons = z.infer<typeof PokemonsSchema>;

export const SimplePokemonSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type SimplePokemon = z.infer<typeof SimplePokemonSchema>;

// PokemonPage type
export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),

  weight: z.number(),

  sprites: z.object({
    other: z.object({
      dream_world: z.object({
        front_default: z.string(),
      }),
    }),
  }),

  moves: z.array(
    z.object({
      move: z.object({
        name: z.string(),
      }),
    }),
  ),

  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({
        name: z.string(),
      }),
    }),
  ),
});

export type Pokemon = z.infer<typeof PokemonSchema>;
