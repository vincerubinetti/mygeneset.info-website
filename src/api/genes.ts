import { request } from ".";
import { mygene } from ".";
import { Gene } from "@/api/types";
import { mapGene } from "@/api/types";

// search genes by keyword
export const search = async (
  query?: string,
  species?: string[]
): Promise<Gene[]> => {
  // params
  const params = new URLSearchParams();
  if (query) {
    query = ` ${query} `.split(/\s+/g).join("*"); // pseudo fuzzy search
    params.set("q", query);
  }
  if (species?.length) params.set("species", species.join(","));
  params.set("fields", "*");
  params.set("size", "100");
  params.set("always_list", "symbol,ensembl,uniprot");

  // request and parse results
  const url = mygene + "query?" + params.toString();
  try {
    // eslint-disable-next-line
    let { total = 0, hits = [] } = await request(url);
    if (hits.length) hits[0].total = total;
    hits = hits.map(mapGene);
    return hits;
  } catch (error) {
    console.error(error);
    return [];
  }
};