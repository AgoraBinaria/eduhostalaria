const mongo = require('../tools/mongo.service');
const slugger = require('slug');

const col = 'organizations';

module.exports.getAll = async () => mongo.find(col, {}, { name: 1 });
module.exports.getById = async organizationId => mongo.findOneById(col, organizationId);
module.exports.getBySlug = async slug => mongo.findOne(col, { slug });
module.exports.deleteById = async organizationId => mongo.removeOne(col, organizationId);
module.exports.getUsersByIdRole = async (organizationId, role) => mongo.find('users', { organizationId, roles: role, status: { $ne: 'DISABLED' } });
module.exports.getCount = async () => mongo.count(col, {});
module.exports.insertOrganization = async (organization) => {
  organization.slug = slugger(organization.name.toLowerCase());
  return mongo.insertOne(col, organization);
};
module.exports.updateOrganization = async (organization) => {
  organization.slug = slugger(organization.name.toLowerCase());
  return mongo.updateOne(col, organization._id, organization);
};
exports.addFiles = async (organizationId, fileUrl) => {
  const organization = await this.getById(organizationId);
  organization.banner = fileUrl;
  const result = await this.updateOrganization(organization);
  return result;
};
