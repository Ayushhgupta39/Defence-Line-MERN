'use strict';

/**
 * networking router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::networking.networking');
