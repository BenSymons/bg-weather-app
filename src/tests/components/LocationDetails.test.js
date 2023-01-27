import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";
import ForecastSummary from "../../components/ForecastSummary";

describe("LocationDetails", () => {
  test("renders correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
