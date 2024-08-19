import { gql } from "@apollo/client";

export const GET_ABOUT_SECTION = gql`
  query GetAboutSection($id: String!) {
    aboutSection(id: $id) {
      title
      description {
        json
      }
    }
  }
`;

export const GET_ALL_EXPERIENCES = gql`
  query GetAllExperiences {
    entryCollection {
      items {
        ... on ContentType5ZfDOoOaq3729W3Bmjl942 {
          company
          position
          startDate
          endDate
          description
          logoImage {
            url
          }
        }
      }
    }
  }
`;

export const GET_ALL_EDUCATION_ENTRIES = gql`
  query GetAllEducationEntries {
    entryCollection(where: { contentTypeId: "3rRMygIyGs219YJGWIvrHP" }) {
      items {
        sys {
          id
        }
        ... on ContentType3rRMygIyGs219YJGWIvrHP {
          institution
          degree
          fieldOfStudy
          startDate
          endDate
          description
        }
      }
    }
  }
`;
