import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PageBuilder from "@/components/PageBuilder";
import { PageBlock } from "@/types/content";

import "@testing-library/jest-dom";


// 🔹 Mock de los componentes de bloque
vi.mock("@/components/blocks/Hero", () => ({
  default: (props: { title?: string }) => (
    <div data-testid="hero">Hero Component {props.title}</div>
  ),
}));

vi.mock("@/components/blocks/About", () => ({
  default: (props: { title?: string }) => (
    <div data-testid="about">About Component {props.title}</div>
  ),
}));

vi.mock("@/components/blocks/Services", () => ({
  default: () => <div data-testid="services">Services Component</div>,
}));

vi.mock("@/components/blocks/Pricing", () => ({
  default: () => <div data-testid="pricing">Pricing Component</div>,
}));

vi.mock("@/components/blocks/Contact", () => ({
  default: () => <div data-testid="contact">Contact Component</div>,
}));

vi.mock("@/components/blocks/UnknownComponent", () => ({
  default: ({ type }: { type: string }) => (
    <div data-testid="unknown">Unknown: {type}</div>
  ),
}));

describe("PageBuilder", () => {
  it("- Renderiza correctamente componentes válidos según el type", () => {
    const blocks: PageBlock[] = [
      {
        type: "hero",
        props: {
          title: "Hero Title",
          subtitle: "Hero subtitle",
          backgroundImage: "/images/hero.jpg",
          button: { text: "Click", url: "/" },
        },
      },
      {
        type: "about",
        props: {
          title: "About Title",
          description: "About description",
          image: "/images/about.jpg",
        },
      },
      {
        type: "services",
        props: {
          title: "Services",
          services: [],
        },
      },
      {
        type: "pricing",
        props: {
          title: "Pricing",
          currency: "USD",
          plans: [],
        },
      },
      {
        type: "contact",
        props: {
          title: "Contact",
          address: "Bogotá",
          phone: "123",
          email: "test@test.com",
          form: { fields: [] },
        },
      },
    ];

    render(<PageBuilder blocks={blocks} />);

    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("services")).toBeInTheDocument();
    expect(screen.getByTestId("pricing")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  it("- Renderiza UnknownComponent cuando el type no existe en COMPONENTS_MAP", () => {
    const blocks: PageBlock[] = [
      {
        type: "slider",
        props: {},
      },
    ];

    render(<PageBuilder blocks={blocks} />);

    expect(screen.getByTestId("unknown")).toBeInTheDocument();
    expect(screen.getByText("Unknown: slider")).toBeInTheDocument();
  });

  it("- No rompe la aplicación ante un componente desconocido", () => {
    const blocks: PageBlock[] = [
      { type: "hero", props: {} },
      { type: "slider", props: {} },
      { type: "about", props: {} },
    ];

    expect(() => {
      render(<PageBuilder blocks={blocks} />);
    }).not.toThrow();
  });
});
