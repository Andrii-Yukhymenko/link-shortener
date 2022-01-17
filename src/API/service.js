import axios from "axios";

export default class Service {
  static async pushLink() {
    let response = await axios.get(
      "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"
    );
    return response;
  }
}
