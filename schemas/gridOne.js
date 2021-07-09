export default {
    name: "gridOne",
    title: "Grid One",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slogan",
            title: "Slogan",
            type: "string",
        },
        {
            name: "bullet1",
            title: "Bullet1",
            type: "string",
        },
        {
            name: "bullet2",
            title: "Bullet2",
            type: "string",
        },
        {
            name: "bullet3",
            title: "Bullet3",
            type: "string",
        },
        {
            name: "bullet4",
            title: "Bullet4",
            type: "string",
        },
        
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
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