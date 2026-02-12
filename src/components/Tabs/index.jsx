import { Nav } from "react-bootstrap";

function Tabs({ tabs, activeId, onChange }) {
  return (
    <Nav
      variant="tabs"
      activeKey={activeId}
      onSelect={(key) => onChange(key)}

    >
      {tabs.map((tab) => (
        <Nav.Item key={tab.id}>
          <Nav.Link
            eventKey={tab.id}
          >
            {tab.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Tabs;
