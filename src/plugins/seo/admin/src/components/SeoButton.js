import React from "react";
import SearchIcon from "@strapi/icons/SearchIcon";
import { Button } from "@strapi/design-system";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
const SeoButton = () => {
  return (
    <Button variant="secondary" startIcon={<SearchIcon />}>
      Check page Seo
    </Button>
  );
};

export default SeoButton;
