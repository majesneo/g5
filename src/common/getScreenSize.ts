import { SCREEN_SIZE } from '@/enums';

export interface SCREEN_SIZES {
  XS: 320;
  SM: 375;
  SM_MD: 430;
  MD_SM: 530;
  MD: 744;
  LG_MD: 834;
  LG: 1024;
  LG_XL: 1280;
  XL: 1440;
  XXL: 1920;
}

export type SINGLE_SIZE_MAP = keyof SCREEN_SIZES;

export type SCREEN_SIZE_MAP = {
  [key in SINGLE_SIZE_MAP]?: SCREEN_SIZES[key];
};

export default (windowWidth: number): SCREEN_SIZE_MAP => {
  if (windowWidth <= SCREEN_SIZE.XS) {
    return { XS: SCREEN_SIZE.XS };
  }
  if (windowWidth > SCREEN_SIZE.XS && windowWidth <= SCREEN_SIZE.SM) {
    return { SM: SCREEN_SIZE.SM };
  }
  if (windowWidth > SCREEN_SIZE.SM && windowWidth <= SCREEN_SIZE.SM_MD) {
    return { SM_MD: SCREEN_SIZE.SM_MD };
  }
  if (windowWidth > SCREEN_SIZE.SM_MD && windowWidth <= SCREEN_SIZE.MD_SM) {
    return { MD_SM: SCREEN_SIZE.MD_SM };
  }
  if (windowWidth > SCREEN_SIZE.MD_SM && windowWidth <= SCREEN_SIZE.MD) {
    return { MD: SCREEN_SIZE.MD };
  }
  if (windowWidth > SCREEN_SIZE.MD && windowWidth <= SCREEN_SIZE.LG_MD) {
    return { LG_MD: SCREEN_SIZE.LG_MD };
  }
  if (windowWidth > SCREEN_SIZE.LG_MD && windowWidth <= SCREEN_SIZE.LG) {
    return { LG: SCREEN_SIZE.LG };
  }
  if (windowWidth > SCREEN_SIZE.LG && windowWidth <= SCREEN_SIZE.LG_XL) {
    return { LG_XL: SCREEN_SIZE.LG_XL };
  }
  if (windowWidth > SCREEN_SIZE.LG_XL && windowWidth <= SCREEN_SIZE.XL) {
    return { XL: SCREEN_SIZE.XL };
  }
  if (windowWidth > SCREEN_SIZE.XL && windowWidth < SCREEN_SIZE.XXL) {
    return { XXL: SCREEN_SIZE.XXL };
  }

  return { XXL: SCREEN_SIZE.XXL };
};
