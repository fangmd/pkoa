import getUniqueID from '../../src/utils/snowflake'

describe('utils/snowflake', () => {
  it('create uniqueID', () => {
    const id = getUniqueID()
    expect(id).not.toEqual(null)
  })
})
