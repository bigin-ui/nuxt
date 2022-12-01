import { jwt_decode } from "jwt-decode-es";

export default defineEventHandler((event) => {
  const token = getCookie(event, "access_token");
  const { exp } = jwt_decode(token!);
  return `${new Date().toUTCString()}: Hello ${exp} from api!`;
});
