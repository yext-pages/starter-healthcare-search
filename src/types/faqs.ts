export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface Fins_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Fins_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Faq {
	answer?: string,
	question?: string,
	// landingPageUrl?: string,
	// nudgeEnabled?: boolean,
	// primaryConversationContact?: any,
	slug?: string,
	// logo?: ComplexImage,
	// name: string,
	// c_answerTest?: any,
	// fins_faqCategory?: string[],
	// fins_primaryCTA?: Fins_primaryCTA,
	// fins_relatedLocations?: EntityReference[],
	// fins_relatedProducts?: EntityReference[],
	// fins_secondaryCTA?: Fins_secondaryCTA,
	// keywords?: string[],
	// id: string,
	// timezone?: any,
}
