import { ISearchSummaryResponse } from './apiTypes';

export const mockQueryBookResponseData: ISearchSummaryResponse = {
  kind: 'books#volumes',
  totalItems: 597,
  items: [
    {
      kind: 'books#volume',
      id: 'XtA-DwAAQBAJ',
      etag: '/p9PP75F8LU',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/XtA-DwAAQBAJ',
      volumeInfo: {
        title: 'Hello!',
        authors: ['Dino Lingo'],
        publisher: 'Dino Lingo',
        readingModes: {
          text: true,
          image: true,
        },
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=XtA-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=XtA-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'iw',
        previewLink:
          'http://books.google.com/books?id=XtA-DwAAQBAJ&pg=PP4&dq=hello&hl=&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=XtA-DwAAQBAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello.html?hl=&id=XtA-DwAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello-sample-epub.acsm?id=XtA-DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello-sample-pdf.acsm?id=XtA-DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=XtA-DwAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Dino Lingo !\u003cb\u003eשלום\u003c/b\u003e טורו &quot;\u003cb\u003eHello\u003c/b\u003e, Toro.&quot; !\u003cb\u003eשלום\u003c/b\u003e גובי &quot;\u003cb\u003eHello\u003c/b\u003e, Goby.&quot;',
      },
    },
    {
      kind: 'books#volume',
      id: 'VunJCgAAQBAJ',
      etag: 'oaYiqIAsLug',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/VunJCgAAQBAJ',
      volumeInfo: {
        title: 'Hello, Startup',
        subtitle:
          "A Programmer's Guide to Building Products, Technologies, and Teams",
        authors: ['Yevgeniy Brikman'],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: '2015-10-21',
        description:
          'This book is the "Hello, World" tutorial for building products, technologies, and teams in a startup environment. It\'s based on the experiences of the author, Yevgeniy (Jim) Brikman, as well as interviews with programmers from some of the most successful startups of the last decade, including Google, Facebook, LinkedIn, Twitter, GitHub, Stripe, Instagram, AdMob, Pinterest, and many others. Hello, Startup is a practical, how-to guide that consists of three parts: Products, Technologies, and Teams. Although at its core, this is a book for programmers, by programmers, only Part II (Technologies) is significantly technical, while the rest should be accessible to technical and non-technical audiences alike. If you’re at all interested in startups—whether you’re a programmer at the beginning of your career, a seasoned developer bored with large company politics, or a manager looking to motivate your engineers—this book is for you.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781491910054',
          },
          {
            type: 'ISBN_10',
            identifier: '1491910054',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 599,
        printType: 'BOOK',
        categories: ['Business & Economics'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.1.0.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=VunJCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=VunJCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=VunJCgAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=2&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=VunJCgAAQBAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello_Startup.html?hl=&id=VunJCgAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=VunJCgAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'This book is the &quot;Hello, World&quot; tutorial for building products, technologies, and teams in a startup environment.',
      },
    },
    {
      kind: 'books#volume',
      id: 'MlcIDgAAQBAJ',
      etag: 'U6rc+XHvTwM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/MlcIDgAAQBAJ',
      volumeInfo: {
        title: 'Hello, Garden Bugs',
        subtitle: 'A High-Contrast Book',
        authors: ['duopress labs'],
        publisher: 'duopress',
        publishedDate: '2017-03-14',
        description:
          'Ladybugs, snails, and butterflies! Oh my! This charming introduction to ten garden bugs, paired with friendly text and bold, basic patterns, provides a great high-contrast experience for young developing eyes. Newborns cannot fully recognize colors, so the sharp contrast between black and white patterns and illustrations allows babies to follow along and make connections to the real world, an important building block for communication skills. Using simple greetings like “Hello, bumblebee" and “Good to see you, dragonfly” alongside black-and-white art by Julissa Mora, Hello, Garden Bugs is the perfect board book for babies just beginning to look around and learn about their world. Featured in Omnivoracious. Also available: Hello, Baby Animals and Hello, Ocean Friends. Coming soon: Hello, My World.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781946064769',
          },
          {
            type: 'ISBN_10',
            identifier: '1946064769',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 11,
        printType: 'BOOK',
        categories: ['Juvenile Nonfiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.3.2.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=MlcIDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=MlcIDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=MlcIDgAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=MlcIDgAAQBAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello_Garden_Bugs.html?hl=&id=MlcIDgAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello_Garden_Bugs-sample-epub.acsm?id=MlcIDgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello_Garden_Bugs-sample-pdf.acsm?id=MlcIDgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=MlcIDgAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Using simple greetings like “Hello, bumblebee&quot; and “Good to see you, dragonfly” alongside black-and-white art by Julissa Mora, Hello, Garden Bugs is the perfect board book for babies just beginning to look around and learn about their ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'UCVSqy5a1m4C',
      etag: 'kDvju8uuyqA',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/UCVSqy5a1m4C',
      volumeInfo: {
        title: 'Hello Sunshine',
        authors: ['Ryan Adams'],
        publisher: 'Akashic Books',
        publishedDate: '2009-12-01',
        description:
          'World-famous singer/songwriter Ryan Adams presents his second book of passionate, transcendent verse.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781933354958',
          },
          {
            type: 'ISBN_10',
            identifier: '193335495X',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 193,
        printType: 'BOOK',
        categories: ['Poetry'],
        averageRating: 4,
        ratingsCount: 2,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.1.1.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=UCVSqy5a1m4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=UCVSqy5a1m4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=UCVSqy5a1m4C&printsec=frontcover&dq=hello&hl=&cd=4&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=UCVSqy5a1m4C&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello_Sunshine.html?hl=&id=UCVSqy5a1m4C',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello_Sunshine-sample-epub.acsm?id=UCVSqy5a1m4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello_Sunshine-sample-pdf.acsm?id=UCVSqy5a1m4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=UCVSqy5a1m4C&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'World-famous singer/songwriter Ryan Adams presents his second book of passionate, transcendent verse.',
      },
    },
    {
      kind: 'books#volume',
      id: 'HK7BCQAAQBAJ',
      etag: 'MkJ/Y819XPk',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/HK7BCQAAQBAJ',
      volumeInfo: {
        title: 'Hello Life!',
        authors: ['Marcus Butler'],
        publisher: 'Simon and Schuster',
        publishedDate: '2015-11-10',
        description:
          'Popular British YouTube star Marcus Butler “speaks with both honesty and sincerity” (Booklist) in this irreverent memoir and big-brotherly advice book on how to be an almost-adult. For a twenty-three-year-old, Marcus Butler knows a lot about life—and not just from his own experiences, but from the millions of followers on YouTube who chat with him on his irreverent channel, known for its mix of hilarious sketches, light-hearted banter, and deeply empathetic take on serious issues. In this funny, colorful handbook, the warm and totally down-to-earth star shares his trademark big-brotherly advice for navigating the trickier aspects of modern living. Inside you’ll find Marcus’s thoughts on: -Being healthy—including his nutritious eating tips, favorite gym-free exercises, and butt-kicking hacks for getting in shape -Dating—from finding the courage to be yourself, to banishing first-date nerves, to rebooting a broken heart -Surviving life crises—such as his parents’ difficult divorce, the pain of watching a close friend spiral into anorexia and self-harm, and his regrets over giving in to bullies and giving up on a sport he loved -Getting the life you want—lessons for staying organized, handling pressure, thinking positively, and breaking world records! Part autobiography, part self-help guide, Hello Life! is a candid and playful look inside Marcus Butler’s life—the failures, the successes, and the lessons he’s learned along the way.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781501129995',
          },
          {
            type: 'ISBN_10',
            identifier: '1501129996',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 256,
        printType: 'BOOK',
        categories: ['Biography & Autobiography'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.5.6.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=HK7BCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=HK7BCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=HK7BCQAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=5&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=HK7BCQAAQBAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello_Life.html?hl=&id=HK7BCQAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello_Life-sample-epub.acsm?id=HK7BCQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=HK7BCQAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'In this funny, colorful handbook, the warm and totally down-to-earth star shares his trademark big-brotherly advice for navigating the trickier aspects of modern living.',
      },
    },
    {
      kind: 'books#volume',
      id: 'RcNGr8LYj9sC',
      etag: 'QbOIMBnuLT4',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/RcNGr8LYj9sC',
      volumeInfo: {
        title: 'Life is Goodbye, Life is Hello',
        subtitle: 'Grieving Well Through All Kinds of Loss',
        authors: ['Alla Renee Bozarth'],
        publisher: 'Hazelden Publishing',
        publishedDate: '1994-04-19',
        description: 'Life Is Goodbye Life Is Hello',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '1568380577',
          },
          {
            type: 'ISBN_13',
            identifier: '9781568380575',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 260,
        printType: 'BOOK',
        categories: ['Self-Help'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.3.3.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=RcNGr8LYj9sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=RcNGr8LYj9sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=RcNGr8LYj9sC&printsec=frontcover&dq=hello&hl=&cd=6&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=RcNGr8LYj9sC&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Life_is_Goodbye_Life_is_Hello.html?hl=&id=RcNGr8LYj9sC',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Life_is_Goodbye_Life_is_Hello-sample-pdf.acsm?id=RcNGr8LYj9sC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=RcNGr8LYj9sC&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: 'Life Is Goodbye Life Is Hello',
      },
    },
    {
      kind: 'books#volume',
      id: 'WT-GngEACAAJ',
      etag: '4ZivBhijQ0g',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/WT-GngEACAAJ',
      volumeInfo: {
        title: 'Hello Kitty: Delicious!',
        authors: ['Jorge Monlongo'],
        publisher: 'Perfect Square',
        publishedDate: '2014-01-07',
        description:
          'The Hello Kitty brand touches every part of a girl’s life with on-trend product, and touches every part of popular culture—from fashion to celebrity to art. It is a true lifestyle brand. VIZ Media’s wordless comic series is the first of its kind. Hello Kitty and her friends are off on adventures near and far! Hello Kitty has a sweet tooth, and there’s no telling where it will take her! Special guest! Stephanie Buscema Art by Jacob Chabot, Jorge Monlongo, Ian McGinty, Stephanie Buscema Reads L to R (Western Style) for all ages.',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '1421558793',
          },
          {
            type: 'ISBN_13',
            identifier: '9781421558790',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 64,
        printType: 'BOOK',
        categories: ['Juvenile Fiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=WT-GngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=WT-GngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=WT-GngEACAAJ&dq=hello&hl=&cd=7&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=WT-GngEACAAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello_Kitty_Delicious.html?hl=&id=WT-GngEACAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=WT-GngEACAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'And Hello Kitty makes a new friend with a HUGE appetite! Save room for dessert! Stephanie Buscema has prepared some delectable delights! Art by Jacob Chabot, Jorge Monlongo, Ian McGinty, Stephanie Buscema',
      },
    },
    {
      kind: 'books#volume',
      id: 'CiI-SgAACAAJ',
      etag: 'Vasl7NPERr4',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/CiI-SgAACAAJ',
      volumeInfo: {
        title: 'When Hello Means Goodbye',
        subtitle:
          'A Guide for Parents Whose Child Dies Before Birth, at Birth Or Shortly After Birth',
        authors: ['Pat Schwiebert', 'Paul Kirk'],
        publishedDate: '1985',
        description:
          "When Hello Means Goodbye is a sensitive booklet written to help families during the early days of their grief. It helps answer questions and prepare parents for the days ahead. It can be given to parents at the first acknowledgment of their baby's death to help them best use the short time they'll have with their little one. Among topics covered are: collecting keepsakes; ways to celebrate the birth and death of a baby; reasons for seeing, holding and naming a dead baby; emotions common to bereaved parents; information about autopsies; where to find help; and the unique situations of fathers, siblings, and grandparents. Contains beautiful poetry.",
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0961519703',
          },
          {
            type: 'ISBN_13',
            identifier: '9780961519704',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 48,
        printType: 'BOOK',
        categories: ['Family & Relationships'],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=CiI-SgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=CiI-SgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=CiI-SgAACAAJ&dq=hello&hl=&cd=8&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=CiI-SgAACAAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/When_Hello_Means_Goodbye.html?hl=&id=CiI-SgAACAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=CiI-SgAACAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'When Hello Means Goodbye is a sensitive booklet written to help families during the early days of their grief.',
      },
    },
    {
      kind: 'books#volume',
      id: 'Tv5OEAAAQBAJ',
      etag: 'QvvIhxkbkGo',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/Tv5OEAAAQBAJ',
      volumeInfo: {
        title: 'Hello World!',
        subtitle: 'A high-contrast book for babies',
        authors: ['Amelia Hepworth'],
        publisher: 'Tiger Tales',
        publishedDate: '2022-01-25',
        description:
          "Babies can see black-and-white images from birth, and this captivating series has been specially designed to delight even the youngest readers. Babies will love to experience the appealing, high-contrast black-and-white images in this engaging board book. With a tactile die-cut cover and super-bright fluorescent inks on every page, which feature simple black-and-white illustrations, this series has been specially designed to capture your little one's attention. Babies will meet a host of friendly, familiar characters, such as the sun smiling and saying hello, a cheerful flower, a happy bee, a sleepy ladybug, and more fun creatures and sounds. Happy Baby introduces adorable baby animals and other happy friends with engaging black-and-white board books! Each page features minimal text and a black-and-white, high-contrast picture with a bright burst of color.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781664350106',
          },
          {
            type: 'ISBN_10',
            identifier: '1664350101',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 12,
        printType: 'BOOK',
        categories: ['Juvenile Fiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.3.1.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=Tv5OEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=Tv5OEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=Tv5OEAAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=9&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=Tv5OEAAAQBAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello_World.html?hl=&id=Tv5OEAAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello_World-sample-pdf.acsm?id=Tv5OEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=Tv5OEAAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Babies can see black-and-white images from birth, and this captivating series has been specially designed to delight even the youngest readers.',
      },
    },
    {
      kind: 'books#volume',
      id: 'W6udDAAAQBAJ',
      etag: 'Nv1rBw2bV5Q',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/W6udDAAAQBAJ',
      volumeInfo: {
        title: 'Hello, My Name Is Ice Cream',
        subtitle: 'The Art and Science of the Scoop: A Cookbook',
        authors: ['Dana Cree'],
        publisher: 'Clarkson Potter',
        publishedDate: '2017-03-28',
        description:
          "With more than 100 recipes for ice cream flavors and revolutionary mix-ins from a James Beard-nominated pastry chef, Hello, My Name is Ice Cream explains not only how to make amazing ice cream, but also the science behind the recipes so you can understand ice cream like a pro. Hello, My Name is Ice Cream is a combination of three books every ice cream lover needs to make delicious blends: 1) an approchable, quick-start manual to making your own ice cream, 2) a guide to help you think about how flavors work together, and 3) a dive into the science of ice cream with explanations of how it forms, how air and sugars affect texture and flavor, and how you can manipulate all of these factors to create the ice cream of your dreams. The recipes begin with the basics—super chocolately chocolate and Tahitian vanilla—then evolve into more adventurous infusions, custards, sherbets, and frozen yogurt styles. And then there are the mix-ins, simple treats elevated by Cree's pastry chef mind, including chocolate chips designed to melt on contact once you bite them and brownie bits that crunch.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780451495389',
          },
          {
            type: 'ISBN_10',
            identifier: '0451495381',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 240,
        printType: 'BOOK',
        categories: ['Cooking'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.5.3.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=W6udDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=W6udDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=W6udDAAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=10&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=W6udDAAAQBAJ&dq=hello&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hello_My_Name_Is_Ice_Cream.html?hl=&id=W6udDAAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Hello_My_Name_Is_Ice_Cream-sample-epub.acsm?id=W6udDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=W6udDAAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Hello, My Name is Ice Cream is a combination of three books every ice cream lover needs to make delicious blends: 1) an approchable, quick-start manual to making your own ice cream, 2) a guide to help you think about how flavors work ...',
      },
    },
  ],
};
