import React, { useEffect, useRef, useState } from "react";

import ActiveListHook from "/imports/ui/hooks/active-list.hook";
import Accordion from "/imports/ui/molecules/accordion";
import DepartmentsHook from "/imports/ui/hooks/departments.hook";
import { AccordionBody } from "/imports/utils/get-groceries-list-accordion-body";
import { getIngredientsByDepartment } from "/imports/utils/get-ingredients-by-department";
import { getSortedIngredientsByDepartment } from "/imports/utils/get-sorted-ingredients-by-department";
import { Department } from "/imports/api/departments/departments";
import { checkIfDepartmentIsCompleted } from "/imports/utils/check-if-department-is-complete";

const DepartmentAccordeon = ({ department }: { department: string }) => {
  const activeList = ActiveListHook();
  const { departments } = DepartmentsHook();

  const selectedIngredients = useRef(activeList.selectedIngredients);

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

  const closeDepartment = (department: string) => {
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
      debugger;
      return dep.title.en === departmentTitle;
    });

    const isOpenDepartment = openDepartments
      .filter((val) => !!val)
      .find((val) => {
        return val.title.en === departmentTitle;
      });

    if (isOpenDepartment) {
      setOpenDepartments(closeDepartment(departmentTitle));
    } else {
      setOpenDepartments([...openDepartments, _department!]);
    }
  };

  const handleCloseDepartmentWhenIngredientsAreCompleted = (
    department: string
  ) => {
    if (checkIfDepartmentIsCompleted(department, activeList)) {
      setOpenDepartments(closeDepartment(department));
    }
  };

  useEffect(() => {
    const changedIngredients = activeList.selectedIngredients.filter(
      (ingredient) => {
        const isIngredientFoundInPreviousList =
          selectedIngredients.current.findIndex(
            ({ name }) => name === ingredient.name
          ) > -1;

        return !isIngredientFoundInPreviousList;
      }
    );

    if (changedIngredients.length === 1) {
      handleCloseDepartmentWhenIngredientsAreCompleted(
        changedIngredients[0].departments[0]
      );
    }

    selectedIngredients.current = activeList.selectedIngredients;
  }, [activeList.selectedIngredients.length]);

  useEffect(() => {
    const initialOpenDepartments = departments.filter((_department) => {
      const isDepartmentCompleted = checkIfDepartmentIsCompleted(
        _department.department,
        activeList
      );

      return !isDepartmentCompleted;
    });

    setOpenDepartments(initialOpenDepartments);
  }, [departments.length]);

  return (
    <Accordion
      isComplete={checkIfDepartmentIsCompleted(department, activeList)}
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
    <>
      {Object.keys(ingredientsByDepartment)
        .filter(
          (department) => !checkIfDepartmentIsCompleted(department, activeList)
        )
        .map((department, idx) => (
          <DepartmentAccordeon key={idx} department={department} />
        ))}

      {Object.keys(ingredientsByDepartment)
        .filter((department) =>
          checkIfDepartmentIsCompleted(department, activeList)
        )
        .map((department, idx) => (
          <DepartmentAccordeon key={idx} department={department} />
        ))}
    </>
  );
};

export default GroceriesList;
