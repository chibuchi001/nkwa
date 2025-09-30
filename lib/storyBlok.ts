import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";


export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN!,
  use: [apiPlugin],
  apiOptions: {
    region: "eu" //or "eu" depending on your region
  },
});


