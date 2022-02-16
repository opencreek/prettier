export const createCompany = (): DocumentNode => gql`
mutation {
  createCompany(
    input: {
      address: {
        street: "Street 5"
        city: "Testcity"
        postalCode: "123456"
        country: DE
        extra: "Something extra"
      }
    }
  ) {
    id
  }
}
`
