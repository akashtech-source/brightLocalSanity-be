export default {
    name: "secondSection",
    title: "Second Section",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "quote",
            title: "Quote",
            type: "string",
        },
        {
            name: "position",
            title: "Position",
            type: "string",
        },
        {
            name: "company",
            title: "Company",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "userImage",
            title: "User Image",
            type: "image",
            options: {
                hotspot: true,
            },

        },
        {
            name: 'referenceList',
            title: 'references',
            type: 'array',
            of: [
              {
                type: 'image'
              },
              {
                title: 'URL',
                name: 'urlObject',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'urlField',
                    type: 'url'
                  }
                ]
              }
            ]
          },
    ],
}