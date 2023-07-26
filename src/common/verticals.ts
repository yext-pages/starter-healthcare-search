interface Vertical {
    showInNav: boolean;
    label: string;
    key?: string;
    entityType?: string;
    limit?: number;
}

export const verticals: Vertical[]= [
    {
      //universal vertical
      showInNav: true,
      label: "All",
    },
    {
      showInNav: true,
      label: "FAQs",
      key: "faqs",
      entityType: "faq"

    },
    {
        showInNav: true,
        label: "Jobs",
        key: "jobs",
        entityType: "job"
      },
      {
        showInNav: true,
        label: "Healthcare Professionals",
        key: "healthcare_professionals",
        entityType: "healthcareProfessional"
      },
      {
        showInNav: true,
        label: "Healthcare Facilities",
        key: "healthcare_facilities",
        entityType: "healthcareFacility"
      }
]
