import { useLanguageStore } from "@/store/useLanguageStore";
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const dynamicBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const language = useLanguageStore.getState().language;

  const baseUrl = `${process.env.NEXT_PUBLIC_URL}/${language}`;

  const fetchBaseQueryWithLanguage = fetchBaseQuery({ baseUrl });

  return fetchBaseQueryWithLanguage(args, api, extraOptions);
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: dynamicBaseQuery,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["data"],
  endpoints: () => ({}),
});
