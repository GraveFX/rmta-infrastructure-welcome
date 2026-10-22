import { describe, expect, it } from "vitest";
import { enquiryMessage, serviceWhatsappUrl, whatsappUrl } from "./whatsapp";

describe("whatsapp", () => {
  it("uses the RMTA number", () => {
    expect(whatsappUrl()).toBe("https://wa.me/918900060001");
  });
  it("encodes service messages", () => {
    const url = serviceWhatsappUrl("civil");
    expect(url.startsWith("https://wa.me/918900060001?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toContain("Civil Engineering and Infrastructure");
  });
  it("includes form values in the enquiry", () => {
    const m = enquiryMessage({ name: "Asha", phone: "98300", service: "property", details: "Plot near station" });
    expect(m).toContain("Property Dealing");
    expect(m).toContain("Name: Asha");
    expect(m).not.toContain("Email:");
  });
});
