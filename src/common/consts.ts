import { UniversalLimit } from "@yext/search-headless-react";

//Replace with Your Yext Business ID
export const businessId = 4063775;
//Replace with Your Search Experience API Key
export const apiKey = "5278c0f4725d456663485e25f743f276";
//Replace with Your Search Experience experience key
export const experienceKey = "find-a-doc-search";
//Replace with Your Search Experience locale
export const locale = "en";
//Replace with Your Search Experience versopm
export const experienceVersion = "PRODUCTION";

export const additionalQueryParams: any = {
      "source": "find-a-doc-search"
    };

//set universal result limits for each vertical
export const UNIVERSAL_LIMITS: UniversalLimit = {
  faqs: 5,
  healthcare_professionals: 5,
  healthcare_facilities: 5,
  jobs: 5,
  //add additional vertical limits for universal search below, make sure to assign the correct vertical key
  // vertical2: 5,
  // vertical3: 5
}
