import axios from "axios";

export default class Service {
  static async pushLink(link) {
    let response = await axios.post(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    return response;
  }
}
