import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "500",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  test("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correct values for props", () => {
    const { getByText } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass("forecast-summary__description");
    
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
