import { defineStore } from "pinia";

interface Gist {
  id: string;
  description: string;
  files: {
    [key: string]: {
      filename: string;
      content: string;
      language: string;
    };
  };
  created_at: string;
}

export const useGistStore = defineStore("gist", {
  state: () => ({
    gists: [] as Gist[],
  }),

  actions: {
    addGist(gist: Gist) {
      this.gists.unshift(gist);
    },
  },
});
