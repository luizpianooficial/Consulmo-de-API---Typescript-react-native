import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCardDate = async (
  id: number,
  setCarDate: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await fetchGetCarData(id);
    if (response) {
      setCarDate(response);
    }
  } catch (error) {
    console.log('Erro ao buscar na API: ', error);
    setCarDate(null);
  }
};

export const handlePreviousItem = async (
  carDate: CarModel | null,
  setCarDate: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let response = null;
    if (carDate && carDate.id > 1) {
      response = await fetchGetCarData(carDate.id - 1);
    }

    if (response) {
      setCarDate(response);
    }
  } catch (error) {
    console.log('Erro ao chamar a API: ', error);
    setCarDate(null);
  }
};

export const handleNextItem = async (
  carDate: CarModel | null,
  setCarDate: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let response = null;
    if (carDate && carDate.id < 10) {
      response = await fetchGetCarData(carDate.id + 1);
    }

    if (response) {
      setCarDate(response);
    }
  } catch (error) {
    console.log('Erro ao chamar a API: ', error);
    setCarDate(null);
  }
};