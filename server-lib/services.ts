import axios from "axios";

const {
  NEXT_PUBLIC_MUX_TOKEN_ID,
  NEXT_PUBLIC_MUX_TOKEN_SECRET,
  NEXT_PUBLIC_MUX_API_HOST = "api.mux.com",
} = process.env;

const muxOptions = {
  auth: { username: NEXT_PUBLIC_MUX_TOKEN_ID ?? "", password: NEXT_PUBLIC_MUX_TOKEN_SECRET ?? "" },
  baseURL: `https://${NEXT_PUBLIC_MUX_API_HOST}`,
};

const muxClient = axios.create(muxOptions);

export { muxClient };
