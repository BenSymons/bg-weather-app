import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("Forecast Summaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: "Stub description1",
        icon: 800,
        temperature: {
          min: 12,
          max: 22,
        },
      },
      {
        date: 2222222,
        description: "Stub description2",
        icon: 602,
        temperature: {
          min: 24,
          max: 13,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  test("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  xtest("renders correct number of ForecastSummary instances", () => {
    console.log(validProps)
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
