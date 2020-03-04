/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugByRecipeTitle = (title) => {
  const slug = slugify(title, { lower: true });
  return slug;
};

export const getUrlByRecipeTitle = (title) => {
  const url = `/recipe/${getSlugByRecipeTitle(title)}`;
  return url;
};
