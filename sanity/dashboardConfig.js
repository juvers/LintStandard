export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Deploy Apps',
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610da2414e6ed70a132d7afd',
                  title: 'Sanity Studio',
                  name: 'openmaryland-cms',
                  apiId: 'cac08cd4-1f1d-4270-8ea9-6f16010ce42c',
                },
                {
                  buildHookId: '610da28f2175632cb96a056e',
                  title: 'Open Maryland',
                  name: 'openmaryland',
                  apiId: '0be770ef-e3ea-404d-8f58-d066e9e057c8',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hzdg/openmaryland',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://openmaryland.netlify.app/',
            category: 'apps',
          },
        ],
      },
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['page'],
      },
      layout: {width: 'medium'},
    },
  ],
};
