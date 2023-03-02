import React, { useEffect, useRef, useState } from "react";

import ActiveListHook from "../../hooks/active-list.hook";

import Accordion from "../../molecules/accordion";
import { AccordionBody } from "./utils/get-groceries-list-accordion-body";
import { getIngredientsByDepartment } from "./utils/get-ingredients-by-department";
import { isDepartmentCompleted } from "./utils/is-department-complete";
import { getSortedIngredientsByDepartment } from "./utils/get-sorted-ingredients-by-department";
import Modal from "../../atoms/Modal";
import AddExtraItemForm from "../../molecules/add-extra-item-form";
import { FieldValues, SubmitHandler } from "react-hook-form";

const GroceriesList = ({
  isAddModalOpen,
  setAddModalIsOpen,
}: {
  isAddModalOpen: boolean;
  setAddModalIsOpen: (isOpen: boolean) => void;
}) => {
  const activeList = ActiveListHook();
  const ingredientsByDepartment = getIngredientsByDepartment(activeList);
  console.log(
    "🚀 ~ file: groceries-list.tsx:15 ~ GroceriesList ~ ingredientsByDepartment:",
    ingredientsByDepartment
  );
  const selectedIngredients = useRef(activeList.selectedIngredients);
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);

  const closeDepartment = (department: string) => {
    return openDepartments.filter((_department) => _department !== department);
  };

  const handleDepartmentChange = (department: string) => {
    const isOpenDepartment = openDepartments.indexOf(department) !== -1;

    if (isOpenDepartment) {
      setOpenDepartments(closeDepartment(department));
    } else {
      setOpenDepartments([...openDepartments, department]);
    }
  };

  useEffect(() => {
    setOpenDepartments(Object.keys(ingredientsByDepartment));
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
        ingredientsByDepartment,
        department,
        activeList
      );

      return (
        <Accordion
          key={idx}
          isComplete={checkIfDepartmentIsCompleted(department)}
          className="mb-6 md:mb-10 mx-auto max-w-2xl"
          title={department}
          body={
            <AccordionBody
              activeList={activeList}
              sortedIngredientsByDepartment={sortedIngredientsByDepartment}
            />
          }
          isOpen={openDepartments.indexOf(department) !== -1}
          onChangeClick={handleDepartmentChange}
        />
      );
    };
  };

  if (activeList.loading) {
    return null;
  }

  const options = [...Object.keys(ingredientsByDepartment), "Andere"].map(
    (val) => ({ value: val, label: val })
  );

  const onFormSubmit: SubmitHandler<FieldValues> = (e) => {
    console.log("data: ", e);
  };

  return (
    <>
      {Object.keys(ingredientsByDepartment)
        .filter((department) => !checkIfDepartmentIsCompleted(department))
        .map(AccordionMapperFunction())}
      {Object.keys(ingredientsByDepartment)
        .filter((department) => checkIfDepartmentIsCompleted(department))
        .map(AccordionMapperFunction())}
      <Modal
        isOpen={isAddModalOpen}
        setModalIsOpen={(isOpen: boolean) => setAddModalIsOpen(isOpen)}
      >
        <AddExtraItemForm options={options} onSubmit={onFormSubmit} />
      </Modal>
    </>
  );
};

export default GroceriesList;
