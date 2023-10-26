'use strict';

/**
 * managerment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::managerment.managerment');
