import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import Age from "../components/Age";

describe("Test du composant Age", () => {
    test("Age without props", () => {
        render(<Age />);

        expect(screen.getByText("18").textContent).toContain("18");
        //expect(getByTestId("age_label").textContent).toContain("18");
    });

    it("Age with prop", () => {
        const { container } = render(<Age annees={33}/>);

        const ageElement = container.querySelector("#age_annees");
        expect(ageElement).not.toBeNull();

        expect(ageElement).toBeInTheDocument();
        expect(ageElement).toHaveTextContent("33");

        //expect(getByTestId("age_label").textContent).toContain("18");
    });
});
