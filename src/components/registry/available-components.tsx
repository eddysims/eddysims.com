import { Card, Cards } from "fumadocs-ui/components/card";

const COMPONENTS = [
  {
    name: "rating",
    title: "Rating",
    description:
      "A customizable rating component with interactive hover states",
  },
];

export function AvailableComponents() {
  return (
    <div>
      <Cards className="grid-cols-3">
        {COMPONENTS.map((item) => (
          <Card
            key={item.name}
            title={item.title}
            href={`/registry/components/${item.name}`}
            description={item.description}
          />
        ))}
      </Cards>
    </div>
  );
}
