import { createClient } from "agora-rtc-react";

export const intializeClient = (token) => {
  const useClient = createClient({
    mode: "rtc",
    codec: "vp8",
    appId: "08746a469e2c4067a3fc0d741ef8c05e",
    token: token,
  });
  return useClient;
};
