import Http from '../util/http'

let EleH5HomeModel = {

    getEntriesData() {
        console.log("getEntriesData")
      return new Promise((resolve) => {
        Http.get('/api/home/entries').then((res) => {
          resolve(res);
        });
      })
    }
  
  };
  export default EleH5HomeModel;