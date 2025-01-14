import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { registerAll } from "@plasmicpkgs/commerce";
import { registerCommerceProvider as registerBigCommerce } from "@/commerce/bigcommerce";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "4BfTJRqJo6tn489qekVg9r",  // ID of a project you are using
      token: "tsY3rGguLdsYn7LvhA70CNkyzEzdl8jp7ugRP0W1MEcTOM1nOXoWy2u5jTpl4JzDJTc3qWVp7H1OFnxbjwOwg"  // API token for that project
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
registerAll(PLASMIC);
registerBigCommerce(PLASMIC);
