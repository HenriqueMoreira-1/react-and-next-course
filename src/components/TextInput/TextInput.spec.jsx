import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from ".";

describe("<Posts />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="testando" />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("testando");
  });
  it("should call handle change function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    const typedValue = "o valor";
    userEvent.type(input, typedValue);
    expect(input.value).toBe(typedValue);
    expect(fn).toHaveBeenCalledTimes(typedValue.length);
  });
  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <TextInput handleChange={fn} searchValue="testando" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
