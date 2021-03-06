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
  if (query) params.set("q", query);
  if (species?.length) params.set("species", species.join(","));
  params.set("fields", "all");
  params.set("size", "100");
  params.set("scopes", "_id,alias,symbol,entrezgene,ensembl.gene,uniprot");
  params.set("always_list", "alias,symbol,ensembl,uniprot");

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

// format query to what api expects
const formatQuery = (query: string[]) =>
  query
    .map(search =>
      search
        // collapse whitespace
        .split(/\s/)
        .filter(word => word)
        // make dash case
        .join("-")
    )
    // remove blank search lines
    .filter(search => search)
    // comma separate searches
    .join(",");

// search genes by keyword
export const batchSearch = async (
  query?: string[],
  species?: string[]
): Promise<Gene[]> => {
  // params
  const params = new URLSearchParams();
  if (query?.length) params.set("q", formatQuery(query));
  if (species?.length) params.set("species", species.join(","));
  params.set("fields", "all");
  params.set("size", "100");
  params.set("scopes", "_id,alias,symbol,entrezgene,ensembl.gene,uniprot");
  params.set("always_list", "alias,symbol,ensembl,uniprot");

  // request and parse results
  const url = mygene + "query?" + params.toString();
  try {
    // eslint-disable-next-line
    let hits = await request(url, "POST");
    if (hits.length) hits[0].total = hits.length;
    hits = hits.map(mapGene).filter((hit: Gene) => !hit.notfound);
    return hits;
  } catch (error) {
    console.error(error);
    return [];
  }
};
