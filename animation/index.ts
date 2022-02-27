export const slideLeftEntrance = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -15,
  },
};

export const listVariant = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const listContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const listContainer = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    x: 10,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
};
