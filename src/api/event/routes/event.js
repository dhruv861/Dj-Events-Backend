"use strict";

/**
 * event router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::event.event");
const slugify = require("slugify");

// module.exports = {
//   lifecycles: {
//     beforeCreate: async (data) => {
//       if (data.title) {
//         data.slug = slugify(data.title);
//       }
//     },
//     beforeUpdate: async (params, data) => {
//       if (data.title) {
//         data.slug = slugify(data.title);
//       }
//     },
//   },
// };
