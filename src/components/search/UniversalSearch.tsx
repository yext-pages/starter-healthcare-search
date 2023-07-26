// src/components/UniversalSearch.tsx

import * as React from "react";
import {
  UniversalResults,
  SpellCheck,
  StandardCard
  } from "@yext/search-ui-react";

import { useSearchActions, useSearchState} from "@yext/search-headless-react";
import { UNIVERSAL_LIMITS } from "../../common/consts";
import FaqCard from "../faqs/FaqCard";
import ProfessionalCard from "../professionals/ProfessionalCard";
import FacilityCard from "../facilities/FacilityCard";
import JobCard from "../jobs/JobCard";

const UniversalSearch = () => {
  const searchActions = useSearchActions();
  searchActions.setUniversalLimit(UNIVERSAL_LIMITS);

  const mostRecentSearch = useSearchState(
    (state) => state.query.mostRecentSearch
    );
    const universalResultsCount = useSearchState((state) => state.universal.verticals?.length);

  return (
      <div className="universal-search py-4">
          <div className="spell-check">
            <SpellCheck/>
          </div>
            <UniversalResults
              verticalConfigMap={{
                  faqs: {
                      label: "FAQs",
                      CardComponent: FaqCard
                  },
                  healthcare_professionals: {
                    label: "Professionals",
                    CardComponent: ProfessionalCard
                },
                  healthcare_facilities: {
                    label: "Facilities",
                    CardComponent: FacilityCard
                },
              jobs: {
                label: "Jobs",
                CardComponent: JobCard
            },
              }}/>
          {mostRecentSearch && universalResultsCount === 0 && (
            <div>
              {/* provide a no results message for searches that return no results  */}
              <p>
                The search
                <span className="mx-1 font-semibold">{mostRecentSearch}</span>
                did not match any results.
              </p>
            </div>
          )}
      </div>
  );
};

export default UniversalSearch;