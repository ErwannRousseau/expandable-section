import ExpandableDemo from "./components/ExpandableDemo";
export function App() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <ExpandableDemo lineClamp={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur, libero nec ultricies tincidunt, nunc felis tincidunt
        turpis, vel tincidunt nunc ante sit amet elit. Nulla facilisi. Donec
        malesuada, libero nec ultricies tincidunt, nunc felis tincidunt turpis,
        vel tincidunt nunc ante sit amet elit. Nulla facilisi. Donec malesuada,
      </ExpandableDemo>
      <ExpandableDemo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur, libero nec ultricies tincidunt, nunc felis tincidunt
        turpis, vel tincidunt nunc ante sit amet elit. Nulla facilisi. Donec
        malesuada, libero nec ultricies tincidunt, nunc felis tincidunt turpis,
        vel tincidunt nunc ante sit amet elit. Nulla facilisi. Donec malesuada,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur, libero nec ultricies tincidunt, nunc felis tincidunt
        turpis, vel tincidunt nunc ante sit amet elit. Nulla facilisi. Donec
        malesuada, libero nec ultricies tincidunt, nunc felis tincidunt turpis,
        vel tincidunt nunc ante sit amet elit. Nulla facilisi. Donec malesuada,
      </ExpandableDemo>
    </div>
  );
}
