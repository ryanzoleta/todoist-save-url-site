# Save URL to Todoist

This is the repo for the main site of the browser extension of the same name](https://github.com/ryanarnold/todoist-save-url-extension). The primary purpose of this is to handle the Todoist API OAuth flow in addition to marketing.

Currently hosted at https://saveurltodoist.vercel.app/

## Development

The extension is written in Next.js.

To begin development, clone both this repo and the todoist-save-url-extension repo linked above.

1. To start modifying the code, clone the project then setup npm:

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

## Todoist API

You will need to setup your own integration app in https://developer.todoist.com/appconsole.html to interface with Todoist.

If you don't want to go the hassle, you can always inject your own personal API token (found in the app) and use that for testing.

## Database

The site repo uses [Vercel KV](https://vercel.com/docs/storage/vercel-kv) to store the Todoist API configs.
