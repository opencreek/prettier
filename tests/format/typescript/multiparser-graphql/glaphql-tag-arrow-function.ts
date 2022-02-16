export const createCompany = (): DocumentNode => gql`
mutation {
  createCompany(
    input: {
      name: "${name ?? `Test Company`}"
      externalIds: [${(externalIds ?? [])
              .map((it) => `"${it}"`)
              .join(",")}]
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
    businessUnit {
      id
    }
  }
}
`
