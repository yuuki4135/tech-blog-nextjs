import * as React from "react";
import { Title } from "@/components/Title";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

describe("Topページ", () => {
  it("タイトルという文字があること", () => {
    render(<Title />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
