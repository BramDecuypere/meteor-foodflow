import React, { useEffect, useState } from "react";

import ActiveListHook from "/imports/ui/hooks/active-list.hook";
import Accordion from "/imports/ui/molecules/accordion";
import DepartmentsHook from "/imports/ui/hooks/departments.hook";
import { AccordionBody } from "/imports/utils/get-groceries-list-accordion-body";
import { getIngredientsByDepartment } from "/imports/utils/get-ingredients-by-department";
import { getSortedIngredientsByDepartment } from "/imports/utils/get-sorted-ingredients-by-department";
import { Department } from "/imports/api/departments/departments";
import { isDepartmentCompleted } from "/imports/utils/is-department-complete";
import RecipeList from "../../molecules/recipe-list";

const DepartmentAccordeon = ({ department }: { department: string }) => {
  const activeList = ActiveListHook();
  const { departments } = DepartmentsHook();

  const [openDepartments, setOpenDepartments] = useState<Department[]>([]);

  const sortedIngredientsByDepartment = getSortedIngredientsByDepartment(
    activeList,
    department
  );

  const _department = departments.find((value) => {
    if (!value) {
      console.error("departments.find: ", value, departments);
      return false;
    }

    return value.department === department;
  });

  const title = _department ? _department.title.en! : "";

  const isOpen = openDepartments
    .filter((val) => !!val)
    .find((val) => {
      return val.title.en === title;
    });

  const closeDepartmentByTitle = (department: string) => {
    return openDepartments.filter((_department) => {
      return _department.title.en !== department;
    });
  };

  const handleDepartmentChange = (departmentTitle: string) => {
    const _department = departments.find((dep) => {
      if (!dep) {
        console.error(
          "departments.find - handledepartmentchange: ",
          dep,
          departments
        );
        return false;
      }

      return dep.title.en === departmentTitle;
    });

    const isOpenDepartment = openDepartments
      .filter((val) => !!val)
      .find((val) => {
        return val.title.en === departmentTitle;
      });

    if (isOpenDepartment) {
      const nextOpenDepartments = closeDepartmentByTitle(departmentTitle);
      setOpenDepartments(nextOpenDepartments);
    } else {
      setOpenDepartments([...openDepartments, _department!]);
    }
  };

  useEffect(() => {
    const initialOpenDepartments = departments.filter((_department) => {
      const _isDepartmentCompleted = isDepartmentCompleted(
        _department.department,
        activeList
      );

      return !_isDepartmentCompleted;
    });

    setOpenDepartments(initialOpenDepartments);
  }, [departments.length, activeList.selectedIngredients.length]);

  return (
    <Accordion
      isComplete={isDepartmentCompleted(department, activeList)}
      className="mb-6 md:mb-10 mx-auto max-w-2xl"
      title={title}
      body={
        <AccordionBody
          activeList={activeList}
          sortedIngredientsByDepartment={sortedIngredientsByDepartment}
        />
      }
      isOpen={!!isOpen}
      onChangeClick={(title) => handleDepartmentChange(title)}
    />
  );
};

const GroceriesList = () => {
  const activeList = ActiveListHook();
  const ingredientsByDepartment = getIngredientsByDepartment(activeList);

  return (
    <RecipeList>
      {Object.keys(ingredientsByDepartment)
        .filter((department) => !isDepartmentCompleted(department, activeList))
        .map((department, idx) => (
          <DepartmentAccordeon key={idx} department={department} />
        ))}

      {Object.keys(ingredientsByDepartment)
        .filter((department) => isDepartmentCompleted(department, activeList))
        .map((department, idx) => (
          <DepartmentAccordeon key={idx} department={department} />
        ))}
    </RecipeList>
  );
};

export default GroceriesList;
