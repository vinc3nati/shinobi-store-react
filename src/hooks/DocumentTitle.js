import React, { useEffect } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `SHINOBI STORE | ${title.toUpperCase()}`;
  }, [title]);
};
