import { useState } from "react";
import PropTypes from "prop-types";
import {
  Input,
  VStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Box,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";

TagsInputWithInput.propTypes = {
  suggestions: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  idLabel: PropTypes.string.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
};

function TagsInputWithInput({
  suggestions,
  tags,
  label,
  idLabel,
  onAddTag,
  onRemoveTag,
}) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([suggestions]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);

    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.label.toLowerCase().includes(input.toLowerCase()) &&
        !tags.find((tag) => tag.id === suggestion.id)
    );

    setFilteredSuggestions(filtered);
  };

  const handleAddTag = (tag) => {
    onAddTag(tag);
    setInputValue("");
    setFilteredSuggestions([]);
  };

  return (
    <Flex>
      <FormControl id={idLabel} w="60">
        <FormLabel>{label}</FormLabel>
        <Box>
          {tags.map((tag) => (
            <Tag key={tag.id} size="md">
              <TagLabel>{tag.label}</TagLabel>
              <TagCloseButton onClick={() => onRemoveTag(tag)} />
            </Tag>
          ))}
        </Box>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe una etiqueta"
        />
        <VStack>
          {filteredSuggestions.map((suggestion) => (
            <Tag key={suggestion.id} size="md" cursor="pointer">
              <TagLabel onClick={() => handleAddTag(suggestion)}>
                {suggestion.label}
              </TagLabel>
            </Tag>
          ))}
        </VStack>
      </FormControl>
    </Flex>
  );
}

export default TagsInputWithInput;
