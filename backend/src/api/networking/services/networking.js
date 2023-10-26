'use strict';

/**
 * networking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::networking.networking');
