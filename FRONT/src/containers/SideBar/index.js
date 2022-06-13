import { connect } from 'react-redux';

import { shuffleCategories, getPictureFromCategory } from 'src/utils/utils';

import SideBar from 'src/components/SideBar';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const { categories, shuffledPictures } = state.category;
  const shuffledCategories = shuffleCategories(categories, 4);

  const limitedPictures = getPictureFromCategory(shuffledPictures, shuffledCategories);

  return {
    categories: shuffledCategories,
    pictures: limitedPictures !== undefined ? limitedPictures : [],
    loading: state.main.sideLoading,
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
