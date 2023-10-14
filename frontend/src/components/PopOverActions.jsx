import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdMore } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

export default function PopOverActions() {
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button onClick={onToggle}>
          <Icon as={IoMdMore} />
        </Button>
      </PopoverTrigger>
      <PopoverContent sx={{ width: "auto" }}>
        <PopoverArrow />
        <ButtonGroup display="flex" flexDirection="column" gap={0}>
          <Button
            variant="ghost"
            leftIcon={<Icon as={MdOutlineEdit} />}
            onClick={() => navigate("/detail")}
          >
            Editar
          </Button>
          <Button variant="ghost" leftIcon={<Icon as={RiDeleteBin6Line} />}>
            Borrar
          </Button>
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}
