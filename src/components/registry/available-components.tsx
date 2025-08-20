import { Card, Cards } from "fumadocs-ui/components/card";

import { items } from "../../../registry.json";

export function AvailableComponents() {
  const components = items.filter((item) => item.type === "registry:component");

  return (
    <div>
      <Cards className="grid-cols-3">
        {components.map((item) => (
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
