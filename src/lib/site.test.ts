import { describe, expect, it } from "vitest";
import { ADDRESS_LINE, REGISTERED_ADDRESS_LINE } from "./site";

describe("company addresses", () => {
  it("shows the registered office address as supplied by RMTA", () => {
    expect(REGISTERED_ADDRESS_LINE).toBe("19, Bowbazar West lane, Krishnanagar-I, Nadia, West Bengal 741101");
  });

  it("keeps the existing office address unchanged", () => {
    expect(ADDRESS_LINE).toBe("56, MM Ghosh St, Krishnanagar, Nadia, West Bengal 741101");
  });
});
