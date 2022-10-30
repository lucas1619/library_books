import { Api } from "../Api";

let libraryApi : any = null

export class LibraryApi extends Api {
  constructor() {
    if(!libraryApi) {
      super(process.env.LIBRARY_API_BASE_URL || "http://localhost:3000");
      libraryApi = this;
    }
    return libraryApi
  }
}
