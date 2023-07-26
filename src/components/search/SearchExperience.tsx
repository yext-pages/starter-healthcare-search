// src/components/SearchExperience.tsx

import * as React from "react";
import {
  SearchBar
  } from "@yext/search-ui-react";

import {
  useSearchState
  } from "@yext/search-headless-react";

import UniversalSearch from "./UniversalSearch";
import VerticalNav from "./VerticalNav";
import FaqSearch from "../faqs/FaqSearch";
import LocationSearch from "../facilities/FacilitySearch";
import ProfessionalsSearch from "../professionals/ProfessionalSearch";
import ProductsSearch from "../jobs/JobSearch";
import ServicesSearch from "../services/ServicesSearch";

const SearchExperience = () => {
  //retrieves the current vertical key
  const currentVertical = useSearchState((state) => state.vertical.verticalKey) ?? "";

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar placeholder="Search"/>
          <VerticalNav />
          {currentVertical === "faqs" ? (<FaqSearch/>) :
          //comment out below to add a new vertical
           currentVertical === "healthcare_facilities" ? (<FacilitySearch/>) :
           currentVertical === "healthcare_professionals" ? (<ProfessionalSearch/>) :
           currentVertical === "jobs" ? (<JobSearch/>) :
           (<UniversalSearch />)}
        </div>
      </div>
  );
};

export default SearchExperience;