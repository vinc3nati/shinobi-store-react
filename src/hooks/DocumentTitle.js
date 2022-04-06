import React, { useEffect } from "react";
import { capitalize } from "../utilities/capitalize";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `SHINOBI STORE | ${capitalize(title)}`;
  }, [title]);
};
