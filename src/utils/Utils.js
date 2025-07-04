import { Constants } from "../utils";

class Utils {
  get_image_url(img, path) {
    return Constants.domain_url + path + img;
  }
}
export default new Utils();
