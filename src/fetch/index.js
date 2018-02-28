import Http from '../util/http'

let HomeModel = {

    getEntriesData() {
      return new Promise((resolve) => {
        Http.get('/api/home/entries').then((res) => {
          resolve(res);
        });
      })
    }
  
  };
  export default HomeModel;