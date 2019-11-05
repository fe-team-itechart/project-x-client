import { httpService } from './httpService';
import { links } from '../utils/constants';
import { sortTreeNodes } from '../utils/sortTreeNodes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getAllCategories = async () => {
  const response = await httpService.get({
    url: links.getAllCategories,
    config,
  });

  const { data } = response;
  const { data: categoriesData } = data;

  return sortTreeNodes(categoriesData);
};
