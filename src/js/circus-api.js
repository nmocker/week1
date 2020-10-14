class CircusApi {
    API_URL = "http://circuslabs.net:3000/data";
    getData(key) {
      console.log("getting data for key " + key);
  
      axios
        .get(`${this.API_URL}/${key}`)
        .then(this.handleSuccessfulReponse)
        .catch(this.handleError);
    }
    saveData(key, value) {
      console.log("saving some data: " + key + " = " + value);
  
      axios
        .post(`${this.API_URL}/${key}`, {
          type: "string",
          value: value,
        })
        .then(this.handleSuccessfulReponse)
        .catch(this.handleError);
    }
  
    handleSuccessfulReponse(response) {
      console.log("got a response!", response);
  
      const value = response.data;
  
      const evt = new CustomEvent("got-data", { detail: value });
      document.querySelector("body").dispatchEvent(evt);
    }
    handleError(error) {
      console.info("got an error!", error);
      const evt = new CustomEvent("got-error", { detail: error });
      document.querySelector("body").dispatchEvent(evt);
    }
  }
  