import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import PopOverActions from "./components/PopOverActions";

export default function WorkersTable() {
  const workers = [
    { name: "Inés", area: "Dev", projects: ["SO69"], status: "ok", id: 1 },
    {
      name: "Enrique",
      area: "Dev",
      projects: ["SO69", "Metrodora"],
      status: "ok",
      id: 2,
    },
  ];
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Disciplina</Th>
            <Th>Proyectos</Th>
            <Th>Estado</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {workers.map((worker) => (
            <Tr key={worker.id}>
              <Td>{worker.name}</Td>
              <Td>{worker.area}</Td>
              <Td>{worker.projects.join(", ")}</Td>
              <Td>{worker.status}</Td>
              <Td>
                <PopOverActions />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
