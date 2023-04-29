import { isDepartmentCompleted } from "/imports/utils/is-department-complete";
import { ActiveList } from "/interfaces/active-list";

export const checkIfDepartmentIsCompleted = (
  department: string,
  activeList: ActiveList
) => {
  return isDepartmentCompleted(department, activeList);
};
