const componentWillMount = () => {
  return {
    type: "INITIAL_SORT"
  };
};

const voteUp = post => {
  return {
    type: "VOTE_UP",
    post
  };
};

const voteDown = post => {
  return {
    type: "VOTE_DOWN",
    post
  };
};

const updateSortUp = () => {
  return {
    type: 'ASCENDENTENT_PRESSED'
  };
};

const updateSortDown = () => {
  return {
    type: 'DESCENDENTENT_PRESSED'
  };
};

export {componentWillMount, voteUp, voteDown, updateSortUp, updateSortDown};
