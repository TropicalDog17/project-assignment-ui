import React from "react";
import { ApiContext } from "../common/api/api-context";

export const useApiGetProjectAssignments = () => React.useContext(ApiContext);