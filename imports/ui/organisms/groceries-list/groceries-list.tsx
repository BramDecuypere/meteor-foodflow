import React, { useEffect, useRef, useState } from "react";

import ActiveListHook from "/imports/ui/hooks/active-list.hook";
import Accordion from "/imports/ui/molecules/accordion";
import DepartmentsHook from "/imports/ui/hooks/departments.hook";
import { AccordionBody } from "/imports/utils/get-groceries-list-accordion-body";
import { getIngredientsByDepartment } from "/imports/utils/get-ingredients-by-department";
import { isDepartmentCompleted } from "/imports/utils/is-department-complete";
import { getSortedIngredientsByDepartment } from "/imports/utils/get-sorted-ingredients-by-department";
import { Department } from "/imports/api/departments/departments";

const GroceriesList = () => {
  const activeList = ActiveListHook();
  const { departments } = DepartmentsHook();
  const ingredientsByDepartment = getIngredientsByDepartment(activeList);

  const selectedIngredients = useRef(activeList.selectedIngredients);
  const [openDepartments, setOpenDepartments] = useState<Department[]>([]);

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
      return dep.title.en === departmentTitle;
    });

    const isOpenDepartment = openDepartments
      .filter((val) => !!val)
      .find((val) => {
        if (!val) {
          console.error(
            "openDepartments.find - isOpenDepartment: ",
            val,
            departments
          );
          return false;
        }

        return val.title.en === departmentTitle;
      });

    if (isOpenDepartment) {
      setOpenDepartments(closeDepartment(departmentTitle));
    } else {
      setOpenDepartments([...openDepartments, _department!]);
    }
  };

  useEffect(() => {
    const newOpenDepartments = Object.keys(ingredientsByDepartment).map(
      (department) => {
        const val = departments.find((dep) => {
          if (!dep) {
            console.log("departments.find: ", dep, departments);
          }
          return dep.department === department;
        });

        return val || departments[0];
      }
    );

    setOpenDepartments(newOpenDepartments);
  }, [Object.keys(ingredientsByDepartment).length]);

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

  const checkIfDepartmentIsCompleted = (department: string) => {
    return isDepartmentCompleted(
      ingredientsByDepartment,
      department,
      activeList
    );
  };

  const handleCloseDepartmentWhenIngredientsAreCompleted = (
    department: string
  ) => {
    if (checkIfDepartmentIsCompleted(department)) {
      setOpenDepartments(closeDepartment(department));
    }
  };

  const AccordionMapperFunction = () => {
    return (department: string, idx: number) => {
      const sortedIngredientsByDepartment = getSortedIngredientsByDepartment(
        activeList,
        department,
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
          if (!val) {
            console.error(
              "openDepartments.find - isOpen: ",
              val,
              openDepartments
            );
            return false;
          }

          return val.title.en === title;
        });

      return (
        <Accordion
          key={idx}
          isComplete={checkIfDepartmentIsCompleted(department)}
          className="mb-6 md:mb-10 mx-auto max-w-2xl"
          title={title}
          body={
            <AccordionBody
              activeList={activeList}
              sortedIngredientsByDepartment={sortedIngredientsByDepartment}
            />
          }
          isOpen={!!isOpen}
          onChangeClick={handleDepartmentChange}
        />
      );
    };
  };

  if (activeList.loading) {
    return null;
  }

  return (
    <>
      {Object.keys(ingredientsByDepartment)
        .filter((department) => !checkIfDepartmentIsCompleted(department))
        .map(AccordionMapperFunction())}
      {Object.keys(ingredientsByDepartment)
        .filter((department) => checkIfDepartmentIsCompleted(department))
        .map(AccordionMapperFunction())}
    </>
  );
};

export default GroceriesList;
