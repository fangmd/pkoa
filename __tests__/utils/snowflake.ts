import getUniqueID from "../../src/utils/snowflake";

describe("utils/snowflake", () => {
  it("create uniqueID", async () => {
    const id = getUniqueID();
    console.log(id);
    expect(id).not.toEqual(null);
    // expect(response.type).toEqual("application/json");
    // expect(response.body.data).toEqual("ping");
  });
});
