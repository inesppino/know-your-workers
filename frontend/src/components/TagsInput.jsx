import { useState } from "react";
import PropTypes from "prop-types";
import {
  Tag,
  TagLabel,
  TagCloseButton,
  VStack,
  Flex,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

TagsInput.propTypes = {
  tags: PropTypes.array.isRequired,
  selectedTags: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  idLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function TagsInput({ tags, selectedTags, label, idLabel, onChange }) {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleTagClose = (tag) => {
    const updatedTags = selectedTags.filter((t) => t.value !== tag.value);
    onChange(updatedTags);
  };

  return (
    <Flex flexGrow={1}>
      <FormControl id={idLabel} w="60">
        <FormLabel>{label}</FormLabel>
        <VStack spacing={2} align="stretch">
          {selectedTags.map((tag) => (
            <Tag
              key={`${tag.id}-${tag.value}`}
              size="sm"
              onClick={() => handleTagClick(tag)}
              cursor="pointer"
            >
              <TagLabel>{tag.label}</TagLabel>
              <TagCloseButton onClick={() => handleTagClose(tag)} />
            </Tag>
          ))}
        </VStack>
        <Select
          placeholder="Selecciona etiquetas"
          value={selectedTag}
          onChange={(e) => {
            const selectedValue = e.target.value;
            const selectedLabel = tags.find(
              (tag) => tag.value === selectedValue
            )?.label;
            if (selectedLabel) {
              const newTag = {
                id: selectedValue,
                value: selectedValue,
                label: selectedLabel,
              };
              onChange([...selectedTags, newTag]);
              setSelectedTag("");
            }
          }}
        >
          {tags.map((tag) => (
            <option
              key={tag.id}
              value={tag.value}
              disabled={selectedTags.some(
                (selectedTag) => selectedTag.value === tag.value
              )}
            >
              {tag.label}
            </option>
          ))}
        </Select>
      </FormControl>
    </Flex>
  );
}

export default TagsInput;
