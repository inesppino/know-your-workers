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
  Flex,
} from "@chakra-ui/react";
import TagsInput from "./components/TagsInput";
import TagsInputWithInput from "./components/TagsInputWithInput";

const worker = {
  name: "Inés",
  lastName: "Pedraza",
  area: "dev",
  seniority: "Mid",
  activeProjects: [
    { id: "so69", value: "SO69", label: "Summer" },
    { id: "1", value: "1", label: "uno" },
  ],
  pastProjects: [
    { id: "ptyB", value: "ptyBetonline", label: "PTY Betonline" },
    { id: "flexicar", value: "flexicar", label: "Flexicar" },
    { id: "gmvHSP", value: "gmvHSP", label: "HSP" },
  ],
  status: "OK",
  interests: [{ id: "videogames", value: "videogames", label: "Videogames" }],
  preferences: { workingAlone: false },
  hardSkills: {
    react: "mid",
    nodejs: "junior",
    angular: "juniorpro",
  },
  softSkills: { english: "pro", teamWork: "pro", client: "low" },
  internalNotes: ["Llora mucho pero se la quiere"],
  history: ["Psicologa y RRHH", "Viene de consultora con Angular"],
};

const hardSkillsList = [
  { react: ["junior", "juniorpro", "mid", "midpro", "senior", "seniorpro"] },
  { nodejs: ["junior", "juniorpro", "mid", "midpro", "senior", "seniorpro"] },
  { angular: ["junior", "juniorpro", "mid", "midpro", "senior", "seniorpro"] },
];

const softSkillsList = [
  { english: ["low", "mid", "pro"] },
  { teamWork: ["low", "mid", "pro"] },
  { client: ["low", "mid", "pro"] },
];

const allActiveProjects = [
  { id: "so69", value: "SO69", label: "Summer" },
  { id: "1", value: "1", label: "uno" },
  { id: "2", value: "2", label: "dos" },
  { id: "3", value: "3", label: "tres" },
  { id: "4", value: "4", label: "cuatro" },
  { id: "5", value: "5", label: "cinco" },
  { id: "6", value: "6", label: "seis" },
  { id: "7", value: "7", label: "siete" },
];
const allPastProjects = [
  { id: "so69", value: "SO69", label: "Summer" },
  { id: "1", value: "1", label: "uno" },
  { id: "2", value: "2", label: "dos" },
  { id: "3", value: "3", label: "tres" },
  { id: "4", value: "4", label: "cuatro" },
  { id: "5", value: "5", label: "cinco" },
  { id: "6", value: "6", label: "seis" },
  { id: "7", value: "7", label: "siete" },
];

export default function WorkerDetail() {
  const {
    name,
    lastName,
    area,
    seniority,
    status,
    activeProjects,
    pastProjects,
    interests,
    preferences,
    hardSkills,
    softSkills,
    internalNotes,
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
        <Flex gap="4">
          <FormControl xs={12}>
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              defaultValue={name}
              onChange={(e) => console.log(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Apellido</FormLabel>
            <Input
              type="text"
              defaultValue={lastName}
              onChange={(e) => console.log(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="status">Estado</FormLabel>
            <Select id="status" value={status} onChange={(e) => console.log(e)}>
              <option value="ok">Ok</option>
              <option value="not">NotOk</option>
            </Select>
          </FormControl>
        </Flex>

        <Flex gap="4">
          <FormControl>
            <FormLabel htmlFor="area">Disciplina</FormLabel>
            <Select id="area" value={area} onChange={(e) => console.log(e)}>
              <option value="dev">Dev</option>
              <option value="maq">Maq</option>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="ges">Ges</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="seniority">Seniority</FormLabel>
            <Select
              id="seniority"
              value={seniority}
              onChange={(e) => console.log(e)}
            >
              <option value="dev">Junior</option>
              <option value="dev">Junior pro</option>
              <option value="maq">Mid</option>
              <option value="maq">Mid pro</option>
              <option value="maq">Senior</option>
              <option value="maq">Senior pro</option>
            </Select>
          </FormControl>
        </Flex>

        <Divider />

        <Box display="flex" gap={4}>
          <TagsInput
            tags={allActiveProjects}
            selectedTags={activeProjects}
            label="Proyectos activos"
            idLabel="activeProjects"
            onChange={(e) => console.log(e)}
          />
          <TagsInput
            tags={allPastProjects}
            selectedTags={pastProjects}
            label="Proyectos pasados"
            idLabel="pastProjects"
            onChange={(e) => console.log(e)}
          />
        </Box>

        <Divider />

        <Box display="flex" gap={4}>
          <Box flexGrow={1}>
            <Text>Habilidades técnicas</Text>
            {hardSkillsList.map((hardSkill) => {
              const skill = Object.keys(hardSkill)[0];
              const levels = hardSkill[skill];
              return (
                <FormControl key={skill}>
                  <FormLabel htmlFor={skill}>{skill}</FormLabel>
                  <Select
                    id={skill}
                    value={hardSkills[skill]}
                    onChange={(e) => console.log(e)}
                  >
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
            {softSkillsList.map((softSkill) => {
              const skill = Object.keys(softSkill)[0];
              const levels = softSkill[skill];
              return (
                <FormControl key={skill}>
                  <FormLabel htmlFor={skill}>{skill}</FormLabel>
                  <Select
                    id={skill}
                    value={softSkills[skill]}
                    onChange={(e) => console.log(e)}
                  >
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
          <TagsInputWithInput
            label="Intereses"
            idLabel="interests"
            tags={interests}
            suggestions={allPastProjects}
            onAddTag={console.log}
            onRemoveTag={console.log}
          />
          {/* <TagsInput
            label="Intereses"
            idLabel="interests"
            options={interests}
          /> */}

          {/* <FormControl>
            <FormLabel>Preferencias</FormLabel>
            <Input type="text">
            <UnorderedList>
              {Object.keys(preferences).map((preference) => (
                <ListItem textAlign="justify" key={preference}>
                  {preference} : {preferences[preference].toString()}
                </ListItem>
              ))}
            </UnorderedList>
            </Input>
          </FormControl> */}
        </Box>

        <Divider />

        <FormControl>
          {/* <FormLabel>Notas</FormLabel>
          <Textarea placeholder="Here is a sample placeholder" /> */}
        </FormControl>

        <Divider />

        {/* <FormControl>
          <FormLabel>Historia</FormLabel>
          <UnorderedList>
            {history.map((story) => (
              <ListItem textAlign="justify" key={story}>
                {story}
              </ListItem>
            ))}
          </UnorderedList>
        </FormControl> */}
      </CardBody>
    </Card>
  );
}
