export const explorer = {
    id: '1',
    name: 'root',
    isFolder: true,
    items: [
      {
        id: '2',
        name: 'public',
        isFolder: true,
        items: [
          { id: '4', name: 'index.html', isFolder: false, items: [] },
          { id: '5', name: 'hello.html', isFolder: false, items: [] },
        ],
      },
      {
        id: '3',
        name: 'src',
        isFolder: true,
        items: [
          { id: '6', name: 'app.js', isFolder: false, items: [] },
          { id: '7', name: 'styles.css', isFolder: false, items: [] },
          {
            id: '8',
            name: 'components',
            isFolder: true,
            items: [
              { id: '9', name: 'Header.js', isFolder: false, items: [] },
              { id: '10', name: 'Footer.js', isFolder: false, items: [] },
            ],
          },
        ],
      },
      { id: '11', name: 'README.md', isFolder: false, items: [] },
    ],
  };
  