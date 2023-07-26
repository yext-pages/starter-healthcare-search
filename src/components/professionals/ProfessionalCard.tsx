// src/components/Card.tsx

import * as React from "react";
import { useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import { experienceKey, experienceVersion, businessId } from "../../common/consts";
import { useSearchState } from "@yext/search-headless-react";
import FinancialProfessional from "../../types/financial_professionals";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId
})

const ProfessionalsCard = ({
    result,
  }: CardProps<FinancialProfessional>) => {
    //pull in the relevant fields from your entity to display on the card
    const data: any = {
        name: result.rawData.name,
        headshot: result.rawData.headshot,
        landingPageUrl: result.rawData.landingPageUrl,
        address: result.rawData.address,
        mainPhone: result.rawData.mainPhone,
        languages: result.rawData.languages,
        interests: result.rawData.interests,
        job: result.rawData.fins_jobTitle,
        services: result.rawData.services,
        email: result.rawData.emails,
        cta1: result.rawData.fins_primaryCTA,
        cta2: result.rawData.fins_secondaryCTA,
        formattedPhone: `${result.rawData.mainPhone.substring(0, 2)} (${result.rawData.mainPhone.substring(2, 5)}) ${result.rawData.mainPhone.substring(5, 8)}-${result.rawData.mainPhone.substring(8)}`,

    }

    //replace below with the appropriate vertical key
    const verticalKey = 'financial_professionals'

    //analytics configuration for the card
    const queryId = useSearchState((state)=>state.query.queryId) || "";
    const fireClick = (id:string,label:string)=>{
        searchAnalytics.report({
            type: "CTA_CLICK",
            entityId: id,
            verticalKey: verticalKey,
            searcher: "VERTICAL",
            queryId: queryId,
            ctaLabel: label
        })
    };
    const fireTitle = (id:string)=> {
        searchAnalytics.report({
            type: "TITLE_CLICK",
            entityId: id,
            verticalKey: verticalKey,
            searcher: "VERTICAL",
            queryId: queryId,
        })
    }

    return (
      <div className="mb-4 w-auto justify-between rounded-lg border p-6 text-stone-900 shadow-sm overflow-hidden">
        <div className="body flex flex-col">
          <div className="w-full bg-neutral-100 h-32 rounded-full flex flex-row">
            <img
              className="w-32 h-32 border-4 border-white shadow-lg aspect-square"
              src={data.headshot?.url ?? 'https://www.delvinia.com/wp-content/uploads/2020/05/placeholder-headshot.png'}
            />
            <div className="ml-4 mr-10">
              <h1 className="text-2xl font-bold mb-2 text-blue-900" onClick ={() => fireTitle(result.id || "")}>{data.name}</h1>
              <h2 className="text-lg font-semibold mb-2 text-blue-900">{data.job}</h2>
              <div className="flex mb-1 justify-between space-x-10">
                <p className="min-w-fit">{data.address.line1}</p>
                <p className="ml-auto">{data.formattedPhone}</p>
              </div>
              <div className="flex mb-1 justify-between space-x-10">
                <p className="min-w-fit">{`${data.address.city}, ${data.address.region} ${data.address.postalCode}`}</p>
                <p className="ml-auto">{data.email}</p>
              </div>
            </div>
            <div className="cta-container flex flex-col ml-auto py-2 space-y-2 place-content-center">
                  {data.cta1?.label && (
                <a href={`${data.cta1.link}`} target = "_blank" rel="noreferrer">
                    <button className="cta1 bg-blue-900 text-white font-medium rounded-lg py-2 px-5 shadow mb-4 hover:bg-slate-600" onClick={() => fireClick(result.id || "", data.cta1.label)}>
                        {data.cta1.label}
                    </button>
                </a>)} 
            {data.cta2?.label && (
                <a href={`${data.cta2.link}`} target = "_blank" rel="noreferrer">
                    <button className="cta2 w-32 whitespace-nowrap bg-white text-blue-900 font-medium rounded-lg py-2 px-5 shadow hover:bg-slate-200" onClick={() => fireClick(result.id || "", data.cta2.label)}>
                        {data.cta2.label}
                    </button>
                </a>)} 
        </div>
      </div>
    </div>
  </div>
);
}    

    export default ProfessionalsCard;

