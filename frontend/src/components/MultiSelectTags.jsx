import PropTypes from "prop-types";
import { Flex, FormControl, FormLabel } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";

MultiSelectTags.propTypes = {
  label: PropTypes.string.isRequired,
  idLabel: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  preSelected: PropTypes.array,
};
function MultiSelectTags({ label, idLabel, options, preSelected = [] }) {
  return (
    <Flex flexGrow={1}>
      <FormControl id={idLabel} w="60">
        <FormLabel>{label}</FormLabel>
        <AutoComplete
          defaultValues={preSelected}
          openOnFocus
          multiple
          onChange={(vals) => console.log(vals)}
        >
          <AutoCompleteInput variant="filled">
            {({ tags }) =>
              tags.map((tag, tid) => (
                <AutoCompleteTag
                  key={tid}
                  label={tag.label}
                  onRemove={tag.onRemove}
                />
              ))
            }
          </AutoCompleteInput>
          <AutoCompleteList>
            {options.map((option, index) => (
              <AutoCompleteItem
                key={`option-${index}`}
                value={option}
                textTransform="capitalize"
                _selected={{ bg: "whiteAlpha.50" }}
                _focus={{ bg: "whiteAlpha.100" }}
              >
                {option}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
    </Flex>
  );
}

export default MultiSelectTags;
