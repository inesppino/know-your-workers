import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Card,
  CardHeader,
  CardBody,
  Select,
  UnorderedList,
  ListItem,
  Text,
  Textarea,
  Heading,
  Divider,
} from "@chakra-ui/react";
import MultiSelectTags from "./components/MultiSelectTags";

const worker = {
  name: "Inés",
  lastName: "Pedraza",
  area: "Dev",
  seniority: "Mid",
  active_projects: ["SO69"],
  past_projects: ["PTY_Betonline", "Flexicar", "GMV_HSP"],
  status: "OK",
  interests: ["videogames"],
  preferences: { workingAlone: false },
  hard_skills: {
    react: "midLevel",
    nodejs: "basicLevel",
    angular: "basicLevel",
  },
  soft_skills: { english: "proLevel", teamSpirit: "high" },
  internal_notes: ["Llora mucho pero se la quiere"],
  history: ["Psicologa y RRHH", "Viene de consultora con Angular"],
};

const hardSkills = [
  { react: ["junior", "juniorpro", "mid", "midpro", "senior", "seniorpro"] },
  { nodejs: ["junior", "juniorpro", "mid", "midpro", "senior", "seniorpro"] },
  { angular: ["junior", "juniorpro", "mid", "midpro", "senior", "seniorpro"] },
];

const softSkills = [
  { english: ["low", "mid", "pro"] },
  { teamWork: ["low", "mid", "pro"] },
  { client: ["low", "mid", "pro"] },
];

export default function WorkerDetail() {
  const {
    name,
    lastName,
    area,
    seniority,
    status,
    active_projects,
    past_projects,
    interests,
    preferences,
    hard_skills,
    soft_skills,
    internal_notes,
    history,
  } = worker;
  return (
    <Card>
      <CardHeader display="flex" gap={1} alignItems="baseline">
        <Heading size="md">
          {name} {lastName}
        </Heading>
        <Box as="span">{status}</Box>
      </CardHeader>

      <CardBody display="flex" flexDirection="column" gap={8}>
        <Box display="flex">
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" defaultValue={name} />
          </FormControl>
          <FormControl>
            <FormLabel>Apellido</FormLabel>
            <Input type="text" defaultValue={lastName} />
          </FormControl>
          <FormControl>
            <FormLabel>Estado</FormLabel>
            <Select>
              <option>Ok</option>
              <option>NotOk</option>
            </Select>
          </FormControl>
        </Box>

        <Box display="flex">
          <FormControl>
            <FormLabel>Disciplina</FormLabel>
            <Input type="text" defaultValue={area} />
          </FormControl>
          <FormControl>
            <FormLabel>Seniority</FormLabel>
            <Input type="text" defaultValue={seniority} />
          </FormControl>
        </Box>

        <Divider />

        <Box display="flex" gap={4}>
          <MultiSelectTags
            label="Proyectos activos"
            idLabel="activeProjects"
            options={active_projects}
          />
          <MultiSelectTags
            label="Proyectos pasados"
            idLabel="pastProjects"
            options={past_projects}
          />
        </Box>

        <Divider />

        <Box display="flex" gap={4}>
          <Box flexGrow={1}>
            <Text>Habilidades técnicas</Text>
            {hardSkills.map((hardSkill) => {
              const skill = Object.keys(hardSkill)[0];
              const levels = hardSkill[skill];
              return (
                <FormControl key={skill}>
                  <FormLabel>{skill}</FormLabel>
                  <Select>
                    {levels.map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                  </Select>
                </FormControl>
              );
            })}
          </Box>

          <Box flexGrow={1}>
            <Text>Habilidades no-técnicas</Text>
            {softSkills.map((softSkill) => {
              const skill = Object.keys(softSkill)[0];
              const levels = softSkill[skill];
              return (
                <FormControl key={skill}>
                  <FormLabel>{skill}</FormLabel>
                  <Select>
                    {levels.map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                  </Select>
                </FormControl>
              );
            })}
          </Box>
        </Box>

        <Divider />

        <Box display="flex">
          <FormControl>
            <FormLabel>Intereses</FormLabel>
            {/* <Input type="text"> */}
            <UnorderedList>
              {interests.map((interest) => (
                <ListItem textAlign="justify" key={interest}>
                  {interest}
                </ListItem>
              ))}
            </UnorderedList>
            {/* </Input> */}
          </FormControl>
          <FormControl>
            <FormLabel>Preferencias</FormLabel>
            {/* <Input type="text"> */}
            <UnorderedList>
              {Object.keys(preferences).map((preference) => (
                <ListItem textAlign="justify" key={preference}>
                  {preference} : {preferences[preference].toString()}
                </ListItem>
              ))}
            </UnorderedList>
            {/* </Input> */}
          </FormControl>
        </Box>

        <Divider />

        <FormControl>
          <FormLabel>Notas</FormLabel>
          <Textarea placeholder="Here is a sample placeholder" />
        </FormControl>

        <Divider />

        <FormControl>
          <FormLabel>Historia</FormLabel>
          <UnorderedList>
            {history.map((story) => (
              <ListItem textAlign="justify" key={story}>
                {story}
              </ListItem>
            ))}
          </UnorderedList>
        </FormControl>
      </CardBody>
    </Card>
  );
}
