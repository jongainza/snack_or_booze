import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const snacks = await axios.get(`${BASE_API_URL}/snacks`);
    const drinks = await axios.get(`${BASE_API_URL}/drinks`);
    return { snacks: snacks.data, drinks: drinks.data };
  }

  static async addItem(type, item) {
    const res = await axios.post(`${BASE_API_URL}/${type}`, item);
    if (res.status === 200) return true;
    return false;
  }
}

export default SnackOrBoozeApi;
