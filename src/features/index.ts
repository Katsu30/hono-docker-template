import { healthcheckTypeDefs } from "./healthcheck/healthcheckScheme.js";
import { healthcheckResolvers } from "./healthcheck/healthcheckResolver.js";

export const typeDefs = [healthcheckTypeDefs];

export const resolvers = {
  Query: {
    ...healthcheckResolvers.Query,
  },
};
