export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbd142e321ef31088e43387',
                  title: 'Sanity Studio',
                  name: '360-js-studio',
                  apiId: '80aa4582-d2b1-4868-b759-e4a680ea51e8'
                },
                {
                  buildHookId: '5fbd142e5c23450f10c211d4',
                  title: 'Landing pages Website',
                  name: '360-js',
                  apiId: '9c98464a-45f9-4060-ab82-f21d0a562650'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hiboustein/360js',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://360-js.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
