<p align="center">
  <img src="https://rently-web-case.pages.dev/meta-image.jpg" alt="Astro logo">
  <br/><br/>
  This is a working prototype for an online platform that facilitates the property-renting process as part of a take-home web case for Rently.
  <br/><br/>
</p>

## Technical Stack

As per the stated requirements, the following technical stack is used:

- Vue 3 (utilises Composition API)
- Nuxt 3 as a metaframework (utilises SSR)
- Tailwind for styling

The prototype is then deployed on Cloudflare Pages (via Pages Functions) at https://rently-web-case.pages.dev/

## User Journey

This is a simple user journey to verify that the prototype meets all the stated requirements in the assignment:

1. Visit https://rently-web-case.pages.dev/
2. Choose a property listing from the list and navigate to the Property page
3. Click on 'Edit' in top-right corner and navigate to Edit page
4. Make edits to property listing (limited only to adding, editing and removal of inventory items, other listing info cannot be edited since it is out of scope) and then click on 'Preview edits' button in top-right corner, thereafter navigating to Preview page
5. Check that Preview page contains edits that were made and click on 'Approve edits' button in top-right corner, thereafter navigating back to Property page

Other things to verify:

1. Prototype is fully responsive across screen sizes
2. Actual data is not mutated before 'Approve edits'
3. Image upload (only the UI aspect works since no persistent storage is required, refer to notes below)

## Notes

- Since the JD asks for a "design-focused" frontend developer, I have made numerous design inputs to showcase these design skills. Such inputs include a fully-custom user interface for the prototype, design primitives such as fonts and colors and a redesign of the Rently logo.
- Some parts of the UI have been implemented for visual completeness but do not have any functionality attached to it since they are out of scope (such as Search, links in the Navbar to other pages, Map, etc.).
- Since the use of a database is not mandatory, data is mocked and stored locally (as a global reactive variable) — this means that data is ultimately not persisted and a hard refresh of the page will reset it to the initial data state. I did consider using a local persistent database (such as sqlite as suggested) but considered against it since a client-only database 1. defeats the purpose of an SSR application (that fetches data before it even reaches the client) and 2. leads to numerous hydration errors that distracts away from the task.
- Similarly, persistent storage (for images) is not used and images are stored locally. Therefore, while the UI for image uploads work, no actual image uploading to a persistent storage is taking place.

## Running Project Locally

If you would like to clone and run the project locally:

```bash
# npm
npm install
npm run dev

# pnpm
pnpm install
pnpm run dev
```
