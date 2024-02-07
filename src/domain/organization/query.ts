// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag';

export const QUERY_ORGANIZATION = gql`
  fragment organizationFields on Organization {
    adminUsers {
      ...userFields
    }
    affiliatedOrganizations
    atId
    classification
    createdTime
    dataSource
    dissolutionDate
    financialAdminUsers {
      ...userFields
    }
    foundingDate
    hasRegularUsers
    id
    isAffiliated
    lastModifiedTime
    name
    parentOrganization
    registrationAdminUsers {
      ...userFields
    }
    regularUsers {
      ...userFields
    }
    replacedBy
    subOrganizations
  }

  query Organization($id: ID!, $createPath: Any, $dissolved: Boolean) {
    organization(id: $id, dissolved: $dissolved)
      @rest(type: "Organization", pathBuilder: $createPath) {
      ...organizationFields
    }
  }

  query Organizations(
    $child: ID
    $createPath: Any
    $page: Int
    $pageSize: Int
    $dissolved: Boolean
    $text: String
  ) {
    organizations(
      child: $child
      page: $page
      pageSize: $pageSize
      dissolved: $dissolved
      text: $text
    ) @rest(type: "OrganizationsResponse", pathBuilder: $createPath) {
      meta {
        ...metaFields
      }
      data {
        ...organizationFields
      }
    }
  }
`;
