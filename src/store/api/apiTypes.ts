export interface ISearchSummaryResponse {
  kind: string;
  totalItems: number;
  items: IBookResult[];
}

export interface IBookResult {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers?: IIndustryIdentifier[];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount?: number;
    printType: string;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary?: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: IFileTypeData;
    pdf: IFileTypeData;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
}

interface IIndustryIdentifier {
  type: string;
  identifier: string;
}

interface IFileTypeData {
  isAvailable: boolean;
  acsTokenLink?: string;
}
