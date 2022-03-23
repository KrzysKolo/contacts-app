import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export function useToastHook() {
  const [state, setState] = useState<string | any>();
  const toast = useToast();

  useEffect(() => {
    if (state) {
      const { title, status } = state;

      toast({
        title: status,
        description: title,
        status: status,
        duration: 1000,
        position: "bottom",
        isClosable: true,
      });
    }
  }, [state, toast]);

  return [state, setState];
}