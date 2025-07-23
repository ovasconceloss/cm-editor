import { useState } from "react";
import Menu from "./components/menubar";
import EntitiesPanel from "./components/entities";
import EntitiesPanelData from "./components/entitiesData";
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable";

function Home() {
  const [isSelected, setIsSelected] = useState<string>("teams");

  return (
    <div className="select-none">
      <Menu />
      <ResizablePanelGroup direction="horizontal">
        <EntitiesPanel isSelected={isSelected} setIsSelected={setIsSelected} />
        <ResizableHandle withHandle />
        <EntitiesPanelData isSelected={isSelected} />
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;