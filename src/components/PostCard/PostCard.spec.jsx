/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.cover
    );

    expect(
      screen.getByRole("heading", { name: "title1 1" })
    ).toBeInTheDocument();

    expect(screen.getByText("body1")).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
