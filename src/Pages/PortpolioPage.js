import { PortpolioCard } from "../Components/PortpolioCard";

function PortpolioPage() {
  return (
    <>
      <div className="Portpolio-Main-Container">
        <div className="Portpolio-Title">Portpolio</div>
        <div className="Portpolio-Items">
          <PortpolioCard />
        </div>
      </div>
    </>
  );
}

export { PortpolioPage };
