"use strict";

/**
 * A set of functions called "actions" for `hello`
 */

module.exports = {
  async index(ctx, next) {
    const entries = await strapi.db.query("api::demo.demo").findMany({
      select: ["text"],
      where: { text: "hello 1" },
      orderBy: { publishedAt: "DESC" },
    });
    ctx.body = entries;
  },
};
