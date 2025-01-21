import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getDatafeedBack: build.query<IREVIEW.GetReviewRes, IREVIEW.GetReviewReq>({
      query: () => ({
        url: `/review/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getAboutMeBack: build.query<IREVIEW.GetMeRes, IREVIEW.GetMeReq>({
      query: () => ({
        url: `/about_me`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),

    getHeroData: build.query<IREVIEW.GetHeroRes, IREVIEW.GetHeroReg>({
      query: () => ({
        url: `/main_world/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getServiceData: build.query<
      IREVIEW.GetMyServiceRes,
      IREVIEW.GetMyServiceReq
    >({
      query: () => ({
        url: `/my_services/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getServiceId: build.query<IREVIEW.getServiceIdRes, IREVIEW.getServiceIdReq>(
      {
        query: (id) => ({
          url: `/services_detail/${id}`,
          method: `GET`,
        }),
        providesTags: ["data"],
      }
    ),
    getAllServices: build.query<
      IREVIEW.getServicesRes,
      IREVIEW.GetMyServiceReq
    >({
      query: () => ({
        url: `/services_list/`,
        method: "GET",
      }),
    }),
    getConsultationData: build.query<
      IREVIEW.GetConsultationRes,
      IREVIEW.GetConsultationReq
    >({
      query: () => ({
        url: `/consultation/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getAnswerData: build.query<IREVIEW.GetAnswerRes, IREVIEW.GetAnswerReq>({
      query: () => ({
        url: `/questions/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getFooterText: build.query<IREVIEW.getFooterRes, IREVIEW.getFooterReq>({
      query: () => ({
        url: `/safety/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getMyContact: build.query<IREVIEW.getMyContactRes, IREVIEW.getMyContactReq>(
      {
        query: () => ({
          url: `my_contact/`,
          method: "GET",
        }),
        providesTags: ["data"],
      }
    ),
    getPublicTextFoot: build.query<
      IREVIEW.getTextFooterRes,
      IREVIEW.getTextFooterReq
    >({
      query: () => ({
        url: `public_offer/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getPublicOffer: build.query<IREVIEW.getPublicRes, IREVIEW.getPublicReq>({
      query: () => ({
        url: `/public_offer_text/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
  }),
});

export const {
  useGetDatafeedBackQuery,
  useGetAboutMeBackQuery,
  useGetHeroDataQuery,
  useGetServiceDataQuery,
  useGetConsultationDataQuery,
  useGetAnswerDataQuery,
  useGetServiceIdQuery,
  useGetAllServicesQuery,
  useGetFooterTextQuery,
  useGetMyContactQuery,
  useGetPublicOfferQuery,
  useGetPublicTextFootQuery,
} = api;
